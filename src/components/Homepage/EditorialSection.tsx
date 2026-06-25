import ArticleCard from '../ArticleCard';
import type { LongformStory } from '../../data/homepage';
import SectionHeader from './SectionHeader';

type EditorialSectionProps = {
  stories: LongformStory[];
};

export default function EditorialSection({ stories }: EditorialSectionProps) {
  return (
    <section aria-labelledby="editorials-section">
      <SectionHeader id="editorials-section" title="Editorials" href="/editorials" />
      <div className="space-y-6">
        {stories.map((story) => (
          <ArticleCard key={story.id} article={story} variant="editorial" />
        ))}
      </div>
    </section>
  );
}