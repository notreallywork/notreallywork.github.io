import Link from 'next/link';
import { getAllProjects, getProjectBySlug } from '@/lib/content';
import { notFound } from 'next/navigation';

// THIS IS REQUIRED FOR STATIC EXPORT:
export function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="font-mono">
      {/* Breadcrumb */}
      <div className="text-[#804400] mb-4">
        user@notreally:~$ cat projects/{project.slug}/README.md
      </div>

      {/* Header */}
      <h1 className="text-3xl font-bold text-[#ffb000] mb-2">{project.title}</h1>
      
      {/* Metadata line */}
      <div className="text-sm text-[#804400] mb-6 border-b border-[#804400]/30 pb-4">
        <span>{project.date}</span>
        <span className="mx-4">|</span>
        <span className={
          project.status === 'broken' ? 'text-[#ff3333]' : 
          project.status === 'functional' ? 'text-[#33ff00]' : 
          'text-[#ffb000]'
        }>
          [{project.status.toUpperCase()}]
        </span>
        {project.github && (
          <>
            <span className="mx-4">|</span>
            <a href={`https://github.com/${project.github}`} target="_blank" rel="noopener noreferrer" className="underline hover:bg-[#ffb000] hover:text-[#0a0a0a]">
              github↗
            </a>
          </>
        )}
        {project.demo && (
          <>
            <span className="mx-4">|</span>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[#33ff00] underline hover:bg-[#33ff00] hover:text-[#0a0a0a]">
              ./run.sh↗
            </a>
          </>
        )}
      </div>

      {/* Demo Launch Box - if demo exists */}
      {project.demo && (
        <div className="border border-[#33ff00] p-4 mb-8 text-center">
          <div className="text-[#804400] mb-2">$ ./launch.sh</div>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl font-bold text-[#33ff00] hover:bg-[#33ff00] hover:text-[#0a0a0a] px-4 py-2 inline-block"
          >
            [ LAUNCH EXPERIMENT ]
          </a>
        </div>
      )}

      {/* Content */}
      <div className="max-w-none">
        <div className="text-[#ffb000] whitespace-pre-wrap">
          {project.content}
        </div>
      </div>

      {/* Back link */}
      <div className="mt-12 pt-4 border-t border-[#804400]/30">
        <Link href="/projects/" className="text-[#804400] hover:text-[#ffb000] underline">
          $ cd ../
        </Link>
      </div>
    </div>
  );
}