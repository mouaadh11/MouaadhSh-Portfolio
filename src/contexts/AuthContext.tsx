import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { auth, isFirebaseConfigured } from "@/lib/firebase";
import { AuthContext, type AuthContextValue } from "./auth";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(isFirebaseConfigured);

  useEffect(() => {
    if (!auth) {
      setIsLoading(false);
      return;
    }

    return onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setIsLoading(false);
    });
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isLoading,
      login: async (email, password) => {
        if (!auth) {
          throw new Error("Firebase Auth is not configured.");
        }

        await signInWithEmailAndPassword(auth, email, password);
      },
      logout: async () => {
        if (!auth) {
          return;
        }

        await signOut(auth);
      },
    }),
    [isLoading, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
