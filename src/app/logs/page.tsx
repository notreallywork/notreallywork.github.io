import Link from 'next/link';
import { getAllLogs } from '@/lib/content';

export default function LogsIndexPage() {
  const logs = getAllLogs();

  return (
    <div className="font-mono">
      {/* Breadcrumb */}
      <div className="text-[#804400] mb-4">
        user@notreally:~$ ls -la logs/
      </div>

      <h1 className="text-3xl font-bold text-[#ffb000] mb-2">
        Logs/
      </h1>
      <p className="text-[#804400] mb-8">
        Development journal and debugging notes. {logs.length} entries.
      </p>

      <div className="text-[#804400] text-sm mb-4">
        total {logs.length * 4}
      </div>

      <div className="space-y-0">
        {logs.map((log) => (
          <div 
            key={log.slug} 
            className="grid grid-cols-1 md:grid-cols-[12ch_1fr] gap-2 md:gap-4 border-b border-[#804400]/30 py-3 hover:bg-[#ffb000]/10 items-baseline text-sm"
          >
            <span className="text-[#804400] hidden md:block">-rw-r--r--</span>
            
            <Link 
              href={`/logs/${log.slug}/`} 
              className="text-[#ffb000]"
            >
              {log.date} {log.slug}.md
              {log.mood && (
                <span className="ml-2 text-[#804400]">
                  [{log.mood.toUpperCase()}]
                </span>
              )}
            </Link>
          </div>
        ))}
      </div>

      {/* Back link */}
      <div className="mt-8">
        <Link href="/" className="text-[#804400] hover:text-[#ffb000] underline">
          $ cd ~
        </Link>
      </div>
    </div>
  );
}