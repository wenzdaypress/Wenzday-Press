import Link from 'next/link';

type SectionHeaderProps = {
  title: string;
  href: string;
  id?: string;
};

export default function SectionHeader({ title, href, id }: SectionHeaderProps) {
  return (
    <div className="mb-5 border-t border-[#6E2334] pt-3">
      <div className="flex items-center justify-between gap-4">
        <h2 id={id} className="text-lg font-bold uppercase tracking-[0.08em] text-[#1A1A1A]">
          {title}
        </h2>
        <Link
          href={href}
          className="shrink-0 text-sm font-semibold text-[#6E2334] transition-colors hover:text-[#1A1A1A]"
        >
          View All →
        </Link>
      </div>
    </div>
  );
}