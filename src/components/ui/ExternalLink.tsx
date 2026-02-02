interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ExternalLink({ href, children, className = '' }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-accent underline hover:no-underline ${className}`}
    >
      {children}
      <span className="ml-0.5">↗</span>
    </a>
  );
}
