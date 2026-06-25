import Image from 'next/image';
import Link from 'next/link';

export type ArticleCardVariant = 'hero' | 'featured' | 'category' | 'editorial' | 'column';

export type ArticleCardArticle = {
  href: string;
  headline: string;
  excerpt: string;
  author: string;
  date: string;
  time: string;
  imageSrc?: string;
  imageAlt?: string;
};

type ArticleCardProps = {
  article: ArticleCardArticle;
  variant: ArticleCardVariant;
  headingLevel?: 1 | 2 | 3;
  className?: string;
};

const variantStyles: Record<
  ArticleCardVariant,
  {
    link: string;
    image: string;
    body: string;
    heading: string;
    excerpt: string;
    meta: string;
    headlineClamp: string;
    excerptClamp: string;
  }
> = {
  hero: {
    link: 'block h-full',
    image: 'aspect-video w-full',
    body: 'mt-5',
    heading: 'text-3xl leading-[1.15] md:text-5xl',
    excerpt: 'mt-4 text-lg leading-8',
    meta: 'mt-4',
    headlineClamp: 'line-clamp-3',
    excerptClamp: 'line-clamp-3',
  },
  featured: {
    link: 'block h-full',
    image: 'aspect-video w-full',
    body: 'mt-3',
    heading: 'text-lg leading-snug',
    excerpt: 'mt-2 text-sm leading-6',
    meta: 'mt-2',
    headlineClamp: 'line-clamp-2',
    excerptClamp: 'line-clamp-2',
  },
  category: {
    link: 'block h-full',
    image: 'aspect-video w-full',
    body: 'mt-3',
    heading: 'text-lg leading-snug',
    excerpt: 'mt-2 hidden md:block text-sm leading-6 md:line-clamp-2',
    meta: 'mt-2',
    headlineClamp: 'line-clamp-2',
    excerptClamp: '',
  },
  editorial: {
    link: 'grid h-full gap-4 md:grid-cols-[220px_1fr] md:gap-6',
    image: 'aspect-video w-full md:aspect-video',
    body: '',
    heading: 'text-2xl leading-tight',
    excerpt: 'mt-3 text-base leading-7',
    meta: 'mt-3',
    headlineClamp: 'line-clamp-3',
    excerptClamp: 'line-clamp-3',
  },
  column: {
    link: 'grid h-full gap-4 md:grid-cols-[220px_1fr] md:gap-6',
    image: 'aspect-video w-full md:aspect-video',
    body: '',
    heading: 'text-2xl leading-tight',
    excerpt: 'mt-3 text-base leading-7',
    meta: 'mt-3',
    headlineClamp: 'line-clamp-3',
    excerptClamp: 'line-clamp-3',
  },
};

export default function ArticleCard({
  article,
  variant,
  headingLevel = 3,
  className = '',
}: ArticleCardProps) {
  const styles = variantStyles[variant];
  const Heading = `h${headingLevel}` as 'h1' | 'h2' | 'h3';
  const metadata = [article.author, article.date, article.time].filter(Boolean).join(' \u2022 ');

  return (
    <article className={`h-full ${className}`}>
      <Link
        href={article.href}
        className={`group outline-none focus-visible:ring-2 focus-visible:ring-[#6E2334] focus-visible:ring-offset-4 ${styles.link}`}
      >
        <ArticleImage
          src={article.imageSrc}
          alt={article.imageAlt ?? article.headline}
          sizes={imageSizes[variant]}
          priority={variant === 'hero'}
          className={styles.image}
        />
        <div className={styles.body}>
          <Heading
            className={`${styles.heading} ${styles.headlineClamp} font-bold text-[#6E2334] transition-colors group-hover:text-[#541A28]`}
          >
            {article.headline}
          </Heading>
          <p className={`${styles.excerpt} ${styles.excerptClamp} font-normal text-[#475569]`}>
            {article.excerpt}
          </p>
          <p className={`${styles.meta} text-sm font-normal text-[#94A3B8]`}>{metadata}</p>
        </div>
      </Link>
    </article>
  );
}

const imageSizes: Record<ArticleCardVariant, string> = {
  hero: '(min-width: 1024px) 60vw, 100vw',
  featured: '(min-width: 768px) 18vw, 78vw',
  category: '(min-width: 768px) 30vw, 76vw',
  editorial: '(min-width: 768px) 220px, 100vw',
  column: '(min-width: 768px) 220px, 100vw',
};

function ArticleImage({
  src,
  alt,
  sizes,
  priority,
  className,
}: {
  src?: string;
  alt: string;
  sizes: string;
  priority: boolean;
  className: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#F1F5F9] ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-200 ease-in-out group-hover:scale-[1.03]"
        />
      ) : (
        <div
  className="flex h-full w-full items-center justify-center bg-[#F1F5F9]"
  role="img"
  aria-label={alt}
>
  <Image
    src="/logo.png"
    alt="The Wenzday Press"
    width={72}
    height={72}
    className="object-contain opacity-70"
  />
</div>
      )}
    </div>
  );
}