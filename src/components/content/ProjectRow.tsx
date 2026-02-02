import Link from 'next/link';
import { Project } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';
import { DateBlock } from '@/components/ui/DateBlock';
import { ExternalLink } from '@/components/ui/ExternalLink';

interface ProjectRowProps {
  project: Project;
}

export function ProjectRow({ project }: ProjectRowProps) {
  const hasExternalLink = project.demo || project.github;
  const externalUrl = project.demo || (project.github ? `https://github.com/${project.github}` : null);

  return (
    <article className="group border-b border-black py-4 hover:bg-hover-bg transition-colors duration-100">
      {/* Desktop view */}
      <div className="hidden md:grid grid-cols-[100px_1fr_90px_1fr_60px] gap-6 items-baseline px-2 -mx-2">
        <DateBlock date={project.date} />
        
        <div className="min-w-0">
          <Link
            href={`/projects/${project.slug}/`}
            className="text-base underline hover:no-underline truncate block"
          >
            {project.title}
            {project.demo && <span className="text-accent ml-1">↗</span>}
          </Link>
        </div>
        
        <Badge status={project.status} />
        
        <div className="text-xs font-mono text-muted truncate">
          {project.tags.join(', ')}
        </div>
        
        <div>
          {externalUrl && (
            <ExternalLink href={externalUrl} className="text-sm">
              ↗
            </ExternalLink>
          )}
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden border border-black p-4">
        <Link
          href={`/projects/${project.slug}/`}
          className="text-lg font-bold underline hover:no-underline block mb-2"
        >
          {project.title}
        </Link>
        
        <div className="flex items-center gap-3 mb-3">
          <DateBlock date={project.date} />
          <Badge status={project.status} />
        </div>
        
        <div className="text-xs font-mono text-muted mb-3">
          {project.tags.join(', ')}
        </div>
        
        <div className="flex gap-4">
          {project.github && (
            <ExternalLink href={`https://github.com/${project.github}`} className="text-sm">
              Source
            </ExternalLink>
          )}
          {project.demo && (
            <ExternalLink href={project.demo} className="text-sm">
              Demo
            </ExternalLink>
          )}
        </div>
      </div>
    </article>
  );
}
