import { useNavigate } from "react-router-dom";
import { usePortfolioCollection } from "@/hooks/usePortfolioCollection";
import { useProfile } from "@/hooks/useProfile";
import { Button } from "../ui/button";
import SectionTitle from "../ui/section-title";
import ArrowRight from "../vector/arrow-right";
import Box1Vector from "../vector/box1-vector";
import Box2Vector from "../vector/box2-vector";

function renderTitleWithOrangeDelimiters(title: string) {
  return title.split(/(\|)/g).map((part, index) =>
    part === "|" ? (
      <span key={`${part}-${index}`} className="font-bold text-orange">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export default function HeroSection() {
  const navigate = useNavigate();
  const { profile } = useProfile();
  const { items: achievements, isLoading } = usePortfolioCollection("achievements");
  const firstAchievement = achievements[0];
  const secondAchievement = achievements[1];

  return (
    <div className="flex flex-col gap-12 lg:gap-15">
      <div className="flex flex-col gap-2.5">
        <SectionTitle titlePart1="SOFTWARE DEVELOPER" titlePart2="& QA TESTER" />
        <div>
          <p className="mt-6 text-base leading-7 text-gray sm:text-paragraph sm:leading-paragraph">
            <span className="font-bold text-orange">"</span>
            {renderTitleWithOrangeDelimiters(profile.title)}
            <span className="font-bold text-orange">"</span>
          </p>
          <p className="mt-3 text-left text-base leading-7 text-gray sm:text-paragraph sm:leading-paragraph md:text-justify">
            {profile.bio}
          </p>
        </div>
      </div>

      <div>
        <SectionTitle titlePart1="PROUD" titlePart2="MOMENTS" />
        <p className="mt-5 text-base leading-7 text-gray sm:text-paragraph sm:leading-paragraph">
          <span className="font-bold text-orange">"</span>
          Recognized for academic excellence and practical growth.
          <span className="font-bold text-orange">"</span>
        </p>

        {isLoading ? (
          <p className="mt-3 text-small-paragraph leading-small-paragraph text-gray">
            Loading achievements...
          </p>
        ) : achievements.length === 0 ? (
          <p className="mt-3 text-small-paragraph leading-small-paragraph text-gray">
            Achievements will be added soon.
          </p>
        ) : (
          <div className="mt-3 grid gap-5 sm:grid-cols-2 lg:h-[240px] lg:gap-10">
            {firstAchievement && (
              <div className="relative flex min-h-[220px] flex-col gap-5 overflow-hidden rounded-2xl bg-orange-400 p-5 pt-10 sm:min-h-0 lg:w-[300px] lg:shrink-0">
                <div className="absolute rounded-2xl overflow-hidden w-[300px] top-0 left-0 z-1">
                  <Box1Vector />
                  <Box1Vector />
                </div>
                <img
                  src={firstAchievement.imageUrl || "/award-white.svg"}
                  alt=""
                  className="w-10 h-10 shrink-0"
                />
                <div className="flex flex-col justify-between items-end h-full z-10">
                  <p className="text-xl sm:text-2xl">{firstAchievement.title}</p>
                  {firstAchievement.blogSlug ? (
                    <Button
                      variant="outline"
                      className="bg-transparent hover:text-orange transition-colors duration-200"
                      onClick={() => navigate(`/blog/${firstAchievement.blogSlug}`)}
                    >
                      <ArrowRight />
                    </Button>
                  ) : null}
                </div>
              </div>
            )}

            {secondAchievement && (
              <div className="relative flex min-h-[220px] flex-col gap-5 overflow-hidden rounded-2xl bg-[#c5ff41] p-5 pt-10 text-black sm:min-h-0">
                <div className="absolute rounded-2xl overflow-hidden w-full h-full top-0 left-0 z-1">
                  <Box2Vector className="top-[-75px] relative" />
                  <Box2Vector className="top-[-180px] left-[-25px] rotate-180 relative" />
                </div>
                <img
                  src={secondAchievement.imageUrl || "/award-black.svg"}
                  alt=""
                  className="w-10 h-10 shrink-0"
                />
                <div className="flex flex-col justify-between items-end h-full z-10">
                  <p className="text-xl sm:text-2xl">{secondAchievement.title}</p>
                  {secondAchievement.blogSlug ? (
                    <Button
                      variant="outline"
                      className="bg-transparent text-black hover:text-[#C5FF41] border-black hover:bg-black transition-colors duration-200"
                      onClick={() => navigate(`/blog/${secondAchievement.blogSlug}`)}
                    >
                      <ArrowRight />
                    </Button>
                  ) : null}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
