
import Section1 from "./sections/HeroSection";
import Section2 from "./sections/ProjectsSection";
import Section3 from "./sections/ExperienceSection";
import Section4 from "./sections/ToolsSection";
import Section5 from "./sections/EducationSection";

// import Section5 from "./sections/DesignThoughtsSection";
import Section6 from "./sections/ContactSection";

export function Right() {
  return (
    <div className="flex w-full flex-col gap-16 lg:gap-20">
      {/* Section 1 */}
      <Section1 />
      {/* section 2 */}
      <Section2 />
      {/* section 3 */}
      <Section3 />
      <Section5 />
      {/* section 4 */}
      <Section4 />
      {/* section 5 */}
      {/* section 6 */}
      <Section6 />
    </div>
  );
}
