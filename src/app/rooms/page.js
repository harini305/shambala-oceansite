import Link from '@/components/Link';
import Picture from '@/components/Picture';
import PageHero from '@/components/PageHero';
import VideoFacade from '@/components/VideoFacade';
import { contact, docs, houseRules } from '@/data/site';
import styles from './rooms.module.css';

export const metadata = {
  title: 'Rooms and villas',
  description:
    'Oceanfront villas, two-story garden villas, octagon bungalows and a house on stilts at Shambala Oceanside Retreat in Bondalem, North Bali.',
};

const buildings = [
  {
    title: 'Oceanfront villas',
    text: 'The two-story Krishna and Radha villas stand right on the ocean, each with an upper and a garden level. Pura Kecil is a single-story oceanfront octagon bungalow with a private veranda.',
    units: ['Krishna upper level, 1 king bed', 'Krishna garden level, 2 single beds', 'Radha upper level', 'Radha garden level, 2 single beds', 'Pura Kecil, single-story bungalow'],
    video: { id: 'o5Vrw1ljFTs', title: 'Oceanfront Krishna villa, upper level' },
    poster: 'villa-bed',
    alt: 'Bedroom in an oceanfront villa with a white canopy and blue silk bedcover',
  },
  {
    title: 'Two-story garden villas',
    text: 'Brahma, Quan Yin and Rajinder are two-level octagon villas set in the garden. The Brahma garden suite has its own entry and bathroom.',
    units: [
      'Brahma upper level, garden and ocean view',
      'Brahma garden suite, 1 king and 1 single bed, kitchenette',
      'Quan Yin and Rajinder upper levels, 1 king and 1 single bed each',
      'Quan Yin and Rajinder garden levels, 1 king and 1 single bed each, kitchenette',
    ],
    video: { id: 'xCvStWrW9n8', title: 'Quan Yin villa, upper level' },
    poster: 'octagon-garden',
    alt: 'A two-story octagon villa with a red tiled roof among palms and tropical plants',
  },
  {
    title: 'Single-story octagon bungalows',
    text: 'Four octagon bungalows, each with a king bed and a single bed and decorated in its own colours. Air-conditioning is available in Rama and Sita for a surcharge.',
    units: ['Vishnu, garden view', 'Buddha, garden view, green tones', 'Rama, ocean view, purple tones', 'Sita, garden view, orange and fuchsia tones'],
    video: { id: 'IU82J3VY_5E', title: 'Rama bungalow with ocean view' },
    poster: 'bungalow-exterior',
    alt: 'A white single-story octagon bungalow with a red roof and a stone path through the garden',
  },
  {
    title: 'Babaji’s House on Stilts',
    text: 'A tree house with an ocean-view balcony, a king bed upstairs and a king-size veranda swing on the garden level.',
    units: ['1 king bed upstairs', 'King veranda swing on the garden level', 'Ocean view'],
    video: { id: 'ryN1w986cu4', title: 'Babaji’s House with ocean view' },
    poster: 'babaji-veranda',
    alt: 'The open wooden veranda of the House on Stilts with purple drapes and views over the treetops',
  },
];

export default function RoomsPage() {
  return (
    <>
      <PageHero
        title="Rooms and villas"
        image="villa-living"
        imageAlt="Light-filled villa room with a hand-carved wooden desk and chair and garden views"
        actions={
          <>
            <Link href="/book" className="btn btn-primary">
              Book your stay
            </Link>
            <a href={`mailto:${contact.email}`} className="btn btn-outline">
              Email the office
            </a>
          </>
        }
      >
        <p>
          Shambala is only steps away from the ocean. Each house is decorated in the same hand-crafted Bali style,
          with the same décor, look and artistry in each of our villas and bungalows.
        </p>
      </PageHero>

      <section className="section" aria-label="Buildings">
        <div className={`container ${styles.list}`}>
          {buildings.map((b) => (
            <article key={b.title} className={styles.building}>
              <div className={styles.media} data-reveal-image>
                <VideoFacade id={b.video.id} title={b.video.title} poster={b.poster} posterAlt={b.alt} />
                <p className="caption">Video: {b.video.title}</p>
              </div>
              <div className={styles.body} data-reveal>
                <h2>{b.title}</h2>
                <p>{b.text}</p>
                <ul className="list">
                  {b.units.map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container split">
          <div className="stack" data-reveal>
            <h2>Around the grounds</h2>
            <div className={styles.facility}>
              <h3>Oceanside restaurant</h3>
              <p>
                Vegetarian and vegan food à la carte, or buffet style for groups. All our food is washed in filtered,
                ultraviolet-treated water and is safe to eat raw. The restaurant is smoke- and alcohol-free.
              </p>
              <a href={docs.menu} className="text-link" target="_blank" rel="noopener">
                View the menu (PDF)
              </a>
            </div>
            <div className={styles.facility}>
              <h3>Meditation and yoga hall</h3>
              <p>
                An octagon hall of about 100 m² with a high vaulted ceiling, used for daily yoga, meditation and group
                gatherings.
              </p>
            </div>
            <div className={styles.facility}>
              <h3>Pool, spa and ocean</h3>
              <p>
                The spa is a few steps from the swimming pool. Snorkeling equipment is free of charge and kayaks can be
                rented for the reef in front of Shambala.
              </p>
            </div>
          </div>
          <figure className={`media ${styles.map}`} data-reveal-image>
            <Picture
              name="site-map"
              alt="Aerial overview of Shambala labelled with each house (Radha, Krishna, Pura Kecil, Rama, Sita, Rajinder, Vishnu, Buddha, Quan Yin, Brahma, Treehouse), the restaurant, office, pool, large yoga hall and security, with the ocean to the north"
              sizes="(min-width: 860px) 50vw, 100vw"
              className="photo"
            />
            <figcaption className="caption">Site overview: the houses, restaurant, pool and yoga hall.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.rules}`}>
          <div data-reveal>
            <h2>House rules</h2>
            <p className="muted">
              Shambala is a vegetarian, smoke- and alcohol-free retreat. We ask every guest to respect these rules.
            </p>
          </div>
          <div data-reveal>
            <ul className="list cols">
              {houseRules.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p className={styles.waiver}>
              A signed waiver and travel insurance are required.{' '}
              <a href={docs.waiver} target="_blank" rel="noopener">
                Guest waiver (PDF)
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-navy">
        <div className={`container ${styles.book}`} data-reveal>
          <div>
            <h2>Book your room</h2>
            <p>
              Rooms are booked through WeTravel, our booking provider, where you can see current rates, availability
              and booking terms. For groups and long stays, please contact our office.
            </p>
          </div>
          <div className="actions">
            <Link href="/book" className="btn btn-gold">
              Book your stay
            </Link>
            <a href={`mailto:${contact.email}`} className="btn btn-ghost-light">
              {contact.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
