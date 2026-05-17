import { seedProjects } from "@/data/seedPortfolioData";
import { usePortfolioCollection } from "@/hooks/usePortfolioCollection";
import ElementCard from "../ui/element-card";
import SectionTitle from "../ui/section-title";

export default function MyWork() {
  const { items, isLoading } = usePortfolioCollection("projects", seedProjects);

  return (
    <div className="flex flex-col gap-5">
      <SectionTitle titlePart1="MY WORK" titlePart2="PROJECTS" />

      {isLoading ? (
        <p className="text-small-paragraph leading-small-paragraph text-gray">
          Loading projects...
        </p>
      ) : items.length === 0 ? (
        <p className="text-small-paragraph leading-small-paragraph text-gray">
          Projects will be added soon.
        </p>
      ) : (
        <div className="flex flex-col gap-5">
          {items.map((project) => (
            <a key={project.id} href={project.link || project.githubUrl || "#"}>
              <ElementCard
                imgUrl={project.imageUrl}
                title={project.title}
                description={project.description}
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
