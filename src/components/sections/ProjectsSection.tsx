import { usePortfolioCollection } from "@/hooks/usePortfolioCollection";
import ElementCard from "../ui/element-card";
import SectionTitle from "../ui/section-title";

export default function ProjectsSection() {
  const { items, isLoading } = usePortfolioCollection("projects");

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
          {items.map((project) => {
            const blogSlug = project.blogSlug;
            const element = (
              <ElementCard
                key={project.id}
                imgUrl={project.imageUrl}
                title={project.title}
                description={project.description}
                blogSlug={blogSlug}
              />
            );

            // If there's an external link and no blog slug, wrap in anchor
            if (!blogSlug && (project.link || project.githubUrl)) {
              return (
                <a key={project.id} href={project.link || project.githubUrl || "#"}>
                  {element}
                </a>
              );
            }

            return element;
          })}
        </div>
      )}
    </div>
  );
}
