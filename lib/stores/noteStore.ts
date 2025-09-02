import { create } from "zustand";
import { persist } from "zustand/middleware";
import { NewNoteData } from "../api";

type NoteDraftStore = {
  draft: NewNoteData;
  setDraft: (note: NewNoteData) => void;
  clearDraft: () => void;
};

const initialDraft: NewNoteData = {
  title: "",
  content: "",
  categoryId: "",
};

export const useNoteDraftStore = create<NoteDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (note) => set(() => ({ draft: note })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
      // key in local storage
      name: "note-draft",
      // save only draft prop
      partialize: (state) => ({ draft: state.draft }),
    }
  )
);
