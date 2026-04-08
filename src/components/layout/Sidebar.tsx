import Link from 'next/link';
import { getProjectNavItems, getLogNavItems } from '@/lib/content';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Sidebar() {
  const projects = getProjectNavItems();
  const logs = getLogNavItems();

  return (
    <aside className="hidden lg:block fixed left-0 top-0 w-[280px] h-screen border-r border-border bg-background font-mono z-50">
      <div className="p-6 h-full overflow-auto flex flex-col">
        {/* Shell Header */}
        <div className="mb-8">
          <Link href="/" className="no-underline block hover:opacity-80">
            <div className="text-foreground text-lg font-bold tracking-tight">
              notreally.work
            </div>
          </Link>
          <div className="text-xs text-muted mt-1">$ /bin/sh</div>
        </div>

        {/* Projects Directory */}
        <nav className="mb-8">
          <div className="text-muted text-sm mb-2">$ ls projects/</div>
          <div className="pl-2 space-y-0.5 border-l border-border-dim/30">
            {projects.slice(0, 5).map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}/`}
                className="block text-sm text-foreground hover:bg-foreground hover:text-background px-2 py-1.5 -ml-2"
              >
                {project.title}
              </Link>
            ))}
          </div>
          <Link
            href="/projects/"
            className="inline-block mt-2 text-xs text-chrome hover:text-muted"
          >
            $ ls -la
          </Link>
        </nav>

        {/* Logs Directory */}
        <nav className="mb-8">
          <div className="text-muted text-sm mb-2">$ ls logs/</div>
          <div className="pl-2 space-y-0.5 border-l border-border-dim/30">
            {logs.slice(0, 3).map((log) => (
              <Link
                key={log.slug}
                href={`/logs/${log.slug}/`}
                className="block text-sm text-foreground hover:bg-foreground hover:text-background px-2 py-1.5 -ml-2"
              >
                {log.title}
              </Link>
            ))}
          </div>
          <Link
            href="/logs/"
            className="inline-block mt-2 text-xs text-chrome hover:text-muted"
          >
            $ ls -la
          </Link>
        </nav>

        {/* System Info */}
        <nav className="mt-auto">
          <div className="text-muted text-sm mb-2">$ cat sysinfo</div>
          <div className="pl-2 space-y-1 border-l border-border-dim/30 text-sm">
            <Link
              href="/colophon/"
              className="block text-foreground hover:bg-foreground hover:text-background px-2 py-1 -ml-2 underline-offset-2"
            >
              <span className="text-muted">-rw-r--r-- </span>
              colophon.txt
            </Link>
            <a
              href="https://github.com/notreallywork"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-foreground hover:bg-foreground hover:text-background px-2 py-1 -ml-2 underline-offset-2"
            >
              <span className="text-muted">lrwxrwxrwx </span>
              github -&gt;
            </a>
          </div>
        </nav>

        {/* Footer Info */}
        <div className="mt-6 pt-4 border-t border-border-dim/30 text-xs text-chrome space-y-2">
          <div>Last login: {new Date().toLocaleDateString()}</div>
          <div>$ v1.0.0-terminal</div>
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
