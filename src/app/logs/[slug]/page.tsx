import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getLogBySlug, getAllLogs } from '@/lib/content';
import { DateBlock } from '@/components/ui/DateBlock';
import { MarkdownBody } from '@/components/ui/MarkdownBody';

interface LogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const moodEmojis: Record<string, string> = {
  frantic: '🔥',
  zen: '😌',
  confused: '🤔',
  triumphant: '🎉',
  tired: '😴',
};

const moodLabels: Record<string, string> = {
  frantic: 'Frantic',
  zen: 'Zen',
  confused: 'Confused',
  triumphant: 'Triumphant',
  tired: 'Tired',
};

export async function generateStaticParams() {
  const logs = getAllLogs();
  return logs.map((log) => ({
    slug: log.slug,
  }));
}

export async function generateMetadata({ params }: LogPageProps) {
  const { slug } = await params;
  const log = getLogBySlug(slug);
  
  if (!log) {
    return {
      title: 'Not Found',
    };
  }
  
  return {
    title: `${log.title} — notreally.work`,
  };
}

export default async function LogPage({ params }: LogPageProps) {
  const { slug } = await params;
  const log = getLogBySlug(slug);
  
  if (!log) {
    notFound();
  }

  return (
    <div className="max-w-3xl">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <Link
          href="/logs/"
          className="text-sm text-muted underline hover:no-underline"
        >
          ← Logs
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <DateBlock date={log.date} emphasized />
          {log.mood && (
            <span
              className="text-sm font-mono"
              title={`Mood: ${log.mood}`}
            >
              {moodEmojis[log.mood]} {moodLabels[log.mood]}
            </span>
          )}
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {log.title}
        </h1>
        
        {/* Tags */}
        {log.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {log.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-muted uppercase tracking-wider"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Content */}
      <article className="markdown-body border-t border-black pt-8">
        <MarkdownBody content={log.content} />
      </article>

      {/* Footer navigation */}
      <footer className="mt-12 pt-6 border-t border-black">
        <Link
          href="/logs/"
          className="text-sm underline hover:no-underline"
        >
          ← Back to all logs
        </Link>
      </footer>
    </div>
  );
}
