type BlogPortionProps = {
  title: string;
  content:  string[];
};

export default function BlogPortion({title, content}: BlogPortionProps) {
  return (
    <>
      <h2 className="text-small-heading-2 leading-small-heading-2 font-extrabold transform-none text-white mt-10">
        {title}
      </h2>
      {content.map((paragraph, index) => (
        <p key={index} className="text-paragraph leading-paragraph text-gray mt-5">
          {paragraph}
        </p>
      ))}
    </>
  );
}
