import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { seedProfile } from "@/data/seedPortfolioData";
import { getProfile, updateProfile } from "@/services/portfolioService";
import type { Profile, SocialLink } from "@/types/portfolio";

function socialLinksToText(links: SocialLink[]) {
  return links.map((link) => [link.label, link.url, link.icon ?? ""].join(" | ")).join("\n");
}

function textToSocialLinks(value: string): SocialLink[] {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [label = "", url = "", icon = ""] = line.split("|").map((part) => part.trim());
      return { label, url, icon };
    })
    .filter((link) => link.label && link.url);
}

export default function AdminProfileForm() {
  const [profile, setProfile] = useState<Profile>(seedProfile);
  const [socialLinks, setSocialLinks] = useState(socialLinksToText(seedProfile.socialLinks));
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      try {
        const firestoreProfile = await getProfile();
        if (firestoreProfile) {
          setProfile(firestoreProfile);
          setSocialLinks(socialLinksToText(firestoreProfile.socialLinks ?? []));
        }
      } catch (caughtError) {
        toast.error(caughtError instanceof Error ? caughtError.message : "Unable to load profile.");
      }
    }

    void loadProfile();
  }, []);

  function updateField(field: keyof Profile, value: string) {
    setProfile((currentProfile) => ({ ...currentProfile, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!profile.name || !profile.title || !profile.bio) {
      toast.error("Name, title, and bio are required.");
      return;
    }

    setIsSaving(true);

    try {
      await updateProfile({
        ...profile,
        socialLinks: textToSocialLinks(socialLinks),
      });
      toast.success("Profile updated.");
    } catch (caughtError) {
      toast.error(caughtError instanceof Error ? caughtError.message : "Unable to save profile.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-3xl flex-col gap-4 rounded-2xl border border-white/10 bg-white/10 p-5"
    >
      <div>
        <h2 className="text-2xl font-black">Profile</h2>
        <p className="mt-1 text-sm text-gray">
          Main hero/sidebar identity content and social links.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={profile.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="border-white/20 bg-black/30 text-white"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={profile.location}
            onChange={(event) => updateField("location", event.target.value)}
            className="border-white/20 bg-black/30 text-white"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="title">Title</Label>
        <Textarea
          id="title"
          value={profile.title}
          onChange={(event) => updateField("title", event.target.value)}
          className="border-white/20 bg-black/30 text-white"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          value={profile.bio}
          onChange={(event) => updateField("bio", event.target.value)}
          className="min-h-32 border-white/20 bg-black/30 text-white"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="avatarUrl">Avatar URL</Label>
          <Input
            id="avatarUrl"
            value={profile.avatarUrl}
            onChange={(event) => updateField("avatarUrl", event.target.value)}
            className="border-white/20 bg-black/30 text-white"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={profile.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="border-white/20 bg-black/30 text-white"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="socialLinks">Social links</Label>
        <Textarea
          id="socialLinks"
          value={socialLinks}
          onChange={(event) => setSocialLinks(event.target.value)}
          className="min-h-28 border-white/20 bg-black/30 text-white"
          placeholder="Label | URL | optional icon URL"
        />
      </div>

      <Button type="submit" disabled={isSaving} className="bg-orange text-black hover:bg-orange/90">
        {isSaving ? "Saving..." : "Save profile"}
      </Button>
    </form>
  );
}
