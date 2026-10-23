import Link from '@/components/Link';
import Picture from '@/components/Picture';
import { nav } from '@/data/site';
import styles from './not-found.module.css';

export const metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <section className={`section ${styles.wrap}`}>
      <div className={`container split ${styles.grid}`}>
        <div>
          <h1 data-hero-item>This page has drifted out to sea</h1>
          <p className="lead" data-hero-item>
            The page you were looking for does not exist or has moved. Our site has been simplified, so older links may
            now point somewhere new.
          </p>
          <ul className={styles.links} data-hero-item>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="media" data-hero-item>
          <Picture
            name="fishing-boats"
            alt="Fishermen in an outrigger boat on the ocean at sunrise"
            sizes="(min-width: 860px) 46vw, 100vw"
            className="photo ratio-3-2 offset"
          />
        </div>
      </div>
    </section>
  );
}
