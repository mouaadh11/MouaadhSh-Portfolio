import { useCallback, useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import { Pencil } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  createPortfolioItem,
  deleteItem,
  getCollectionItems,
  updatePortfolioItem,
} from "@/services/portfolioService";
import type { PortfolioCollectionMap } from "@/types/portfolio";
import type { AdminCollectionConfig, AdminField } from "./adminConfig";

type AdminItem = PortfolioCollectionMap[keyof PortfolioCollectionMap];
type FormValue = string | number | boolean | string[];
type FormState = Record<string, FormValue>;

function defaultValueForField(field: AdminField, nextOrder: number): FormValue {
  if (field.name === "order") {
    return nextOrder;
  }

  if (field.type === "checkbox") {
    return false;
  }

  if (field.type === "number") {
    return 0;
  }

  if (field.type === "tags") {
    return [];
  }

  return "";
}

function createEmptyForm(fields: AdminField[], nextOrder: number): FormState {
  return fields.reduce<FormState>((form, field) => {
    form[field.name] = defaultValueForField(field, nextOrder);
    return form;
  }, {});
}

function itemToForm(item: AdminItem, fields: AdminField[]): FormState {
  const itemRecord = item as unknown as Record<string, FormValue | undefined>;

  return fields.reduce<FormState>((form, field) => {
    const value = itemRecord[field.name];
    form[field.name] = value ?? defaultValueForField(field, 0);
    return form;
  }, {});
}

function normalizeForm(form: FormState, fields: AdminField[]) {
  return fields.reduce<Record<string, unknown>>((payload, field) => {
    const value = form[field.name];

    if (field.type === "tags") {
      payload[field.name] = Array.isArray(value)
        ? value
        : String(value)
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean);
      return payload;
    }

    if (field.type === "number") {
      payload[field.name] = Number(value) || 0;
      return payload;
    }

    if (field.type === "checkbox") {
      payload[field.name] = Boolean(value);
      return payload;
    }

    payload[field.name] = String(value ?? "").trim();
    return payload;
  }, {});
}

