import Link from 'next/link';
import { Log } from '@/lib/types';
import { DateBlock } from '@/components/ui/DateBlock';

interface LogItemProps {
  log: Log;
}

const moodEmojis: Record<string, string> = {
  frantic: '🔥',
  zen: '😌',
  confused: '🤔',
  triumphant: '🎉',
  tired: '😴',
};

export function LogItem({ log }: LogItemProps) {
  return (
    <article className="group border-b border-border-dim/30 py-4 hover:bg-[var(--hover-bg)] transition-colors duration-100">
      <Link
        href={`/logs/${log.slug}/`}
        className="block px-2 -mx-2 no-underline"
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6">
          <DateBlock date={log.date} />

          <div className="flex items-center gap-2 mt-1 sm:mt-0">
            <h3 className="text-base underline group-hover:no-underline">
              {log.title}
            </h3>
            {log.mood && (
              <span className="text-sm" title={`Mood: ${log.mood}`}>
                {moodEmojis[log.mood]}
              </span>
            )}
          </div>

          {log.tags.length > 0 && (
            <div className="text-xs font-mono text-muted mt-1 sm:mt-0 sm:ml-auto">
              {log.tags.join(', ')}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
