import Header from '../Header';
import {
  categorySections,
  columns,
  editorials,
  featuredStories,
  heroStory,
  lastHoursHeadlines,
} from '../../data/homepage';
import CategorySection from './CategorySection';
import ColumnsSection from './ColumnsSection';
import EditorialSection from './EditorialSection';
import FeaturedStories from './FeaturedStories';
import Footer from './Footer';
import HeroStory from './HeroStory';
import LastHours from './LastHours';
import NewsletterSection from './NewsletterSection';

export default function HomepageLayout() {
  return (
    <div
      className="min-h-screen overflow-x-hidden bg-white text-[#1A1A1A]"
      style={{ fontFamily: 'Inter, Arial, Helvetica, sans-serif' }}
    >
      <Header />

      <main>
        <h1 style={{ color: 'red', fontSize: '40px' }}>
        HOMEPAGE TEST
        </h1>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:py-8 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr] xl:grid-cols-[310px_1fr]">
            <div className="order-2 lg:order-1">
              <LastHours stories={lastHoursHeadlines} />
            </div>

            <div className="order-1 grid gap-8 lg:order-2">
              <div className="grid gap-8 md:grid-cols-[minmax(0,65fr)_minmax(0,35fr)]">
                <HeroStory story={heroStory} />
                <div className="hidden md:block">
                  <FeaturedStories stories={featuredStories} />
                </div>
              </div>
            </div>

            <div className="order-3 md:hidden">
              <FeaturedStories stories={featuredStories} />
            </div>
          </div>

          <div className="mt-12 space-y-12 md:mt-14 md:space-y-14">
            {categorySections.map((section) => (
              <CategorySection
                key={section.category}
                title={section.category}
                href={section.href}
                stories={section.stories}
              />
            ))}

            <EditorialSection stories={editorials} />
            <ColumnsSection stories={columns} />
          </div>
        </div>

        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
}