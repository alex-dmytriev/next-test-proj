"use client";

import { useRouter } from "next/navigation";
import { Category, createNote, NewNoteData } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
// 1. Імпортуємо хук
import { useNoteDraftStore } from "@/lib/stores/noteStore";
import css from "./NoteForm.module.css";

type Props = {
  categories: Category[];
};

const NoteForm = ({ categories }: Props) => {
  const router = useRouter();

  const { draft, setDraft, clearDraft } = useNoteDraftStore();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) =>
    // 4. Коли користувач змінює будь-яке поле форми — оновлюємо стан
    {
      setDraft({ ...draft, [event.target.name]: event.target.value });
    };

  const { mutate } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      clearDraft();
      router.push("/notes/filter/all");
    },
  });

  const handleSubmit = (formData: FormData) => {
    const values = Object.fromEntries(formData) as NewNoteData;
    mutate(values);
  };

  const handleCancel = () => router.push("/notes/filter/all");

  return (
    <form className={css.form} action={handleSubmit}>
      <label className={css.label}>
        Title
        <input
          type="text"
          name="title"
          defaultValue={draft?.title}
          onChange={handleChange}
        />
      </label>

      <label className={css.label}>
        Content
        <textarea
          name="content"
          defaultValue={draft?.content}
          onChange={handleChange}
        ></textarea>
      </label>

      <label className={css.label}>
        Category
        <select
          name="category"
          defaultValue={draft?.categoryId}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>

      <div className={css.actions}>
        <button type="submit" className={css.button}>
          Create
        </button>
        <button type="button" className={css.button} onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
