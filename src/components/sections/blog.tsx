import BlogModel from "./blog-model";
import { Navigate, useParams } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

// export default function BlogPage() {
//   return (
//     <>
//       {/* <BlogModel
//         title="Starting and Growing a Career in Web Design"
//         date="Apr 9, 2023"
//         imgUrl="blogFoto.jpg"
//         readTime="6 min read"
//         discription="As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development. The prediction is that by 2029, the job outlook for these two fields will grow by 8%—significantly faster than average. Whether you’re seeking salaried employment or aiming to work in a freelance capacity, a career in web design can offer a variety of employment arrangements, competitive salaries, and opportunities to utilize both technical and creative skill sets."
//         blogPortions={[
//           {
//             title: "What does a career in web design involve?",
//             content: [
//               "A career in website design can involve the design, creation, and coding of a range of website types. Other tasks will typically include liaising with clients and discussing website specifications, incorporating feedback, working on graphic design and image editing, and enabling multimedia features such as audio and video. Requiring a range of creative and technical skills, web designers may be involved in work across a range of industries, including software companies, IT consultancies, web design companies, corporate organizations, and more.",
//               "In contrast with web developers, web designers tend to play a more creative role, crafting the overall vision and design of a site, and determining how to best incorporate the necessary functionality. However, there can be significant overlap between the roles.",
//             ],
//           },
//           {
//             title: "Full-stack, back-end, and front-end web development",
//             content: [
//               "The U.S. Bureau of Labor Statistics (BLS) Occupational Outlook Handbook tends to group web developers and digital designers into one category. However, they define them separately, stating that web developers create and maintain websites and are responsible for the technical aspects including performance and capacity. Web or digital designers, on the other hand, are responsible for the look and functionality of websites and interfaces. They develop, create, and test the layout, functions, and navigation for usability.",
//               "Web developers can focus on the back-end, front-end, or full-stack development, and typically utilize a range of programming languages, libraries, and frameworks to do so. Web designers may work more closely with front-end engineers to establish the user-end functionality and appearance of a site.",
//             ],
//           },
//           {
//             title: "Are web designers in demand?",
//             content: [
//               "In our ever-increasingly digital environment, there is a constant need for websites—and therefore for web designers and developers. With 17.4 billion websites in existence as of January 2020, the demand for web developers is only expected to rise. Web designers with significant coding experience are typically in higher demand and can usually expect a higher salary. Like all jobs, there are likely to be a range of opportunities, some of which are better paid than others.",
//               "If you're interested in pursuing a career in web design or starting a freelance business, having a professional portfolio website is essential. You can explore ready-made web design templates tailored for showcasing your work and impressing potential clients at Templyo. These templates make it easier to create stunning websites without the need for extensive coding knowledge.",
//             ],
//           },
//         ]}
//       /> */}

//     </>
//   );
// }

const BlogPage = () => {
  const { id } = useParams<{ id: keyof typeof blogPosts }>();
  const blog = id ? blogPosts[id] : undefined;

  if (!blog) return <Navigate to="/404" replace />;

  return <BlogModel {...blog} />;
};

export default BlogPage;
