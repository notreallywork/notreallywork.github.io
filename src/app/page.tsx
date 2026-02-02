import Link from 'next/link';
import { getAllProjects, getAllLogs } from '@/lib/content';

export default function Home() {
  const projects = getAllProjects().slice(0, 5);
  const logs = getAllLogs().slice(0, 3);

  return (
    <div className="font-mono">
      {/* Terminal Header */}
      <section className="mb-12">
        <div className="text-[#CC8800] mb-2">$ cat /etc/motd</div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#ffb000] mb-4">
          notreally.work
        </h1>
        <p className="text-[#CC8800] max-w-2xl leading-relaxed">
          Experimental archive. Mostly broken. Occasionally functional. 
          The domain is the only joke.
        </p>
      </section>

      {/* Projects Directory */}
      <section className="mb-12">
        <div className="flex items-baseline justify-between mb-4 text-[#CC8800]">
          <span>$ ls -la projects/ | head -n 5</span>
          <Link href="/projects/" className="text-[#ffb000] underline hover:bg-[#ffb000] hover:text-[#0a0a0a] hover:no-underline">
            $ ls -la
          </Link>
        </div>
        
        <div className="text-[#CC8800] text-sm mb-2">total {projects.length * 4}</div>
        
        <div className="space-y-0">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div 
                key={project.slug} 
                className="grid grid-cols-1 md:grid-cols-[12ch_1fr_12ch_80px] gap-2 md:gap-4 border-b border-[#CC8800]/30 py-2 hover:bg-[#ffb000]/10 items-baseline text-sm"
              >
                <span className="text-[#CC8800] hidden md:block">drwxr-xr-x</span>
                <Link 
                  href={`/projects/${project.slug}/`} 
                  className="truncate text-[#ffb000] col-span-1"
                >
                  {project.slug}/
                </Link>

                {/* Status badge */}
                <div className="text-right md:text-left">
                  <span className={
                    project.status === 'broken' ? 'text-[#ff3333]' : 
                    project.status === 'functional' ? 'text-[#33ff00]' : 
                    'text-[#ffb000]'
                  }>
                    [{project.status.toUpperCase()}]
                  </span>
                </div>

                {/* Demo launch link - only shows if demo exists */}
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
            ))
          ) : (
            <div className="py-4 text-[#CC8800]">$ echo "No projects found"</div>
          )}
        </div>
      </section>

      {/* Logs Directory */}
      <section className="mb-12">
        <div className="flex items-baseline justify-between mb-4 text-[#CC8800]">
          <span>$ ls -la logs/ | head -n 3</span>
          <Link href="/logs/" className="text-[#ffb000] underline hover:bg-[#ffb000] hover:text-[#0a0a0a] hover:no-underline">
            $ ls -la
          </Link>
        </div>
        
        <div className="text-[#CC8800] text-sm mb-2">total {logs.length * 4}</div>
        
        <div className="space-y-0">
          {logs.length > 0 ? (
            logs.map((log) => (
              <div 
                key={log.slug} 
                className="grid grid-cols-1 md:grid-cols-[12ch_1fr] gap-2 md:gap-4 border-b border-[#CC8800]/30 py-2 hover:bg-[#ffb000]/10 items-baseline text-sm"
              >
                <span className="text-[#CC8800] hidden md:block">-rw-r--r--</span>
                <Link 
                  href={`/logs/${log.slug}/`} 
                  className="col-span-2 md:col-span-1 text-[#ffb000]"
                >
                  <span className="text-[#CC8800] md:hidden">-rw-r--r-- </span>
                  {log.date} {log.slug}.md
                </Link>
              </div>
            ))
          ) : (
            <div className="py-4 text-[#CC8800]">$ echo "No logs found"</div>
          )}
        </div>
      </section>

      {/* System Stats */}
      <section>
        <div className="text-[#CC8800] mb-4">$ df -h</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="border border-[#CC8800] p-3">
            <div className="text-[#ffb000] text-2xl font-bold">{projects.length}</div>
            <div className="text-[#CC8800]">projects</div>
          </div>
          <div className="border border-[#CC8800] p-3">
            <div className="text-[#ffb000] text-2xl font-bold">{logs.length}</div>
            <div className="text-[#CC8800]">logs</div>
          </div>
          <div className="border border-[#CC8800] p-3">
            <div className="text-[#ff3333] text-2xl font-bold">
              {projects.filter(p => p.status === 'broken').length}
            </div>
            <div className="text-[#CC8800]">broken</div>
          </div>
          <div className="border border-[#CC8800] p-3">
            <div className="text-[#ffb000] text-2xl font-bold">∞</div>
            <div className="text-[#CC8800]">regret</div>
          </div>
        </div>
      </section>
    </div>
  );
}