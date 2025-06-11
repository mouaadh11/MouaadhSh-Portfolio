import SectionTitle from "../ui/section-title";
import ToolCard from "../ui/tool-card";

export default function Section4() {
  return (
    <div className=" flex flex-col gap-5">
      {/* Title */}
      <div>
        <SectionTitle titlePart1={"PREMIUM"} titlePart2={"TOOLS"} />
      </div>
      {/* Tools */}
      <div className="grid grid-cols-2 gap-5">
        <ToolCard
          imgUrl="/Arduino.png"
          title="Arduino"
          description="Hardware and sensor programming"
        />
        <ToolCard
          imgUrl="/figma.svg"
          title="Figma"
          description="UI design and prototyping"
        />
        <ToolCard
          imgUrl="/reactjs.svg"
          title="React"
          description="Frontend web app framework"
        />
        <ToolCard
          imgUrl="/tailwind.svg"
          title="Tailwind"
          description="Utility-first CSS framework"
        />
      </div>
    </div>
  );
}
