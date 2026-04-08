import Link from 'next/link';
import { ExternalLink } from '@/components/ui/ExternalLink';

export default function ColophonPage() {
  return (
    <div className="max-w-3xl font-mono">
      <header className="mb-8">
        <div className="text-muted mb-2">$ cat /etc/colophon</div>
        <h1 className="text-3xl font-bold tracking-tight mb-2 text-foreground">
          Colophon/
        </h1>
        <p className="text-muted">
          About this site, its construction, and its many failures.
        </p>
      </header>

      <div className="border-t border-border pt-8 space-y-8">
        {/* About */}
        <section>
          <div className="text-muted text-sm mb-4">$ cat about.txt</div>
          <div className="text-foreground space-y-4 leading-relaxed">
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
          <div className="text-muted text-sm mb-4">$ cat stack.txt</div>
          <ul className="space-y-2 text-foreground">
            <li className="flex gap-2">
              <span className="text-muted">$</span>
              <span>Framework:</span>
              <ExternalLink href="https://nextjs.org">Next.js 14</ExternalLink>
            </li>
            <li className="flex gap-2">
              <span className="text-muted">$</span>
              <span>Language:</span>
              <ExternalLink href="https://www.typescriptlang.org">TypeScript</ExternalLink>
            </li>
            <li className="flex gap-2">
              <span className="text-muted">$</span>
              <span>Styling:</span>
              <ExternalLink href="https://tailwindcss.com">Tailwind CSS</ExternalLink>
            </li>
            <li className="flex gap-2">
              <span className="text-muted">$</span>
              <span>Content:</span>
              <span>Markdown with YAML frontmatter</span>
            </li>
            <li className="flex gap-2">
              <span className="text-muted">$</span>
              <span>Deployment:</span>
              <ExternalLink href="https://vercel.com">Vercel</ExternalLink>
            </li>
          </ul>
        </section>

        {/* Design Principles */}
        <section>
          <div className="text-muted text-sm mb-4">$ cat /etc/nostalgia.conf</div>
          <ul className="space-y-2 text-foreground">
            <li className="flex gap-2">
              <span className="text-red">[ERR]</span>
              <span>No gradients (linear or radial)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red">[ERR]</span>
              <span>No box shadows (of any size/blur)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red">[ERR]</span>
              <span>No border-radius (0px everywhere)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green">[OK]</span>
              <span>Monospace mandate enforced</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green">[OK]</span>
              <span>Amber phosphor (#ffb000)</span>
            </li>
          </ul>
        </section>

        {/* Colors */}
        <section>
          <div className="text-muted text-sm mb-4">$ xcolor --palette</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-foreground">
            <div className="border border-border">
              <div className="h-16 bg-background border-b border-border"></div>
              <div className="p-2 text-xs">
                <span className="text-muted">Background</span><br />
                #0A0A0A / #F5F0E8
              </div>
            </div>
            <div className="border border-border">
              <div className="h-16 bg-foreground"></div>
              <div className="p-2 text-xs">
                <span className="text-muted">Foreground</span><br />
                #FFB000 / #1A1000
              </div>
            </div>
            <div className="border border-border">
              <div className="h-16 bg-muted"></div>
              <div className="p-2 text-xs">
                <span className="text-muted">Dim</span><br />
                #CC8800 / #6B4400
              </div>
            </div>
            <div className="border border-border">
              <div className="h-16 bg-red"></div>
              <div className="p-2 text-xs">
                <span className="text-muted">Error</span><br />
                #FF3333 / #C02000
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="text-muted text-sm mb-4">$ cat /etc/contact</div>
          <p className="text-foreground">
            For questions, bug reports, or to say hello:{' '}
            <ExternalLink href="https://github.com/notreallywork">github↗</ExternalLink>
          </p>
        </section>
      </div>

      <footer className="mt-12 pt-6 border-t border-border">
        <Link
          href="/"
          className="text-muted hover:text-foreground underline"
        >
          $ cd ~
        </Link>
      </footer>
    </div>
  );
}
