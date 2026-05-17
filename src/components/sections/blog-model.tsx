import BlogPortion from "../ui/blog-portion";

export default function BlogModel({
  imgUrl,
  title,
  date,
  readTime,
  discription,
  blogPortions,
}: {
  imgUrl: string;
  title: string;
  date: string;
  readTime: string;
  discription: string;
  blogPortions: { title: string; content: string[] }[];
}) {
  return (
    <>
      <article className="flex h-full flex-col items-center justify-center gap-14 lg:gap-25">
        <div className="flex w-full flex-col gap-4">
          <img
            src={imgUrl}
            alt="Blog"
            className="h-64 w-full rounded-lg bg-white object-cover object-center sm:h-80 lg:h-[460px]"
            loading="lazy"
          />
          <div className="flex w-full flex-col gap-2 text-base leading-7 text-gray sm:flex-row sm:justify-between sm:text-paragraph sm:leading-paragraph">
            <p>{date}</p>
            <p>{readTime} min read</p>
          </div>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-small-heading-1 sm:leading-small-heading-1">
            {title}
          </h1>
        </div>
        <div>
          <p className="text-base leading-7 text-gray sm:text-paragraph sm:leading-paragraph">
            {discription}
          </p>
          {blogPortions.map(({ title, content }, idx) => (
            <BlogPortion key={idx} title={title} content={content} />
          ))}
        </div>
      </article>
    </>
  );
}
