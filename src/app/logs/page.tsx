import Link from 'next/link';
import { getAllLogs } from '@/lib/content';

export default function LogsIndexPage() {
  const logs = getAllLogs();

  return (
    <div className="font-mono">
      <div className="text-muted mb-4">
        user@notreally:~$ ls -la logs/
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-2">
        Logs/
      </h1>
      <p className="text-muted mb-8">
        Development journal and debugging notes. {logs.length} entries.
      </p>

      <div className="text-muted text-sm mb-4">
        total {logs.length * 4}
      </div>

      <div className="space-y-0">
        {logs.map((log) => (
          <div
            key={log.slug}
            className="grid grid-cols-1 md:grid-cols-[12ch_1fr] gap-2 md:gap-4 border-b border-border-dim/30 py-3 hover:bg-[var(--hover-bg)] items-baseline text-sm"
          >
            <span className="text-muted hidden md:block">-rw-r--r--</span>

            <Link
              href={`/logs/${log.slug}/`}
              className="text-foreground"
            >
              {log.date} {log.slug}.md
              {log.mood && (
                <span className="ml-2 text-chrome">
                  [{log.mood.toUpperCase()}]
                </span>
              )}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link href="/" className="text-muted hover:text-foreground underline">
          $ cd ~
        </Link>
      </div>
    </div>
  );
}
