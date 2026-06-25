import ArticleCard from '../ArticleCard';
import type { NewsStory } from '../../data/homepage';
import SectionHeader from './SectionHeader';

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
          <ArticleCard
            key={story.id}
            article={story}
            variant="category"
            className="min-w-[76%] snap-start md:min-w-0"
          />
        ))}
      </div>
    </section>
  );
}