import ElementCard from "../ui/element-card";
import SectionTitle from "../ui/section-title";

export default function Section3() {
  return (
    <div className=" flex flex-col gap-5">
      {/* Title */}
      <div>
        <SectionTitle titlePart1={"MY 🧭"} titlePart2={"JOURNEY"} />
      </div>
      {/* Experence */}
      <div className="flex flex-col gap-5">
        <ElementCard
          title="Designing Dental Prostheses with CAD: My First Tech Job"
          description="I worked at Razan Dental in Chlef, Algeria, where I created digital dental prostheses using exoCad software."
          date="Jun 10, 2025"
        />
        <ElementCard
          title="Packaging Assistant in Germany: Work, Study, and Growth"
          description="A part-time job as a packaging assistant at Nakon GmbH in Schweinfurt, Germany. While balancing my robotics studies."
          date="Jun 10, 2025"
        />
      </div>
    </div>
  );
}
