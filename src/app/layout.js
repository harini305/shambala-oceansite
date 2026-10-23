import { Playfair_Display, Montserrat } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Motion from '@/components/Motion';
import { site } from '@/data/site';
import './globals.css';

const heading = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-playfair',
  display: 'swap',
});

const body = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Shambala Oceanside Retreat, North Bali',
    template: '%s | Shambala Oceanside Retreat',
  },
  description:
    'A boutique oceanside retreat in Bondalem on the north shore of Bali: octagon villas, vegetarian cuisine, spa, yoga and a meditation hall.',
  openGraph: {
    type: 'website',
    siteName: site.name,
    images: [{ url: '/images/villa-night-560.jpg', width: 560, height: 555 }],
  },
};

export const viewport = {
  themeColor: '#152545',
};

// Hide hero items before first paint only when motion is allowed; reveal them
// anyway if the animation script has not started after 2.5 s.
const motionBoot = `(function(d,w){try{if(w.matchMedia('(prefers-reduced-motion: no-preference)').matches){d.documentElement.classList.add('motion-ok');setTimeout(function(){if(!w.__motionStarted)d.documentElement.classList.add('motion-fallback')},2500)}}catch(e){}})(document,window);`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBoot }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Motion />
      </body>
    </html>
  );
}
