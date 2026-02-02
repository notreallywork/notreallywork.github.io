'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownBodyProps {
  content: string;
}

export function MarkdownBody({ content }: MarkdownBodyProps) {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ src, alt }) => (
            <figure className="figure">
              <img src={src} alt={alt} />
              {alt && <figcaption className="figure-caption">{alt}</figcaption>}
            </figure>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
