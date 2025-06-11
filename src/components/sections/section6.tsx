import MyContactForm from "../ui/contact-from";
import SectionTitle from "../ui/section-title";

export default function Section6() {
  return (
    <div className="flex flex-col gap-10 max-h-fit">
      {/* Title */}
      <div>
        <SectionTitle titlePart1={"LET'S WORK"} titlePart2={"TOGETHER"} />
      </div>
      {/* Contact */}
      <div >
        <MyContactForm />
      </div>
    </div>
  );
}
