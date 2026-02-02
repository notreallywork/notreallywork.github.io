import { Project } from '@/lib/types';

type Status = Project['status'];

interface BadgeProps {
  status: Status;
}

const statusStyles: Record<Status, string> = {
  functional: 'border-black text-black',
  experimental: 'border-[#CC8800] text-[#CC8800]',
  abandoned: 'border-[#888888] text-[#666666]',
  broken: 'border-[#FF0000] text-[#FF0000] bg-[#FFEEEE]',
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
