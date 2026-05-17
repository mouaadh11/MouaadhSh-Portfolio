import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  type DocumentData,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type {
  Blog,
  PortfolioCollection,
  PortfolioCollectionMap,
  Profile,
} from "@/types/portfolio";

function requireDb() {
  if (!db) {
    throw new Error("Firebase is not configured. Add Vite Firebase environment variables.");
  }

  return db;
}

function withId<T>(documentData: DocumentData, id: string): T {
  return { id, ...documentData } as T;
}

export async function getCollectionItems<K extends PortfolioCollection>(
  collectionName: K,
): Promise<PortfolioCollectionMap[K][]> {
  const firestore = requireDb();
  const collectionQuery = query(
    collection(firestore, collectionName),
    orderBy("order", "asc"),
  );
  const snapshot = await getDocs(collectionQuery);

  return snapshot.docs.map((item) =>
    withId<PortfolioCollectionMap[K]>(item.data(), item.id),
  );
}

export async function createItem<K extends PortfolioCollection>(
  collectionName: K,
  item: Omit<PortfolioCollectionMap[K], "id" | "createdAt" | "updatedAt">,
): Promise<string> {
  const firestore = requireDb();
  const documentRef = await addDoc(collection(firestore, collectionName), {
    ...item,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return documentRef.id;
}

export async function createPortfolioItem(
  collectionName: PortfolioCollection,
  item: Record<string, unknown>,
): Promise<string> {
  const firestore = requireDb();
  const documentRef = await addDoc(collection(firestore, collectionName), {
    ...item,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return documentRef.id;
}

export async function updateItem<K extends PortfolioCollection>(
  collectionName: K,
  id: string,
  item: Partial<Omit<PortfolioCollectionMap[K], "id" | "createdAt" | "updatedAt">>,
): Promise<void> {
  const firestore = requireDb();
  await updateDoc(doc(firestore, collectionName, id), {
    ...item,
    updatedAt: serverTimestamp(),
  });
}

export async function updatePortfolioItem(
  collectionName: PortfolioCollection,
  id: string,
  item: Record<string, unknown>,
): Promise<void> {
  const firestore = requireDb();
  await updateDoc(doc(firestore, collectionName, id), {
    ...item,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteItem(
  collectionName: PortfolioCollection,
  id: string,
): Promise<void> {
  const firestore = requireDb();
  await deleteDoc(doc(firestore, collectionName, id));
}

export async function getBlogBySlug(slug: string, includeDrafts = false): Promise<Blog | null> {
  const firestore = requireDb();
  const constraints = includeDrafts
    ? [where("slug", "==", slug), limit(1)]
    : [where("slug", "==", slug), where("published", "==", true), limit(1)];
  const blogQuery = query(collection(firestore, "blogs"), ...constraints);
  const snapshot = await getDocs(blogQuery);
  const blogDoc = snapshot.docs[0];

  return blogDoc ? withId<Blog>(blogDoc.data(), blogDoc.id) : null;
}

export async function getProfile(): Promise<Profile | null> {
  const firestore = requireDb();
  const snapshot = await getDoc(doc(firestore, "profile", "main"));

  return snapshot.exists() ? (snapshot.data() as Profile) : null;
}

export async function updateProfile(profile: Profile): Promise<void> {
  const firestore = requireDb();
  await setDoc(
    doc(firestore, "profile", "main"),
    {
      ...profile,
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}

export async function seedDefaultPortfolioData(data: {
  profile: Profile;
  projects: PortfolioCollectionMap["projects"][];
  education: PortfolioCollectionMap["education"][];
  experience: PortfolioCollectionMap["experience"][];
  achievements: PortfolioCollectionMap["achievements"][];
  tools: PortfolioCollectionMap["tools"][];
  blogs: Blog[];
}): Promise<void> {
  const firestore = requireDb();
  await updateProfile(data.profile);

  const collectionNames: PortfolioCollection[] = [
    "projects",
    "education",
    "experience",
    "achievements",
    "tools",
    "blogs",
  ];

  await Promise.all(
    collectionNames.flatMap((collectionName) =>
      data[collectionName].map((item) => {
        const { id, ...itemWithMetadata } = item;
        const payload = { ...itemWithMetadata };
        delete payload.createdAt;
        delete payload.updatedAt;

        return setDoc(
          doc(firestore, collectionName, id),
          {
            ...payload,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          },
          { merge: true },
        );
      }),
    ),
  );
}
