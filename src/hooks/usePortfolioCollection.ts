import { useEffect, useState } from "react";
import { getCollectionItems } from "@/services/portfolioService";
import type { PortfolioCollection, PortfolioCollectionMap } from "@/types/portfolio";

export function usePortfolioCollection<K extends PortfolioCollection>(collectionName: K) {
  const [items, setItems] = useState<PortfolioCollectionMap[K][]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadItems() {
      setIsLoading(true);
      setError(null);

      try {
        const firestoreItems = await getCollectionItems(collectionName);
        if (!isMounted) {
          return;
        }

        setItems(firestoreItems);
      } catch (caughtError) {
        if (!isMounted) {
          return;
        }

        setError(caughtError instanceof Error ? caughtError.message : "Unable to load content.");
        setItems([]);
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
  }, [collectionName]);

  return { items, isLoading, error };
}
