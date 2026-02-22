import NoteForm from '@/components/NoteForm/NoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create New Note',
  description: 'Create a new note in NoteHub and organize your ideas efficiently.',
  openGraph: {
    type: 'website',
    url: 'https://08-zustand-three-psi.vercel.app/notes/action/create/page.tsx',
    title: 'Create New Note',
    description: 'Create a new note in NoteHub and organize your ideas efficiently.',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
      },
    ],
  },
};

const CreateNote = async () => {
  const categories = await getCategories();

  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
};

export default CreateNote;
