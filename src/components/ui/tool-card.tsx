export default function ToolCard({
  imgUrl,
  title,
  description,
}: {
  imgUrl: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-row gap-4 rounded-2xl p-4 transition-colors duration-500 hover:bg-white/20">
      <div className="bg-white p-4 rounded-2xl w-15 h-15 shrink-0">
        <img src={imgUrl} alt="FramerIcon" width={28} height={28} />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold leading-7 text-white sm:text-h3 sm:leading-h3">
          {title}
        </h1>
        <p className="text-small-paragraph leading-small-paragraph text-gray">
          {description}
        </p>
      </div>
    </div>
  );
}
