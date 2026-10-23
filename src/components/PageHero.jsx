import Picture from './Picture';
import styles from './PageHero.module.css';

export default function PageHero({ title, children, image, imageAlt, actions }) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <h1 data-hero-item>{title}</h1>
          <div className={styles.lead} data-hero-item>
            {children}
          </div>
          {actions && (
            <div className="actions" data-hero-item>
              {actions}
            </div>
          )}
        </div>
        <div className={styles.media} data-hero-item>
          <Picture
            name={image}
            alt={imageAlt}
            priority
            sizes="(min-width: 860px) 46vw, 100vw"
            className={`photo offset ${styles.photo}`}
          />
        </div>
      </div>
    </section>
  );
}
