type BlogPortionProps = {
  title: string;
  content:  string[];
};

export default function BlogPortion({title, content}: BlogPortionProps) {
  return (
    <>
      <h2 className="mt-10 text-2xl font-extrabold leading-tight text-white sm:text-small-heading-2 sm:leading-small-heading-2">
        {title}
      </h2>
      {content.map((paragraph, index) => (
        <p key={index} className="mt-5 text-base leading-7 text-gray sm:text-paragraph sm:leading-paragraph">
          {paragraph}
        </p>
      ))}
    </>
  );
}
