import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import NotesClient from './Notes.client';
import { fetchNotes } from '@/lib/api';
import { Metadata } from 'next';

interface NotesPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: NotesPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = slug?.[0] ?? 'all';
  return {
    title: `Notes - Filter: ${tag} | NoteHub`,
    description: `Browsing notes filtered by " ${tag} ". Manage your notes efficiently with NoteHub.`,
    openGraph: {
      type: 'website',
      url: `https://08-zustand-three-psi.vercel.app/notes/filter/${slug.join('/')}`,
      title: `Notes - Filter: ${tag} | NoteHub`,
      description: `Browsing notes filtered by " ${tag} ". Manage your notes efficiently with NoteHub.`,
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        },
      ],
    },
  };
}

export default async function NotesPage({ params }: NotesPageProps) {
  const queryClient = new QueryClient();

  const { slug } = await params;
  const tag = slug[0] ?? 'all';

  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, '', tag],
    queryFn: () => fetchNotes(1, '', tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
