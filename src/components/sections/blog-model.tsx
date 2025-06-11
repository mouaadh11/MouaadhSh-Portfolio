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
      <div className="flex flex-col gap-25 items-center justify-center h-full">
        <div className="flex flex-col gap-4">
          <img
            src={imgUrl}
            alt="Blog"
            className="rounded-lg bg-white h-[460px] object-center object-cover"
            loading="lazy"
          />
          <div className="flex gap-4 w-full justify-between text-paragraph leading-paragraph text-gray">
            <p>{date}</p>
            <p>{readTime} min read</p>
          </div>
          <h1 className="text-small-heading-1 leading-small-heading-1 font-extrabold transform-none text-white">
            {title}
          </h1>
        </div>
        <div>
          <p className="text-paragraph leading-paragraph text-gray">
            {discription}
          </p>
          {blogPortions.map(({ title, content }, idx) => (
            <BlogPortion key={idx} title={title} content={content} />
          ))}
        </div>
      </div>
    </>
  );
}
