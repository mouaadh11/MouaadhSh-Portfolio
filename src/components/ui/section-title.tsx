
export default function SectionTitle({ titlePart1, titlePart2 }: { titlePart1: string; titlePart2?: string }) {
  return (
    <div>
      <h1 className="break-words text-5xl font-bold leading-none text-white sm:text-6xl lg:text-h1 lg:leading-h1">
        {titlePart1}
      </h1>
      {titlePart2 && (
        <h1 className="break-words text-5xl font-bold leading-none text-soft-gray sm:text-6xl lg:text-h1 lg:leading-h1">
          {titlePart2}
        </h1>
      )}
    </div>
  );
}
