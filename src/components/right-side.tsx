
import Section1 from "./sections/hero";
import Section2 from "./sections/myWork";
import Section3 from "./sections/section3";
import Section4 from "./sections/section4";
// import Section5 from "./sections/section5";
import Section6 from "./sections/section6";

export function Right() {
  return (
    <div className="flex flex-col gap-20">
      {/* Section 1 */}
      <Section1 />
      {/* section 2 */}
      <Section2 />
      {/* section 3 */}
      <Section3 />
      {/* section 4 */}
      <Section4 />
      {/* section 5 */}
      {/* <Section5 /> */}
      {/* section 6 */}
      <Section6 />
    </div>
  );
}
