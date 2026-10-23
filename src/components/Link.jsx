import NextLink from 'next/link';

// Site-wide link with route prefetching turned off. Every page is static and small,
// so background prefetches of each visible link only add CDN requests.
export default function Link({ prefetch = false, ...props }) {
  return <NextLink prefetch={prefetch} {...props} />;
}
