import Link from 'next/link';
import { getAllProjects } from '@/lib/content';

export default function ProjectsIndexPage() {
  const projects = getAllProjects();

  return (
    <div className="font-mono">
      <div className="text-[#CC8800] mb-4">
        user@notreally:~$ ls -la projects/
      </div>

      <h1 className="text-3xl font-bold text-[#ffb000] mb-2">
        Projects/
      </h1>
      <p className="text-[#CC8800] mb-8">
        {projects.length} entries found
      </p>

      <div className="text-[#CC8800] text-sm mb-4">
        total {projects.length * 4}
      </div>

      <div className="space-y-0">
        {projects.map((project) => (
          <div 
            key={project.slug} 
            className="grid grid-cols-1 md:grid-cols-[12ch_1fr_12ch_80px] gap-2 md:gap-4 border-b border-[#CC8800]/30 py-3 hover:bg-[#ffb000]/10 items-baseline text-sm"
          >
            <span className="text-[#CC8800] hidden md:block">drwxr-xr-x</span>
            
            <Link 
              href={`/projects/${project.slug}/`} 
              className="truncate text-[#ffb000]"
            >
              {project.date} {project.slug}/
            </Link>

            <span className={
              project.status === 'broken' ? 'text-[#ff3333]' : 
              project.status === 'functional' ? 'text-[#33ff00]' : 
              'text-[#ffb000]'
            }>
              [{project.status.toUpperCase()}]
            </span>

            {project.demo ? (
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#33ff00] hover:bg-[#33ff00] hover:text-[#0a0a0a] px-2 underline"
              >
                ./run↗
              </a>
            ) : (
              <span className="text-[#CC8800]">-</span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link href="/" className="text-[#CC8800] hover:text-[#ffb000] underline">
          $ cd ~
        </Link>
      </div>
    </div>
  );
}