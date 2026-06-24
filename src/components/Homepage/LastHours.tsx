import Link from 'next/link';
import type { NewsStory } from '../../data/homepage';

type LastHoursProps = {
  stories: NewsStory[];
};

export default function LastHours({ stories }: LastHoursProps) {
  return (
    <section className="bg-[#6E2334] px-4 py-5 text-white md:px-5" aria-labelledby="last-hours">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 id="last-hours" className="text-sm font-bold uppercase tracking-[0.14em]">
          Last Hours
        </h2>
        <Link href="/last-hours" className="text-sm font-semibold text-white/85 hover:text-white">
          View All →
        </Link>
      </div>

      <div className="divide-y divide-white/18">
        {stories.map((story) => (
          <Link
            key={story.id}
            href={story.href}
            className="block py-3 text-[15px] font-semibold leading-snug text-white transition-colors hover:text-white/75"
          >
            {story.headline}
          </Link>
        ))}
      </div>
    </section>
  );
}