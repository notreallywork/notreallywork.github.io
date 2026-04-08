import Link from 'next/link';
import { getAllProjects, getAllLogs } from '@/lib/content';

export default function Home() {
  const projects = getAllProjects().slice(0, 5);
  const logs = getAllLogs().slice(0, 3);

  return (
    <div className="font-mono">
      {/* Terminal Header */}
      <section className="mb-12">
        <div className="text-muted mb-2">$ cat /etc/motd</div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          notreally.work
        </h1>
        <p className="text-muted max-w-2xl leading-relaxed">
          Experimental archive. Mostly broken. Occasionally functional.
          The domain is the only joke.
        </p>
      </section>

      {/* Projects Directory */}
      <section className="mb-12">
        <div className="flex items-baseline justify-between mb-4 text-muted">
          <span>$ ls -la projects/ | head -n 5</span>
          <Link href="/projects/" className="text-foreground underline hover:bg-foreground hover:text-background hover:no-underline">
            $ ls -la
          </Link>
        </div>

        <div className="text-muted text-sm mb-2">total {projects.length * 4}</div>

        <div className="space-y-0">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div
                key={project.slug}
                className="grid grid-cols-1 md:grid-cols-[1fr_12ch_80px] gap-2 md:gap-4 border-b border-border-dim/30 py-2.5 hover:bg-[var(--hover-bg)] items-baseline text-sm"
              >
                <Link
                  href={`/projects/${project.slug}/`}
                  className="truncate text-foreground col-span-1"
                >
                  {project.title}
                  <span className="text-chrome ml-2 font-normal hidden md:inline">{project.slug}</span>
                </Link>

                {/* Status badge */}
                <div className="text-right md:text-left">
                  <span className={
                    project.status === 'broken'     ? 'text-red' :
                    project.status === 'functional' ? 'text-green' :
                    'text-foreground'
                  }>
                    [{project.status.toUpperCase()}]
                  </span>
                </div>

                {/* Demo launch link */}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green hover:bg-green hover:text-background px-2 underline"
                  >
                    ./run↗
                  </a>
                ) : (
                  <span className="text-muted">-</span>
                )}
              </div>
            ))
          ) : (
            <div className="py-4 text-muted">$ echo "No projects found"</div>
          )}
        </div>
      </section>

      {/* Logs Directory */}
      <section className="mb-12">
        <div className="flex items-baseline justify-between mb-4 text-muted">
          <span>$ ls -la logs/ | head -n 3</span>
          <Link href="/logs/" className="text-foreground underline hover:bg-foreground hover:text-background hover:no-underline">
            $ ls -la
          </Link>
        </div>

        <div className="text-muted text-sm mb-2">total {logs.length * 4}</div>

        <div className="space-y-0">
          {logs.length > 0 ? (
            logs.map((log) => (
              <div
                key={log.slug}
                className="grid grid-cols-1 md:grid-cols-[12ch_1fr] gap-2 md:gap-4 border-b border-border-dim/30 py-2 hover:bg-[var(--hover-bg)] items-baseline text-sm"
              >
                <span className="text-muted hidden md:block">-rw-r--r--</span>
                <Link
                  href={`/logs/${log.slug}/`}
                  className="col-span-2 md:col-span-1 text-foreground"
                >
                  <span className="text-muted md:hidden">-rw-r--r-- </span>
                  {log.date} {log.slug}.md
                </Link>
              </div>
            ))
          ) : (
            <div className="py-4 text-muted">$ echo "No logs found"</div>
          )}
        </div>
      </section>

      {/* System Stats */}
      <section>
        <div className="text-muted mb-4">$ df -h</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="border border-muted p-3">
            <div className="text-foreground text-2xl font-bold">{projects.length}</div>
            <div className="text-muted">projects</div>
          </div>
          <div className="border border-muted p-3">
            <div className="text-foreground text-2xl font-bold">{logs.length}</div>
            <div className="text-muted">logs</div>
          </div>
          <div className="border border-muted p-3">
            <div className="text-red text-2xl font-bold">
              {projects.filter(p => p.status === 'broken').length}
            </div>
            <div className="text-muted">broken</div>
          </div>
          <div className="border border-muted p-3">
            <div className="text-foreground text-2xl font-bold">∞</div>
            <div className="text-muted">regret</div>
          </div>
        </div>
      </section>
    </div>
  );
}
