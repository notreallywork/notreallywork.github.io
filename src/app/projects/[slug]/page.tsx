import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, getAllProjects } from '@/lib/content';
import { Badge } from '@/components/ui/Badge';
import { DateBlock } from '@/components/ui/DateBlock';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { MarkdownBody } from '@/components/ui/MarkdownBody';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: 'Not Found',
    };
  }
  
  return {
    title: `${project.title} — notreally.work`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-3xl">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <Link
          href="/projects/"
          className="text-sm text-muted underline hover:no-underline"
        >
          ← Projects
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <DateBlock date={project.date} emphasized />
          <Badge status={project.status} />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {project.title}
        </h1>
        
        <p className="text-lg text-muted mb-6">
          {project.summary}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-muted uppercase tracking-wider"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex flex-wrap gap-4">
          {project.github && (
            <ExternalLink href={`https://github.com/${project.github}`}>
              Source Code
            </ExternalLink>
          )}
          {project.demo && (
            <ExternalLink href={project.demo}>
              Live Demo
            </ExternalLink>
          )}
        </div>
      </header>

      {/* Content */}
      <article className="markdown-body border-t border-black pt-8">
        <MarkdownBody content={project.content} />
      </article>

      {/* Footer navigation */}
      <footer className="mt-12 pt-6 border-t border-black">
        <Link
          href="/projects/"
          className="text-sm underline hover:no-underline"
        >
          ← Back to all projects
        </Link>
      </footer>
    </div>
  );
}
