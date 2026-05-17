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
    <div className="relative rounded-2xl bg-white/20 px-4 py-4 transition-colors hover:bg-white/40">
      <div className="absolute right-4 top-5 sm:top-9">
        <img src="/arrow-up-right.svg" alt="arrowUpRightIcon" />
      </div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        {imgUrl && (
          <div className="h-48 w-full shrink-0 overflow-hidden rounded-2xl sm:h-[135px] sm:w-[130px]">
            <img
              src={imgUrl}
              alt="Project-Screenshot"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex flex-col gap-5 w-full">
          {/* Title & Description */}
          <div className="max-w-[480px] pr-8 sm:pr-0 flex flex-col gap-3.5">
            <h1 className="text-xl font-semibold leading-7 text-white sm:text-h3 sm:leading-h3">
              {title}
            </h1>
            <p className="text-small-paragraph leading-small-paragraph text-gray">
              {description}
            </p>
          </div>
          {/* Date & Read Time */}
          <div className="flex flex-col gap-2 text-gray sm:flex-row sm:justify-between sm:gap-5">
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
