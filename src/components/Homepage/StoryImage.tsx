type StoryImageProps = {
  label: string;
  className?: string;
};

export default function StoryImage({ label, className = '' }: StoryImageProps) {
  return (
    <div
      className={`flex items-center justify-center bg-[#E6E6E6] text-xs font-semibold uppercase tracking-[0.14em] text-[#1A1A1A]/45 ${className}`}
      aria-label={`${label} image placeholder`}
      role="img"
    >
      Image
    </div>
  );
}