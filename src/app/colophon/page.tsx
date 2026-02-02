import Link from 'next/link';
import { ExternalLink } from '@/components/ui/ExternalLink';

export default function ColophonPage() {
  return (
    <div className="max-w-3xl font-mono">
      <header className="mb-8">
        <div className="text-[#CC8800] mb-2">$ cat /etc/colophon</div>
        <h1 className="text-3xl font-bold tracking-tight mb-2 text-[#ffb000]">
          Colophon/
        </h1>
        <p className="text-[#CC8800]">
          About this site, its construction, and its many failures.
        </p>
      </header>

      <div className="border-t border-[#ffb000] pt-8 space-y-8">
        {/* About */}
        <section>
          <div className="text-[#CC8800] text-sm mb-4">$ cat about.txt</div>
          <div className="text-[#ffb000] space-y-4 leading-relaxed">
            <p>
              notreally.work is a brutalist, utilitarian archive of experiments—
              things built, things broken, things abandoned. The domain name is 
              the only joke. The interface takes itself completely seriously.
            </p>
            <p>
              This site is inspired by the aesthetic of 1970s mainframes and 
              corporate HR databases: transparent, functional, and devoid of 
              marketing language.
            </p>
          </div>
        </section>

        {/* Technology */}
        <section>
          <div className="text-[#CC8800] text-sm mb-4">$ cat stack.txt</div>
          <ul className="space-y-2 text-[#ffb000]">
            <li className="flex gap-2">
              <span className="text-[#CC8800]">$</span>
              <span>Framework:</span>
              <ExternalLink href="https://nextjs.org">Next.js 14</ExternalLink>
            </li>
            <li className="flex gap-2">
              <span className="text-[#CC8800]">$</span>
              <span>Language:</span>
              <ExternalLink href="https://www.typescriptlang.org">TypeScript</ExternalLink>
            </li>
            <li className="flex gap-2">
              <span className="text-[#CC8800]">$</span>
              <span>Styling:</span>
              <ExternalLink href="https://tailwindcss.com">Tailwind CSS</ExternalLink>
            </li>
            <li className="flex gap-2">
              <span className="text-[#CC8800]">$</span>
              <span>Content:</span>
              <span>Markdown with YAML frontmatter</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#CC8800]">$</span>
              <span>Deployment:</span>
              <ExternalLink href="https://vercel.com">Vercel</ExternalLink>
            </li>
          </ul>
        </section>

        {/* Design Principles */}
        <section>
          <div className="text-[#CC8800] text-sm mb-4">$ cat /etc/nostalgia.conf</div>
          <ul className="space-y-2 text-[#ffb000]">
            <li className="flex gap-2">
              <span className="text-[#ff3333]">[ERR]</span>
              <span>No gradients (linear or radial)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#ff3333]">[ERR]</span>
              <span>No box shadows (of any size/blur)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#ff3333]">[ERR]</span>
              <span>No border-radius (0px everywhere)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#33ff00]">[OK]</span>
              <span>Monospace mandate enforced</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#33ff00]">[OK]</span>
              <span>Amber phosphor (#ffb000)</span>
            </li>
          </ul>
        </section>

        {/* Colors - FIXED CONTRAST */}
        <section>
          <div className="text-[#CC8800] text-sm mb-4">$ xcolor --palette</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-[#ffb000]">
            <div className="border border-[#ffb000]">
              <div className="h-16 bg-[#0a0a0a]"></div>
              <div className="p-2 text-xs">
                <span className="text-[#CC8800]">Background</span><br />
                #0A0A0A
              </div>
            </div>
            <div className="border border-[#ffb000]">
              <div className="h-16 bg-[#ffb000]"></div>
              <div className="p-2 text-xs">
                <span className="text-[#CC8800]">Amber</span><br />
                #FFB000
              </div>
            </div>
            <div className="border border-[#ffb000]">
              <div className="h-16 bg-[#CC8800]"></div>
              <div className="p-2 text-xs">
                <span className="text-[#CC8800]">Dim</span><br />
                #CC8800
              </div>
            </div>
            <div className="border border-[#ffb000]">
              <div className="h-16 bg-[#ff3333]"></div>
              <div className="p-2 text-xs">
                <span className="text-[#CC8800]">Error</span><br />
                #FF3333
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="text-[#CC8800] text-sm mb-4">$ cat /etc/contact</div>
          <p className="text-[#ffb000]">
            For questions, bug reports, or to say hello:{' '}
            <ExternalLink href="https://github.com">github↗</ExternalLink>
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-[#ffb000]">
        <Link
          href="/"
          className="text-[#CC8800] hover:text-[#ffb000] underline"
        >
          $ cd ~
        </Link>
      </footer>
    </div>
  );
}