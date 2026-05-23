import { usePortfolioCollection } from "@/hooks/usePortfolioCollection";
import ElementCard from "../ui/element-card";
import SectionTitle from "../ui/section-title";

export default function Section3() {
  const { items, isLoading } = usePortfolioCollection("experience");

  return (
    <div className="flex flex-col gap-5">
      <SectionTitle titlePart1="MY" titlePart2="JOURNEY" />

      {isLoading ? (
        <p className="text-small-paragraph leading-small-paragraph text-gray">
          Loading journey...
        </p>
      ) : items.length === 0 ? (
        <p className="text-small-paragraph leading-small-paragraph text-gray">
          Journey entries will be added soon.
        </p>
      ) : (
        <div className="flex flex-col gap-5">
          {items.map((item) => (
            <ElementCard
              key={item.id}
              title={item.title}
              description={`${item.description}${item.company ? ` - ${item.company}` : ""}`}
              date={[item.startDate, item.endDate].filter(Boolean).join(" - ")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
