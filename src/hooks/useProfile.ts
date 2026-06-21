import { useEffect, useState } from "react";
import { getProfile } from "@/services/portfolioService";
import { emptyProfile } from "@/lib/portfolioDefaults";
import type { Profile } from "@/types/portfolio";

export function useProfile() {
  const [profile, setProfile] = useState<Profile>(emptyProfile);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadProfile() {
      try {
        const firestoreProfile = await getProfile();
        if (isMounted && firestoreProfile) {
          setProfile(firestoreProfile);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  return { profile, isLoading };
}
