import Link from 'next/link';
import { getProjectNavItems, getLogNavItems } from '@/lib/content';

export function Sidebar() {
  const projects = getProjectNavItems();
  const logs = getLogNavItems();

  return (
    <aside className="hidden lg:block fixed left-0 top-0 w-[280px] h-screen border-r border-[#ffb000] bg-[#0a0a0a] font-mono z-50">
      <div className="p-6 h-full overflow-auto flex flex-col">
        {/* Shell Header */}
        <div className="mb-8">
          <Link href="/" className="no-underline block hover:opacity-80">
            <div className="text-[#ffb000] text-lg font-bold tracking-tight">
              notreally.work
            </div>
          </Link>
          <div className="text-xs text-[#804400] mt-1">$ /bin/sh</div>
        </div>

        {/* Projects Directory */}
        <nav className="mb-8">
          <div className="text-[#804400] text-sm mb-2">$ ls projects/</div>
          <div className="pl-2 space-y-1 border-l border-[#804400]/30">
            {projects.slice(0, 5).map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}/`}
                className="block text-sm text-[#ffb000] hover:bg-[#ffb000] hover:text-[#0a0a0a] px-2 py-1 -ml-2 underline-offset-2"
              >
                <span className="text-[#804400]">drwxr-xr-x </span>
                <span className="text-[#804400]">{project.date} </span>
                {project.slug}/
              </Link>
            ))}
          </div>
          <Link
            href="/projects/"
            className="inline-block mt-2 text-xs text-[#804400] hover:text-[#ffb000] underline"
          >
            $ ls -la projects/
          </Link>
        </nav>

        {/* Logs Directory */}
        <nav className="mb-8">
          <div className="text-[#804400] text-sm mb-2">$ ls logs/</div>
          <div className="pl-2 space-y-1 border-l border-[#804400]/30">
            {logs.slice(0, 3).map((log) => (
              <Link
                key={log.slug}
                href={`/logs/${log.slug}/`}
                className="block text-sm text-[#ffb000] hover:bg-[#ffb000] hover:text-[#0a0a0a] px-2 py-1 -ml-2 underline-offset-2"
              >
                <span className="text-[#804400]">-rw-r--r-- </span>
                <span className="text-[#804400]">{log.date} </span>
                {log.slug}.md
              </Link>
            ))}
          </div>
          <Link
            href="/logs/"
            className="inline-block mt-2 text-xs text-[#804400] hover:text-[#ffb000] underline"
          >
            $ ls -la logs/
          </Link>
        </nav>

        {/* System Info */}
        <nav className="mt-auto">
          <div className="text-[#804400] text-sm mb-2">$ cat sysinfo</div>
          <div className="pl-2 space-y-1 border-l border-[#804400]/30 text-sm">
            <Link
              href="/colophon/"
              className="block text-[#ffb000] hover:bg-[#ffb000] hover:text-[#0a0a0a] px-2 py-1 -ml-2 underline-offset-2"
            >
              <span className="text-[#804400]">-rw-r--r-- </span>
              colophon.txt
            </Link>
            <a 
              href="https://github.com/notreallywork" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-[#ffb000] hover:bg-[#ffb000] hover:text-[#0a0a0a] px-2 py-1 -ml-2 underline-offset-2"
            >
              <span className="text-[#804400]">lrwxrwxrwx </span>
              github -&gt;
            </a>
          </div>
        </nav>

        {/* Footer Info */}
        <div className="mt-6 pt-4 border-t border-[#804400]/30 text-xs text-[#804400]">
          <div>Last login: {new Date().toLocaleDateString()}</div>
          <div className="mt-1">$ v1.0.0-terminal</div>
        </div>
      </div>
    </aside>
  );
}