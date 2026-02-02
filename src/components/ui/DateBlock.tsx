interface DateBlockProps {
  date: string;
  emphasized?: boolean;
}

export function DateBlock({ date, emphasized = false }: DateBlockProps) {
  return (
    <time
      className={`font-mono text-[13px] ${
        emphasized ? 'text-foreground' : 'text-muted'
      }`}
    >
      {date}
    </time>
  );
}
