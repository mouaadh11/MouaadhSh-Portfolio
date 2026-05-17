import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Vector1 from "@/components/vector/vector1";
import Vector2 from "@/components/vector/vector2";
import { useProfile } from "@/hooks/useProfile";

export default function StickyCard() {
  const { profile } = useProfile();

  return (
    <Card className="relative flex w-full flex-col items-center gap-6 overflow-hidden px-5 py-6 sm:px-6 lg:h-[640px] lg:w-[344px] lg:py-8">
      <div
        aria-hidden="true"
        className="h-25 w-49 absolute top-0 left-0 z-1 overflow-hidden"
      >
        <Vector1 className="h-full w-full top-[-18px] left-0 relative" />
      </div>

      <div className="h-56 w-48 shrink-0 overflow-hidden rounded-2xl bg-amber-700 sm:h-72 sm:w-60">
        <img
          src={profile.avatarUrl}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex w-full flex-col items-center justify-between gap-6 lg:h-full">
        <p className="text-center text-3xl font-black sm:text-4xl">
          {profile.name}
        </p>
        <div className="absolute left-0 top-[22rem] z-1 hidden h-41 w-60 overflow-hidden sm:block">
          <Vector2 className="h-full w-full top-0 left-[-135px] relative" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="z-20 max-w-md text-center text-sm leading-6 text-gray sm:text-base">
            {profile.title}
          </p>
          <div className="flex flex-row gap-5 sm:gap-8">
            {profile.socialLinks.map((link) => (
              <Button key={`${link.label}-${link.url}`} asChild variant="ghost" size="icon">
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  <img src={link.icon || "/arrow-up-right.svg"} alt={link.label} />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}


