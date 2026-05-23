import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BlogModel from "./blog-model";
import { isFirebaseConfigured } from "@/lib/firebase";
import { getBlogBySlug } from "@/services/portfolioService";
import type { Blog, TimestampValue } from "@/types/portfolio";

function formatDate(value?: TimestampValue) {
  if (!value) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  const date = value instanceof Date ? value : new Date(value.seconds * 1000);

  return date.toLocaleDateString("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function estimateReadTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return String(Math.max(1, Math.ceil(words / 200)));
}

function markdownToPortions(content: string) {
  const portions: { title: string; content: string[] }[] = [];
  let currentTitle = "Story";
  let paragraphs: string[] = [];

  content.split(/\n{2,}/).forEach((block) => {
    const trimmedBlock = block.trim();

    if (!trimmedBlock) {
      return;
    }

    if (trimmedBlock.startsWith("## ")) {
      if (paragraphs.length > 0) {
        portions.push({ title: currentTitle, content: paragraphs });
      }

      currentTitle = trimmedBlock.replace(/^##\s+/, "");
      paragraphs = [];
      return;
    }

    paragraphs.push(trimmedBlock);
  });

  if (paragraphs.length > 0) {
    portions.push({ title: currentTitle, content: paragraphs });
  }

  return portions.length > 0 ? portions : [{ title: "Story", content: [content] }];
}

const BlogPage = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(Boolean(isFirebaseConfigured && id));

  useEffect(() => {
    let isMounted = true;

    async function loadBlog() {
      if (!id || !isFirebaseConfigured) {
        setBlog(null);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      try {
        const firestoreBlog = await getBlogBySlug(id);
        if (isMounted) {
          setBlog(firestoreBlog);
        }
      } catch {
        if (isMounted) {
          setBlog(null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadBlog();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (isLoading) {
    return <p className="text-small-paragraph leading-small-paragraph text-gray">Loading blog...</p>;
  }

  if (!blog || !blog.published) {
    return <Navigate to="/404" replace />;
  }

  return (
    <BlogModel
      imgUrl={blog.imageUrl}
      title={blog.title}
      date={formatDate(blog.createdAt || blog.updatedAt) || "Updated recently"
      }
      readTime={estimateReadTime(blog.content)}
      discription={blog.description}
      blogPortions={markdownToPortions(blog.content)}
    />
  );
};

export default BlogPage;
