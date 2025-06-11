import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Vector1 from "@/components/vector/vector1";
import Vector2 from "@/components/vector/vector2";

export default function StickyCard() {
  return (
    <Card className="w-[344px] h-[640px] py-8 px-6 flex flex-col gap-6 content-center items-center overflow-hidden">
      <div
        aria-hidden="true"
        className="h-25 w-49 absolute top-0 left-0 z-1 overflow-hidden"
      >
        <Vector1 className="h-full w-full top-[-18px] left-0 relative" />
      </div>

      <div className="w-60 h-72 rounded-2xl bg-amber-700 overflow-hidden shrink-0">
        <img
          src="/myfoto.jpg"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between items-center h-full">
        <p className="text-4xl font-black text-center">Mouaadh Sahailia</p>
        <div className="w-60 h-41 overflow-hidden absolute top-86 left-0 z-1">
          <Vector2 className="h-full w-full top-0 left-[-135px] relative" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-center text-l z-20">
            Computer Science Graduate | Aspiring QA Tester | Developer | Eager
            to Build Skills in Engineering & Technology | Adaptable,
            Responsible, Collaborative
          </p>
          <div className="flex flex-row gap-8">
            <Button asChild variant={"ghost"} size={"icon"}>
              <a
                href="mailto:mouaadhsahailia@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/at-sign.svg" alt="email" />
              </a>
            </Button>
            <Button asChild variant={"ghost"} size={"icon"}>
              <a
                href="https://github.com/mouaadh11"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/github.svg" alt="github" />
              </a>
            </Button>
            <Button asChild variant={"ghost"} size={"icon"}>
              <a
                href="https://www.linkedin.com/in/mouaadhsh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/linkedin.svg" alt="linkedin" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
