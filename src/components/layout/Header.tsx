'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NavItem } from '@/lib/types';

interface HeaderProps {
  projects: NavItem[];
  logs: NavItem[];
}

export function Header({ projects, logs }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="lg:hidden sticky top-0 z-50 bg-[#0a0a0a] border-b border-[#ffb000] font-mono">
      <div className="flex items-center justify-between h-16 px-4">
        <Link href="/" className="no-underline text-[#ffb000] hover:opacity-80">
          <div className="text-lg font-bold tracking-tight">
            notreally.work
          </div>
        </Link>

        <details
          className="mobile-nav"
          open={isOpen}
          onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
        >
          <summary className="text-[#ffb000] cursor-pointer select-none list-none flex items-center gap-2">
            <span className="text-[#CC8800]">$</span>
            <span>menu</span>
            <span className="text-[#CC8800]">[{isOpen ? '-' : '+'}]</span>
          </summary>
        </details>
      </div>

      {isOpen && (
        <nav className="border-t border-[#CC8800]/30 px-4 py-6 bg-[#0a0a0a]">
          {/* Projects Directory */}
          <div className="mb-6">
            <div className="text-[#CC8800] text-xs mb-3">$ ls projects/</div>
            <div className="pl-2 space-y-1 border-l border-[#CC8800]/30">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}/`}
                  className="block text-sm text-[#ffb000] leading-loose hover:bg-[#ffb000] hover:text-[#0a0a0a] px-2 py-1 -ml-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[#CC8800]">drwxr-xr-x </span>
                  <span className="text-[#CC8800]">{project.date} </span>
                  {project.slug}/
                </Link>
              ))}
            </div>
            <Link
              href="/projects/"
              className="inline-block mt-2 text-xs text-[#CC8800] hover:text-[#ffb000] underline"
              onClick={() => setIsOpen(false)}
            >
              $ ls -la projects/
            </Link>
          </div>

          {/* Logs Directory */}
          <div className="mb-6">
            <div className="text-[#CC8800] text-xs mb-3">$ ls logs/</div>
            <div className="pl-2 space-y-1 border-l border-[#CC8800]/30">
              {logs.map((log) => (
                <Link
                  key={log.slug}
                  href={`/logs/${log.slug}/`}
                  className="block text-sm text-[#ffb000] leading-loose hover:bg-[#ffb000] hover:text-[#0a0a0a] px-2 py-1 -ml-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[#CC8800]">-rw-r--r-- </span>
                  <span className="text-[#CC8800]">{log.date} </span>
                  {log.slug}.md
                </Link>
              ))}
            </div>
            <Link
              href="/logs/"
              className="inline-block mt-2 text-xs text-[#CC8800] hover:text-[#ffb000] underline"
              onClick={() => setIsOpen(false)}
            >
              $ ls -la logs/
            </Link>
          </div>

          {/* System Info */}
          <div>
            <div className="text-[#CC8800] text-xs mb-3">$ cat info</div>
            <div className="pl-2 space-y-1 border-l border-[#CC8800]/30">
              <Link
                href="/colophon/"
                className="block text-sm text-[#ffb000] leading-loose hover:bg-[#ffb000] hover:text-[#0a0a0a] px-2 py-1 -ml-2"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-[#CC8800]">-rw-r--r-- </span>
                colophon.txt
              </Link>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[#ffb000] leading-loose hover:bg-[#ffb000] hover:text-[#0a0a0a] px-2 py-1 -ml-2"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-[#CC8800]">lrwxrwxrwx </span>
                github -&gt;
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}