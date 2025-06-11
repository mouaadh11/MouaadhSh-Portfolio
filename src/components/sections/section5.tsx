import ElementCard from "../ui/element-card";
import SectionTitle from "../ui/section-title";

export default function Section5() {
  return (
    <div className=" flex flex-col gap-5">
      {/* Title */}
      <div>
        <SectionTitle titlePart1={"DESIGN"} titlePart2={"THOUGHTS"} />
      </div>
      {/* Posts */}
      <div className="flex flex-col gap-5">
        <ElementCard
          title="PixelForge Studios"
          description="Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement."
          date="Jan 2020 - Present"
          readTime="3"
        />
        <ElementCard
          title="PixelForge Studios"
          description="Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement."
          date="Jan 2020 - Present"
          readTime="3"
        />

      </div>
    </div>
  );
}
