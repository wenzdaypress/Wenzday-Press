import ArticleCard from '../ArticleCard';
import type { NewsStory } from '../../data/homepage';

type FeaturedStoriesProps = {
  stories: NewsStory[];
};

export default function FeaturedStories({ stories }: FeaturedStoriesProps) {
  return (
    <section aria-label="Featured stories">
      <div className="flex snap-x gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0">
        {stories.map((story) => (
          <ArticleCard
            key={story.id}
            article={story}
            variant="featured"
            headingLevel={2}
            className="min-w-[78%] snap-start md:min-w-0"
          />
        ))}
      </div>
    </section>
  );
}