import { usePortfolioCollection } from "@/hooks/usePortfolioCollection";
import SectionTitle from "../ui/section-title";
import ToolCard from "../ui/tool-card";

export default function ToolsSection() {
  const { items, isLoading } = usePortfolioCollection("tools");

  return (
    <div className="flex flex-col gap-5">
      <SectionTitle titlePart1="PREMIUM" titlePart2="TOOLS" />

      {isLoading ? (
        <p className="text-small-paragraph leading-small-paragraph text-gray">
          Loading tools...
        </p>
      ) : items.length === 0 ? (
        <p className="text-small-paragraph leading-small-paragraph text-gray">
          Tools will be added soon.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {items.map((tool) => (
            <ToolCard
              key={tool.id}
              imgUrl={tool.iconUrl || "/tool.svg"}
              title={tool.name}
              description={tool.category}
            />
          ))}
        </div>
      )}
    </div>
  );
}
