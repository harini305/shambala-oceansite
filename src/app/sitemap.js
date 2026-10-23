import { nav, site } from '@/data/site';

export default function sitemap() {
  return [...nav, { href: '/book' }].map((item) => ({ url: `${site.url}${item.href === '/' ? '' : item.href}`, changeFrequency: 'monthly' }));
}
