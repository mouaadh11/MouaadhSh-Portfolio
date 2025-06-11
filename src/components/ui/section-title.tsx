
export default function SectionTitle({ titlePart1, titlePart2 }: { titlePart1: string; titlePart2?: string }) {
  return (
    <div>
      <h1 className="text-h1 leading-h1 font-bold text-white">{titlePart1}</h1>
      {titlePart2 && (
        <h1 className="text-h1 leading-h1  font-bold text-soft-gray">
          {titlePart2}
        </h1>
      )}
    </div>
  );
}
