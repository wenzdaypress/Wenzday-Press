import ArticleCard from '../ArticleCard';
import type { LongformStory } from '../../data/homepage';
import SectionHeader from './SectionHeader';

type ColumnsSectionProps = {
  stories: LongformStory[];
};

export default function ColumnsSection({ stories }: ColumnsSectionProps) {
  return (
    <section aria-labelledby="columns-section">
      <SectionHeader id="columns-section" title="Columns" href="/columns" />
      <div className="space-y-6">
        {stories.map((story) => (
          <ArticleCard key={story.id} article={story} variant="column" />
        ))}
      </div>
    </section>
  );
}