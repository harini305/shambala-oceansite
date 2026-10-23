import images from '@/data/images.json';

// Renders a pre-generated derivative (see scripts/build-images.py): a WebP srcset
// plus one JPEG fallback, with intrinsic dimensions so the browser reserves space.
// The browser downloads exactly one file per image.
export default function Picture({ name, alt, sizes = '100vw', priority = false, className, style }) {
  const img = images[name];
  if (!img) throw new Error(`Unknown image derivative: ${name}`);
  const webp = img.sizes.map((w) => `/images/${name}-${w}.webp ${w}w`).join(', ');

  return (
    <picture className={className} style={style}>
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      <img
        src={`/images/${name}-${img.fallback}.jpg`}
        width={img.width}
        height={img.height}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
      />
    </picture>
  );
}
