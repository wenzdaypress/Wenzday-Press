import Link from 'next/link';
import type { NewsStory } from '../../data/homepage';
import StoryImage from './StoryImage';

type FeaturedStoriesProps = {
  stories: NewsStory[];
};

export default function FeaturedStories({ stories }: FeaturedStoriesProps) {
  return (
    <section aria-label="Featured stories">
      <div className="flex snap-x gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0">
        {stories.map((story) => (
          <article key={story.id} className="min-w-[78%] snap-start md:min-w-0">
            <Link href={story.href} className="group block">
              <StoryImage label={story.headline} className="aspect-[4/3] w-full" />
              <div className="mt-3">
                <h2 className="text-lg font-bold leading-snug text-[#1A1A1A] transition-colors group-hover:text-[#6E2334]">
                  {story.headline}
                </h2>
                <p className="mt-2 hidden text-sm leading-6 text-[#1A1A1A]/70 md:block">
                  {story.excerpt}
                </p>
                <p className="mt-2 text-sm font-medium text-[#1A1A1A]/62">
                  <span className="hidden md:inline">{story.author} • </span>
                  {story.date} • {story.time}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}