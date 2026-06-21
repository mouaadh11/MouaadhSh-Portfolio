
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ToolsSection from "./sections/ToolsSection";
import EducationSection from "./sections/EducationSection";

// import DesignThoughtsSection from "./sections/DesignThoughtsSection";
import ContactSection from "./sections/ContactSection";

export function Right() {
  return (
    <div className="flex w-full flex-col gap-16 lg:gap-20">
      {/* Section 1 */}
      <HeroSection />
      {/* section 2 */}
      <ProjectsSection />
      {/* section 3 */}
      <ExperienceSection />
      <EducationSection />
      {/* section 4 */}
      <ToolsSection />
      {/* section 6 */}
      <ContactSection />
    </div>
  );
}
