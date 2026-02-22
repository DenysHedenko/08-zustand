import { Metadata } from 'next';
import css from './page.module.css';

export const metadata: Metadata = {
  title: 'Home | NoteHub',
  description: 'NoteHub is a simple app for creating, browsing, and organizing your notes.',
  openGraph: {
    title: 'Home | NoteHub',
    description: 'NoteHub is a simple app for creating, browsing, and organizing your notes.',
    url: 'https://08-zustand-three-psi.vercel.app/',
    images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
  },
};

const Home = () => {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to NoteHub</h1>
        <p className={css.description}>
          NoteHub is a simple and efficient application designed for managing personal notes. It
          helps keep your thoughts organized and accessible in one place, whether you are at home or
          on the go.
        </p>
        <p className={css.description}>
          The app provides a clean interface for writing, editing, and browsing notes. With support
          for keyword search and structured organization, NoteHub offers a streamlined experience
          for anyone who values clarity and productivity.
        </p>
      </div>
    </main>
  );
};
export default Home;
