export default function NewsletterSection() {
  return (
    <section className="bg-[#6E2334] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-3xl font-bold leading-tight">Stay Informed.</h2>
          <p className="mt-2 max-w-2xl text-base leading-7 text-white/82">
            Get the best of The Wenzday Press delivered to your inbox.
          </p>
        </div>
        <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="name@example.com"
            aria-label="Email address"
            className="h-12 min-w-0 flex-1 bg-white px-4 text-sm font-medium text-[#1A1A1A] outline-none placeholder:text-[#1A1A1A]/45"
          />
          <button
            type="submit"
            className="h-12 bg-black px-7 text-sm font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#1A1A1A]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}