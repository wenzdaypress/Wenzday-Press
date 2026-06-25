import ArticleCard from '../ArticleCard';
import type { NewsStory } from '../../data/homepage';

type HeroStoryProps = {
  story: NewsStory;
};

export default function HeroStory({ story }: HeroStoryProps) {
  return <ArticleCard article={story} variant="hero" headingLevel={1} />;
}