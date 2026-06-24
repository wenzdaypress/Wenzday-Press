import Link from 'next/link';
import type { LongformStory } from '../../data/homepage';
import SectionHeader from './SectionHeader';
import StoryImage from './StoryImage';

type EditorialSectionProps = {
  stories: LongformStory[];
};

export default function EditorialSection({ stories }: EditorialSectionProps) {
  return (
    <section aria-labelledby="editorials-section">
      <SectionHeader id="editorials-section" title="Editorials" href="/editorials" />
      <div className="space-y-6">
        {stories.map((story) => (
          <article key={story.id}>
            <Link href={story.href} className="group grid gap-4 md:grid-cols-[220px_1fr] md:gap-6">
              <StoryImage label={story.headline} className="aspect-[16/10] w-full md:aspect-[4/3]" />
              <div>
                <h3 className="text-2xl font-bold leading-tight text-[#1A1A1A] transition-colors group-hover:text-[#6E2334]">
                  {story.headline}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#1A1A1A]/72">{story.excerpt}</p>
                <p className="mt-3 text-sm font-medium text-[#1A1A1A]/62">
                  {story.author} • {story.date} • {story.readingTime}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}