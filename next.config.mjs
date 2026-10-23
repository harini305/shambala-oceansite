/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Images are pre-optimised by scripts/build-images.py; skip Vercel Image Optimization.
  images: { unoptimized: true },
  poweredByHeader: false,
  experimental: {
    // The site's CSS is small (~30 KB), so ship it inside the HTML instead of as
    // separate stylesheet requests.
    inlineCss: true,
  },
  async headers() {
    // Let browsers reuse static assets for 30 days instead of re-requesting them.
    // (/_next/static is already cached immutably by Next.js.) If a file in these
    // folders is ever replaced, give it a new name so visitors get the new version.
    const cache = [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }];
    return ['/images/:path*', '/docs/:path*', '/media/:path*'].map((source) => ({ source, headers: cache }));
  },
  async redirects() {
    // Legacy static-site URLs (see docs/source-audit/09-phase-2-recommendations.md §3)
    const legacy = [
      ['/index.html', '/'],
      ['/roomsNEW.html', '/rooms'],
      ['/rooms.html', '/rooms'],
      ['/rates-availabilities.html', '/rooms'],
      ['/photo-gallery.html', '/rooms'],
      ['/photo-gallery-list.html', '/rooms'],
      ['/gallery.html', '/rooms'],
      ['/groupbooking-info.html', '/retreats#groups'],
      ['/wellness.html', '/retreats'],
      ['/LongStay/shambala.html', '/retreats#long-stay'],
      ['/spa.html', '/wellness'],
      ['/yoga.html', '/wellness#yoga'],
      ['/Activites.html', '/wellness#around-shambala'],
      ['/vission-and-mission.html', '/#our-story'],
      ['/team.html', '/#our-story'],
      ['/contact.html', '/contact'],
      ['/map.html', '/contact#getting-here'],
    ];
    return legacy.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
