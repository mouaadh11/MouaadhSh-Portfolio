import ElementCard from "../ui/element-card";
import SectionTitle from "../ui/section-title";

export default function MyWork() {
  return (
    <div className=" flex flex-col gap-5">
      {/* Title */}
      <div>
        <SectionTitle titlePart1={"MY 👨🏻‍💻"} titlePart2={"WORK"} />
      </div>
      {/* Projects */}
      <div className="flex flex-col gap-5">
        <a href="/blog/GraduationProject">
          <ElementCard
            imgUrl="/screenshot.png"
            title="Graduation Project: A Journey of Challenges and Growth"
            description="the graduation project. It was a phase filled with real challenges, teamwork, and deep learning."
          />
        </a>
        <a href="/blog/SpanishLearning">
          <ElementCard
            imgUrl="/screenshot.png"
            title="A Spanish Practice Tool"
            description="a free web app that helps beginners in Spanish practice simple conversation topics using random prompts. It’s a small project with a big goal: to make speaking Spanish feel easier and more fun."
          />
        </a>
      </div>
    </div>
  );
}
