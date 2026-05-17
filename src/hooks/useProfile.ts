import { useEffect, useState } from "react";
import { seedProfile } from "@/data/seedPortfolioData";
import { isFirebaseConfigured } from "@/lib/firebase";
import { getProfile } from "@/services/portfolioService";
import type { Profile } from "@/types/portfolio";

export function useProfile() {
  const [profile, setProfile] = useState<Profile>(seedProfile);
  const [isLoading, setIsLoading] = useState(isFirebaseConfigured);

  useEffect(() => {
    let isMounted = true;

    async function loadProfile() {
      if (!isFirebaseConfigured) {
        return;
      }

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
