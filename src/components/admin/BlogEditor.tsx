import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import slugify from "@/lib/slugify";
import { getBlogBySlug, createBlog, updateBlog } from "@/services/portfolioService";

export default function BlogEditor({
  initialSlug,
  onClose,
  onSaved,
}: {
  initialSlug: string;
  onClose: () => void;
  onSaved?: (slug: string) => void;
}) {
  const [blogId, setBlogId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState(initialSlug || "");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);
  // loading flag not required for modal UX
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      // begin load

      try {
        if (initialSlug) {
          const blog = await getBlogBySlug(initialSlug, true);

          if (blog && !cancelled) {
            setBlogId(blog.id);
            setTitle(blog.title || "");
            setSlug(blog.slug || initialSlug);
            setDescription(blog.description || "");
            setImageUrl(blog.imageUrl || "");
            setTags((blog.tags || []).join(", "));
            setContent(blog.content || "");
            setPublished(Boolean(blog.published));
          } else if (!cancelled) {
            setSlug(initialSlug || "");
          }
        }
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Unable to load blog.");
      } finally {
        // load finished
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, [initialSlug]);

  async function ensureUniqueSlug(desired: string) {
    let candidate = desired;
    let attempt = 0;

    // Loop until slug is not used by another blog
    while (true) {
      const existing = await getBlogBySlug(candidate, true);

      if (!existing || (blogId && existing.id === blogId)) {
        return candidate;
      }

      attempt += 1;
      candidate = `${desired}-${attempt}`;
    }
  }

  async function handleSave() {
    if (!title || !slug) {
      toast.error("Title and slug are required.");
      return;
    }

    setIsSaving(true);

    try {
      const candidate = slugify(slug || title);
      const uniqueSlug = await ensureUniqueSlug(candidate);

      const payload = {
        title,
        slug: uniqueSlug,
        description,
        imageUrl,
        tags: String(tags || "").split(",").map((t) => t.trim()).filter(Boolean),
        content,
        published,
      } as Record<string, unknown>;

      if (blogId) {
        await updateBlog(blogId, payload);
        toast.success("Blog updated.");
      } else {
        await createBlog(payload);
        toast.success("Blog created.");
      }

      onSaved?.(uniqueSlug);
      onClose();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Unable to save blog.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black/60 p-6">
      <div className="w-full max-w-3xl rounded-2xl bg-black p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black">{blogId ? "Edit Blog" : "Create Blog"}</h2>
          <div className="flex gap-2">
            <Button type="button" variant="ghost" onClick={onClose}>Close</Button>
            <Button type="button" onClick={handleSave} disabled={isSaving} className="bg-orange text-black">
              {isSaving ? "Saving..." : blogId ? "Save Blog" : "Create Blog"}
            </Button>
          </div>
        </div>

        <div className="mt-4 grid gap-4">
          <div className="grid gap-2">
            <Label>Title</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="grid gap-2">
            <Label>Slug</Label>
            <Input value={slug} onChange={(e) => setSlug(e.target.value)} />
            <p className="text-sm text-gray">Slug will be used in /blog/&lt;slug&gt; URL.</p>
          </div>

          <div className="grid gap-2">
            <Label>Description</Label>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          <div className="grid gap-2">
            <Label>Image URL</Label>
            <Input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          </div>

          <div className="grid gap-2">
            <Label>Tags (comma separated)</Label>
            <Input value={tags} onChange={(e) => setTags(e.target.value)} />
          </div>

          <div className="grid gap-2">
            <Label>Content (Markdown)</Label>
            <Textarea value={content} onChange={(e) => setContent(e.target.value)} className="min-h-48" />
          </div>

          <div className="flex items-center gap-3">
            <input id="published" type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} className="h-4 w-4 accent-orange" />
            <Label htmlFor="published">Published</Label>
          </div>
        </div>
      </div>
    </div>
  );
}
