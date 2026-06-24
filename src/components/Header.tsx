'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { FormEvent } from 'react';

const interFont = {
  fontFamily: 'Inter, Arial, Helvetica, sans-serif',
};

const utilityLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const categories = [
  { label: 'National', href: '/category/national' },
  { label: 'Politics', href: '/category/politics' },
  { label: 'Economy', href: '/category/economy' },
  { label: 'Law', href: '/category/law' },
  { label: 'Explainer', href: '/category/explainer' },
  { label: 'International', href: '/category/international' },
  { label: 'Editorial', href: '/category/editorial' },
  { label: 'Column', href: '/category/column' },
];

function getPublicationDate() {
  const today = new Date();

  const day = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  }).format(today);

  const dateParts = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).formatToParts(today);

  const date = `${dateParts.find((part) => part.type === 'day')?.value ?? ''} ${
    dateParts.find((part) => part.type === 'month')?.value ?? ''
  }, ${dateParts.find((part) => part.type === 'year')?.value ?? ''}`;

  return { day, date };
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { day, date } = getPublicationDate();

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = String(formData.get('q') ?? '').trim();

    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    } else {
      router.push('/search');
    }
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="h-20 bg-[#6E2334] text-white">
        <div className="mx-auto grid h-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 sm:px-6 lg:px-8">
          <div className="min-w-0 text-left" style={interFont}>
            <p className="text-sm font-semibold leading-5 text-white">{day}</p>
            <p className="text-xs leading-5 text-white/75 sm:text-sm">{date}</p>
          </div>

          <Link
            href="/"
            aria-label="The Wenzday Press home"
            className="flex min-w-0 items-center justify-center text-center text-white"
            style={interFont}
          >
            <span className="inline-flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/65 text-[9px] font-bold uppercase tracking-[0.12em] text-white/85 sm:h-10 sm:w-10 sm:text-[10px]">
                Logo
              </span>
              <span className="relative inline-block">
                <span className="absolute left-0 -top-4 text-[10px] font-bold uppercase tracking-[0.22em] text-white/85">
                  THE
                </span>
                <span className="block text-2xl font-bold leading-none tracking-[0.02em] sm:text-4xl lg:text-5xl">
                  Wenzday Press
                </span>
              </span>
            </span>
          </Link>

          <div className="flex min-w-0 items-center justify-end gap-4">
            <nav aria-label="Utility navigation" className="hidden items-center gap-5 md:flex">
              {utilityLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                  style={interFont}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <form
              role="search"
              aria-label="Site search"
              onSubmit={handleSearch}
              className="hidden h-10 w-48 items-center rounded-full border border-white/25 bg-white px-3 lg:flex"
              style={interFont}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="mr-2 h-4 w-4 shrink-0 text-[#6E2334]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m21 21-4.35-4.35" />
                <circle cx="11" cy="11" r="7" />
              </svg>
              <input
                name="q"
                type="search"
                placeholder="Search stories..."
                className="min-w-0 flex-1 bg-transparent text-sm text-[#1A1A1A] outline-none placeholder:text-[#1A1A1A]/45"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="h-[50px] bg-white shadow-[0_4px_10px_rgba(26,26,26,0.08)]">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Category navigation"
            className="flex h-full w-full items-center justify-start gap-7 overflow-x-auto whitespace-nowrap md:justify-center"
            style={interFont}
          >
            {categories.map((category) => {
              const isActive =
                pathname === category.href || pathname?.startsWith(`${category.href}/`);

              return (
                <Link
                  key={category.href}
                  href={category.href}
                  aria-current={isActive ? 'page' : undefined}
                  className="relative flex h-full items-center text-sm font-semibold text-[#1A1A1A]/80 transition-colors hover:text-[#6E2334]"
                >
                  {category.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#6E2334] transition-all ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}