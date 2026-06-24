import Link from 'next/link';

const categories = ['National', 'Politics', 'Economy', 'Law', 'Explainer', 'International'];
const company = ['About', 'Contact', 'Careers', 'Privacy Policy', 'Terms of Use'];
const social = ['X', 'Instagram', 'LinkedIn', 'Facebook'];

export default function Footer() {
  return (
    <footer className="bg-black px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <h2 className="text-2xl font-bold uppercase tracking-[0.08em]">The Wenzday Press</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
            Placeholder motto for a calm, serious, and reader-first newsroom.
          </p>
        </div>

        <FooterColumn title="Categories" items={categories} basePath="/category" />
        <FooterColumn title="Company" items={company} basePath="" />
        <FooterColumn title="Follow Us" items={social} basePath="#" />
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/16 pt-6 text-sm font-medium text-white/55">
        © 2026 The Wenzday Press. All Rights Reserved.
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
  basePath,
}: {
  title: string;
  items: string[];
  basePath: string;
}) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white/85">{title}</h3>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <Link
            key={item}
            href={basePath === '#' ? '#' : `${basePath}/${item.toLowerCase().replaceAll(' ', '-')}`}
            className="block text-sm font-medium text-white/62 transition-colors hover:text-white"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}