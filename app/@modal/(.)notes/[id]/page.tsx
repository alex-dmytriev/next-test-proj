import Modal from "@/components/Modal/Modal";
import { getSingleNote } from "@/lib/api";

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { id } = await params;
  const note = await getSingleNote(id);
  return {
    title: `Note: ${note.title}`,
    desctiption: note.content.slice(0, 30),
  };
};

const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const note = await getSingleNote(id);

  return (
    <Modal>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
};

export default NotePreview;
