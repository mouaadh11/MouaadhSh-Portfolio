import { Left } from "./left-side";
import { Right } from "./right-side";

export default function Index() {
  return (
    <div className="min-h-screen max-w-6xl bg-black text-white flex flex-row gap-[100px]">
      <Left />
      <Right />
    </div>
  );
}
