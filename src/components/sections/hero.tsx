import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import SectionTitle from "../ui/section-title";
import ArrowRight from "../vector/arrow-right";
import Box1Vector from "../vector/box1-vector";
import Box2Vector from "../vector/box2-vector";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col gap-15">
        {/* Title */}
        <div className="flex flex-col gap-2.5">
          <SectionTitle
            titlePart1={"SOFTWARE Developer 🛠️"}
            titlePart2={"& QA Tester"}
          />
          <div>
            <p className="text-paragraph leading-paragraph text-gray mt-6">
              <span className="font-bold text-orange">"</span>Open to QA and
              Software Development roles • Curious, motivated, and ready to grow
              <span className="font-bold text-orange">"</span>
            </p>
            <p className="text-paragraph leading-paragraph text-gray mt-3 text-justify">
              I'm a{" "}
              <span className="font-semibold">Computer Science graduate</span>{" "}
              with a strong interest in both{" "}
              <span className="font-semibold text-orange">
                software development
              </span>{" "}
              and{" "}
              <span className="font-semibold text-orange">
                quality assurance
              </span>
              . During my final year, I led a hands-on graduation project using{" "}
              <span className="font-semibold text-orange">ESP32</span> and{" "}
              <span className="font-semibold text-orange">MQTT</span> to build a{" "}
              <span className="font-semibold text-orange">
                health monitoring system
              </span>{" "}
              — an experience that sparked my passion for{" "}
              <span className="font-semibold text-orange">building</span>,{" "}
              <span className="font-semibold text-orange">testing</span>, and{" "}
              <span className="font-semibold text-orange">improving</span>{" "}
              real-world applications. I'm currently{" "}
              <span className="font-semibold text-orange">
                exploring the QA field
              </span>{" "}
              and eager to gain professional experience, while also staying open
              to{" "}
              <span className="font-semibold text-orange">
                development roles
              </span>{" "}
              where I can grow my skills. I'm{" "}
              <span className="font-semibold text-orange">motivated</span>,{" "}
              <span className="font-semibold text-orange">curious</span>, and
              looking for an opportunity to{" "}
              <span className="font-semibold text-orange">learn</span>,{" "}
              <span className="font-semibold text-orange">contribute</span>, and
              start my journey in tech.{" "}
            </p>
          </div>
        </div>
        <div>
          <SectionTitle titlePart1={"PROUD 🌟"} titlePart2={"MOMENTS "} />
          {/* <h1 className="text-h3 leading-h3 font-bold text-white">🌟 Proud Moments</h1> */}
          <p className="text-paragraph leading-paragraph text-gray mt-5">
            <span className="font-bold text-orange">"</span> Recognized for
            academic excellence in both high school and university
            <span className="font-bold text-orange">"</span>
          </p>
          {/* Boxes */}
          <div className=" flex flex-row mt-3 gap-10 h-[240px]">
            <div className="bg-orange-400 w-[300px] h-full shrink-0 rounded-2xl p-5 pt-10 flex flex-col gap-5 relative">
              <div className="absolute rounded-2xl overflow-hidden w-[300px] top-0 left-0 z-1">
                <Box1Vector />
                <Box1Vector />
              </div>
              <img
                src="award-white.svg"
                alt="awardIcon"
                className="w-10 h-10 shrink-0"
              />

              <div className="flex flex-col justify-between items-end h-full z-10">
                <p className="text-2xl">
                  Ranked <span className="font-bold">#1</span> in my high
                  school, 2021
                </p>
                <Button
                  variant={"outline"}
                  className="bg-transparent hover:text-orange transition-colors duration-200"
                  onClick={() => {
                    navigate("/blog/myBaccalaureateJourneyPost");
                  }}
                >
                  <ArrowRight />
                </Button>
              </div>
            </div>
            <div className="bg-[#c5ff41] text-black w-full h-full rounded-2xl p-5 pt-10 flex flex-col gap-5 relative">
              <div className="absolute rounded-2xl overflow-hidden w-full h-full top-0 left-0 z-1">
                <Box2Vector className="top-[-75px] relative" />
                <Box2Vector className="top-[-180px] left-[-25px] rotate-180 relative" />
              </div>
              <img
                src="award-black.svg"
                alt="tableIcon"
                className="w-10 h-10 shrink-0"
              />
              <div className="flex flex-col justify-between items-end h-full z-10">
                <p className="text-2xl ">
                  Ranked <span className="font-bold">#1</span> in Computer
                  Science – Class of 2024
                </p>
                <Button
                  variant={"outline"}
                  className="bg-transparent text-black hover:text-[#C5FF41] border-black hover:bg-black transition-colors duration-200"
                  onClick={() => {
                    navigate("/blog/myUniversityJourneyPost");
                  }}
                >
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className=" flex flex-row gap-10 w-full hidden">
  <div className="w-1/2">
    <div className="flex flex-row gap-1 justify-center">
      <img src="award.svg" alt="awardIcon" height={50} width={60} />
      <p className="text-7xl font-bold">1st</p>
    </div>
    <p className="text-xl mt-2.5 text-center">
      <span className="font-bold text-orange">“ </span> Top-ranked Computer{" "}
      <br /> Science graduate <span className="font-bold text-orange">”</span>
    </p>
  </div>
  <div className="w-1/2">
    <div className="flex flex-row gap-1 justify-center">
      <img src="award.svg" alt="awardIcon" height={60} width={60} />
      <p className="text-7xl font-bold">1st</p>
    </div>
    <p className="text-xl mt-2.5 text-center">
      <span className="font-bold text-orange">“ </span> Top-ranked Mechanical{" "}
      <br /> Engineering graduate{" "}
      <span className="font-bold text-orange">”</span>
    </p>
  </div>
</div>; */
}
