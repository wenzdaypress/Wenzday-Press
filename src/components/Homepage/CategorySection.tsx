import Link from 'next/link';
import type { NewsStory } from '../../data/homepage';
import SectionHeader from './SectionHeader';
import StoryImage from './StoryImage';

type CategorySectionProps = {
  title: string;
  href: string;
  stories: NewsStory[];
};

export default function CategorySection({ title, href, stories }: CategorySectionProps) {
  const sectionId = `${title.toLowerCase()}-section`;

  return (
    <section aria-labelledby={sectionId}>
      <SectionHeader id={sectionId} title={title} href={href} />
      <div className="flex snap-x gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-8 md:overflow-visible md:pb-0">
        {stories.map((story) => (
          <article key={story.id} className="min-w-[76%] snap-start md:min-w-0">
            <Link href={story.href} className="group block">
              <StoryImage label={story.headline} className="aspect-[4/3] w-full" />
              <div className="mt-3">
                <h3 className="text-lg font-bold leading-snug text-[#1A1A1A] transition-colors group-hover:text-[#6E2334]">
                  {story.headline}
                </h3>
                <p className="mt-2 text-sm font-medium text-[#1A1A1A]/62">
                  {story.author} • {story.date} • {story.time}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}