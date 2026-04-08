import Link from 'next/link';
import { getAllProjects } from '@/lib/content';

export default function ProjectsIndexPage() {
  const projects = getAllProjects();

  return (
    <div className="font-mono">
      <div className="text-muted mb-4">
        user@notreally:~$ ls -la projects/
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-2">
        Projects/
      </h1>
      <p className="text-muted mb-8">
        {projects.length} entries found
      </p>

      <div className="text-muted text-sm mb-4">
        total {projects.length * 4}
      </div>

      <div className="space-y-0">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="grid grid-cols-1 md:grid-cols-[12ch_1fr_12ch_80px] gap-2 md:gap-4 border-b border-border-dim/30 py-3 hover:bg-[var(--hover-bg)] items-baseline text-sm"
          >
            <span className="text-muted hidden md:block">drwxr-xr-x</span>

            <Link
              href={`/projects/${project.slug}/`}
              className="truncate text-foreground"
            >
              {project.date} {project.slug}/
            </Link>

            <span className={
              project.status === 'broken'     ? 'text-red' :
              project.status === 'functional' ? 'text-green' :
              'text-foreground'
            }>
              [{project.status.toUpperCase()}]
            </span>

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
