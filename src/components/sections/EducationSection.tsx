import { usePortfolioCollection } from "@/hooks/usePortfolioCollection";
import ElementCard from "../ui/element-card";
import SectionTitle from "../ui/section-title";

export default function EducationSection() {
  const { items, isLoading } = usePortfolioCollection("education");

  return (
    <div className="flex flex-col gap-5">
      <SectionTitle titlePart1="MY STUDIES" titlePart2="EDUCATION" />

      {isLoading ? (
        <p className="text-small-paragraph leading-small-paragraph text-gray">
          Loading education...
        </p>
      ) : items.length === 0 ? (
        <p className="text-small-paragraph leading-small-paragraph text-gray">
          Education content will be added soon.
        </p>
      ) : (
        <div className="flex flex-col gap-5">
          {items.map((item) => (
            <ElementCard
              key={item.id}
              title={`${item.title} - ${item.institution}`}
              description={item.description}
              date={[item.startDate, item.endDate].filter(Boolean).join(" - ")}
              blogSlug={item.blogSlug}
            />
          ))}
        </div>
      )}
    </div>
  );
}
