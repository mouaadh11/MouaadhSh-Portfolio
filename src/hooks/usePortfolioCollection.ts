import { useEffect, useState } from "react";
import { isFirebaseConfigured } from "@/lib/firebase";
import { getCollectionItems } from "@/services/portfolioService";
import type { PortfolioCollection, PortfolioCollectionMap } from "@/types/portfolio";

const emptyCollectionItems: never[] = [];

export function usePortfolioCollection<K extends PortfolioCollection>(
  collectionName: K,
  fallbackItems: PortfolioCollectionMap[K][] = emptyCollectionItems,
) {
  const [items, setItems] = useState<PortfolioCollectionMap[K][]>(fallbackItems);
  const [isLoading, setIsLoading] = useState(isFirebaseConfigured);
  const [error, setError] = useState<string | null>(null);
  const [usedFallback, setUsedFallback] = useState(!isFirebaseConfigured);

  useEffect(() => {
    let isMounted = true;

    async function loadItems() {
      if (!isFirebaseConfigured) {
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const firestoreItems = await getCollectionItems(collectionName);
        if (!isMounted) {
          return;
        }

        if (firestoreItems.length > 0) {
          setItems(firestoreItems);
          setUsedFallback(false);
        } else {
          setItems(fallbackItems);
          setUsedFallback(true);
        }
      } catch (caughtError) {
        if (!isMounted) {
          return;
        }

        setError(caughtError instanceof Error ? caughtError.message : "Unable to load content.");
        setItems(fallbackItems);
        setUsedFallback(true);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadItems();

    return () => {
      isMounted = false;
    };
  }, [collectionName, fallbackItems]);

  return { items, isLoading, error, usedFallback };
}
