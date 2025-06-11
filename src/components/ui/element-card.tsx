export default function ElementCard({
  title,
  description,
  date,
  readTime,
  imgUrl,
}: {
  title: string;
  description: string;
  date?: string;
  readTime?: string;
  imgUrl?: string;
}) {
  return (
    <div className="px-4 py-4 relative  bg-white/20 hover:bg-white/40 rounded-2xl">
      <div className="absolute right-4 top-9 ">
        <img src="/arrow-up-right.svg" alt="arrowUpRightIcon" />
      </div>
      <div className="flex flex-row gap-5 items-center">
        {imgUrl && (
          <div className="w-[130px] h-[135px] overflow-hidden rounded-2xl shrink-0">
            <img
              src={imgUrl}
              alt="Project-Screenshot"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex flex-col gap-5 w-full">
          {/* Title & Description */}
          <div className="flex flex-col gap-3.5 max-w-[480px]">
            <h1 className="text-h3 leading-h3 font-semibold text-white">
              {title}
            </h1>
            <p className="text-small-paragraph leading-small-paragraph text-gray">
              {description}
            </p>
          </div>
          {/* Date & Read Time */}
          <div className="flex flex-row gap-5 justify-between text-gray">
            {date && (
              <p className="text-small-paragraph leading-small-paragraph text-gray">
                {date}
              </p>
            )}
            {readTime && (
              <p>
                <span className="text-small-paragraph leading-small-paragraph font-bold">
                  {readTime} min
                </span>{" "}
                read
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
