import Link from 'next/link';
import type { NewsStory } from '../../data/homepage';
import StoryImage from './StoryImage';

type HeroStoryProps = {
  story: NewsStory;
};

export default function HeroStory({ story }: HeroStoryProps) {
  return (
    <article>
      <Link href={story.href} className="group block">
        <StoryImage label={story.headline} className="aspect-[16/10] w-full" />
        <div className="mt-5">
          <h1 className="text-3xl font-bold leading-[1.15] text-[#1A1A1A] transition-colors group-hover:text-[#6E2334] md:text-5xl">
            {story.headline}
          </h1>
          <p className="mt-4 hidden text-lg font-normal leading-8 text-[#1A1A1A]/72 md:block">
            {story.excerpt}
          </p>
          <p className="mt-4 text-sm font-medium text-[#1A1A1A]/65">
            <span className="hidden md:inline">{story.author} • </span>
            {story.date} • {story.time}
          </p>
        </div>
      </Link>
    </article>
  );
}