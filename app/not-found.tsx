import { Metadata } from 'next';
import css from './page.module.css';

export const metadata: Metadata = {
  title: '404 — Page Not Found | NoteHub',
  description:
    'The page you are looking for does not exist or has been moved. Return to NoteHub to continue managing your notes.',
  openGraph: {
    type: 'website',
    url: 'https://08-zustand-three-psi.vercel.app/',
    title: '404 — Page Not Found | NoteHub',
    description:
      'The page you are looking for does not exist or has been moved. Return to NoteHub to continue managing your notes.',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
      },
    ],
  },
};

export default function NotFound() {
  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>Sorry, the page you are looking for does not exist.</p>
    </>
  );
}
