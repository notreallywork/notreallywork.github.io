import { Project } from '@/lib/types';

type Status = Project['status'];

interface BadgeProps {
  status: Status;
}

const statusStyles: Record<Status, string> = {
  functional:   'border-green text-green',
  experimental: 'border-muted text-muted',
  abandoned:    'border-chrome text-chrome',
  broken:       'border-red text-red',
};

export function Badge({ status }: BadgeProps) {
  return (
    <span
      className={`inline-block px-2 py-0.5 border text-[11px] font-mono uppercase tracking-wider ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
