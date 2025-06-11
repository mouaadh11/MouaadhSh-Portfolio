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
    <div className="p-4 flex flex-row gap-4 hover:bg-white/20 rounded-2xl transition-colors duration-500">
      <div className="bg-white p-4 rounded-2xl w-15 h-15 shrink-0">
        <img src={imgUrl} alt="FramerIcon" width={28} height={28} />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-h3 leading-h3 font-semibold text-white">{title}</h1>
        <p className="text-small-paragraph leading-small-paragraph text-gray">
          {description}
        </p>
      </div>
    </div>
  );
}