export default function AdminCollectionManager({
  config,
}: {
  config: AdminCollectionConfig;
}) {
  const [items, setItems] = useState<AdminItem[]>([]);
  const [editingItem, setEditingItem] = useState<AdminItem | null>(null);
  const [form, setForm] = useState<FormState>(() => createEmptyForm(config.fields, 1));
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const nextOrder = useMemo(
    () => Math.max(0, ...items.map((item) => Number(item.order) || 0)) + 1,
    [items],
  );

  const loadItems = useCallback(async () => {
    setIsLoading(true);

    try {
      const loadedItems = await getCollectionItems(config.collectionName);
      setItems(loadedItems);
    } catch (caughtError) {
      toast.error(caughtError instanceof Error ? caughtError.message : "Unable to load items.");
    } finally {
      setIsLoading(false);
    }
  }, [config.collectionName]);

  useEffect(() => {
    setEditingItem(null);
    setForm(createEmptyForm(config.fields, 1));
    void loadItems();
  }, [config, loadItems]);

  useEffect(() => {
    if (!editingItem) {
      setForm(createEmptyForm(config.fields, nextOrder));
    }
  }, [config.fields, editingItem, nextOrder]);

  function updateField(field: AdminField, value: string | boolean) {
    setForm((currentForm) => ({
      ...currentForm,
      [field.name]:
        field.type === "tags"
          ? String(value)
              .split(",")
              .map((tag) => tag.trim())
              .filter(Boolean)
          : value,
    }));
  }

  function validateForm() {
    const missingField = config.fields.find((field) => {
      if (!field.required) {
        return false;
      }

      const value = form[field.name];

      return Array.isArray(value) ? value.length === 0 : String(value ?? "").trim().length === 0;
    });

    if (missingField) {
      toast.error(`${missingField.label} is required.`);
      return false;
    }

    return true;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSaving(true);

    try {
      const payload = normalizeForm(form, config.fields);

      if (editingItem) {
        await updatePortfolioItem(config.collectionName, editingItem.id, payload);
        toast.success(`${config.label} item updated.`);
      } else {
        await createPortfolioItem(config.collectionName, payload);
        toast.success(`${config.label} item created.`);
      }

      setEditingItem(null);
      setForm(createEmptyForm(config.fields, nextOrder));
      await loadItems();
    } catch (caughtError) {
      toast.error(caughtError instanceof Error ? caughtError.message : "Unable to save item.");
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete(item: AdminItem) {
    const itemTitle = String((item as unknown as Record<string, unknown>)[config.titleField] ?? item.id);

    if (!window.confirm(`Delete "${itemTitle}"?`)) {
      return;
    }

    try {
      await deleteItem(config.collectionName, item.id);
      toast.success("Item deleted.");
      await loadItems();
    } catch (caughtError) {
      toast.error(caughtError instanceof Error ? caughtError.message : "Unable to delete item.");
    }
  }

  function startEditing(item: AdminItem) {
    setEditingItem(item);
    setForm(itemToForm(item, config.fields));
  }

  function renderField(field: AdminField) {
    const value = form[field.name];

    if (field.type === "checkbox") {
      return (
        <label className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 p-3 text-sm">
          <input
            type="checkbox"
            checked={Boolean(value)}
            onChange={(event) => updateField(field, event.target.checked)}
            className="h-4 w-4 accent-orange"
          />
          {field.label}
        </label>
      );
    }

    if (field.type === "textarea") {
      return (
        <div className="flex flex-col gap-2">
          <Label htmlFor={field.name}>{field.label}</Label>
          <Textarea
            id={field.name}
            value={String(value ?? "")}
            onChange={(event) => updateField(field, event.target.value)}
            placeholder={field.placeholder}
            className="min-h-28 border-white/20 bg-black/30 text-white"
          />
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-2">
        <Label htmlFor={field.name}>
          {field.label}
          {field.type === "tags" ? " (comma separated)" : ""}
        </Label>
        <Input
          id={field.name}
          type={field.type === "number" ? "number" : "text"}
          value={Array.isArray(value) ? value.join(", ") : String(value ?? "")}
          onChange={(event) => updateField(field, event.target.value)}
          placeholder={field.placeholder}
          className="border-white/20 bg-black/30 text-white"
        />
      </div>
    );
  }

  return (
    <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-black">{config.label}</h2>
          <p className="mt-1 text-sm text-gray">{config.description}</p>
        </div>

        {isLoading ? (
          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-gray">
            Loading {config.label.toLowerCase()}...
          </div>
        ) : items.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-gray">
            No items yet. Create the first one from the form.
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {items.map((item) => {
              const itemRecord = item as unknown as Record<string, unknown>;
              const itemTitle = String(itemRecord[config.titleField] ?? "Untitled item");

              return (
                <article
                  key={item.id}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase text-orange">Order {item.order}</p>
                    <h3 className="mt-1 text-lg font-semibold">{itemTitle}</h3>
                    <p className="mt-1 text-sm text-gray">{item.id}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => startEditing(item)}
                      className="border-orange/50 bg-orange text-black hover:border-orange hover:bg-orange/90 hover:text-black"
                    >
                      <Pencil />
                      Edit
                    </Button>
                    <Button type="button" variant="destructive" onClick={() => void handleDelete(item)}>
                      Delete
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex h-fit flex-col gap-4 rounded-2xl border border-white/10 bg-white/10 p-5"
      >
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-black">{editingItem ? "Edit item" : "Create item"}</h3>
          {editingItem && (
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setEditingItem(null);
                setForm(createEmptyForm(config.fields, nextOrder));
              }}
            >
              Cancel
            </Button>
          )}
        </div>

        {config.fields.map((field) => (
          <div key={field.name}>{renderField(field)}</div>
        ))}

        <Button type="submit" disabled={isSaving} className="bg-orange text-black hover:bg-orange/90">
          {isSaving ? "Saving..." : editingItem ? "Save changes" : "Create"}
        </Button>
      </form>
    </section>
  );
}
