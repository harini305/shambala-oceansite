import Link from '@/components/Link';
import Picture from '@/components/Picture';
import VideoFacade from '@/components/VideoFacade';
import styles from './home.module.css';

export const metadata = {
  title: { absolute: 'Shambala Oceanside Retreat | Boutique retreat on the north shore of Bali' },
};

const stays = [
  {
    href: '/rooms',
    link: 'See the rooms',
    title: 'Rooms and villas',
    text: 'Two-story oceanfront villas, garden-view octagon bungalows and a house on stilts with an ocean view.',
    image: 'villa-bed',
    alt: 'A villa bedroom with a white canopy and blue silk bedcover',
  },
  {
    href: '/retreats#personal',
    link: 'Personal retreats',
    title: 'Personal and writer’s retreats',
    text: 'Time out from the noise and speed of the world: seven days, thirty days or a personal detox retreat.',
    image: 'sea-yoga',
    alt: 'A guest in a yoga tree pose between two stone statues at the ocean’s edge',
  },
  {
    href: '/retreats#groups',
    link: 'Groups and seminars',
    title: 'Groups and seminars',
    text: 'An octagon meditation and yoga hall, gardens for outdoor gatherings and a caring staff for your retreat.',
    image: 'hall-meditation',
    alt: 'A group meditating on cushions in the Shambala meditation hall',
  },
];

const wellness = [
  'Easy yoga in the morning with Sumane',
  'Massages and treatments at the spa',
  'Snorkeling in the warm, safe ocean',
  'Trekking to the nearby waterfall',
  'Temple visits and blessing ceremonies',
  'An early-morning dolphin tour',
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.row}`}>
          <div className={styles.text}>
            <h1 data-hero-item>Shambala Oceanside Retreat</h1>
            <p className={styles.heroLead} data-hero-item>
              Serenity, Spirituality and Sustainability. A sanctuary only steps away from the ocean, with hand-crafted
              Bali-style villas, vegetarian cuisine, a spa and an octagon meditation hall.
            </p>
            <div className={styles.actions} data-hero-item>
              <Link href="/book" className="btn btn-gold">
                Book your stay
              </Link>
              <Link href="/rooms" className="btn btn-ghost-light">
                Explore the rooms
              </Link>
            </div>
          </div>
          <div className={styles.media} data-hero-item>
            <Picture
              name="villa-night"
              alt="A two-story octagon villa at Shambala lit warmly at dusk under the palms"
              priority
              sizes="(min-width: 900px) 45vw, 100vw"
              className={`photo ${styles.heroPhoto}`}
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className={styles.section}>
        <div className={`container ${styles.row}`}>
          <div className={styles.media} data-reveal-image>
            <Picture
              name="villa-interior"
              alt="Villa interior with a canopy bed, hand-carved furniture and windows onto the garden"
              sizes="(min-width: 900px) 45vw, 100vw"
              className={`photo ${styles.photo}`}
            />
          </div>
          <div className={styles.text} data-reveal>
            <h2>Where Heaven and Earth meet</h2>
            <p className={styles.lead}>
              Nestled along the pristine shores of Bali, Shambala Oceanside Retreat is a sanctuary for those seeking a
              transformative escape, owned by author and visionary Ilona Selke.
            </p>
            <p>
              Watch the sunrise as well as the sunset, and Full Moon rises over the ocean. The boutique-style
              accommodations blend Indian and Balinese contemporary design, and each house is decorated in the same
              hand-crafted Bali style.
            </p>
            <Link href="/rooms" className={`text-link ${styles.more}`}>
              See the villas and bungalows
            </Link>
          </div>
        </div>
      </section>

      {/* Ways to stay */}
      <section className={`${styles.section} bg-mist`}>
        <div className="container">
          <div className={styles.head} data-reveal>
            <h2>Ways to stay</h2>
            <p>
              Come for a few nights, a personal retreat or with your own group. Ask us about{' '}
              <Link href="/retreats#long-stay">long stays</Link> in our octagon houses with kitchenette.
            </p>
          </div>
          <div className={styles.cards} data-reveal-stagger>
            {stays.map((s) => (
              <Link key={s.title} href={s.href} className={styles.card}>
                <Picture name={s.image} alt={s.alt} sizes="(min-width: 900px) 30vw, 100vw" className={`photo ${styles.photo}`} />
                <div className={styles.cardBody}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className={styles.cardLink}>{s.link}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className={styles.section}>
        <div className={`container ${styles.row}`}>
          <div className={styles.text} data-reveal>
            <h2>Wake up to the waves</h2>
            <p className={styles.lead}>
              Whether you choose a beachfront villa or a garden bungalow, you’ll wake up to the soothing sounds of the
              waves and the invigorating scent of the sea.
            </p>
            <p>
              Lounge by the pool and enjoy vegetarian and vegan food at the oceanside restaurant, where you can watch
              fishermen’s boats and, on lucky days, dolphins float by.
            </p>
          </div>
          <div className={styles.media} data-reveal-image>
            <VideoFacade
              id="bfgep_V_0mk"
              title="Shambala Oceanside Retreat on the north shore of Bali"
              poster="pool"
              posterAlt="The Shambala pool with thatched parasols and loungers in the tropical garden"
              sizes="(min-width: 900px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Wellness */}
      <section className={`${styles.section} bg-mist`}>
        <div className={`container ${styles.row}`}>
          <div className={styles.media} data-reveal-image>
            <Picture
              name="yoga-sumane"
              alt="Sumane, Shambala’s yoga teacher, seated cross-legged in front of carved wooden doors"
              sizes="(min-width: 900px) 45vw, 100vw"
              className={`photo ${styles.photo}`}
            />
          </div>
          <div className={styles.text} data-reveal>
            <h2>Wellness by the sea</h2>
            <p className={styles.lead}>Every moment at Shambala is designed to nurture your mind, body and spirit.</p>
            <ul className={`list ${styles.list}`}>
              {wellness.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
            <Link href="/wellness" className={`text-link ${styles.more}`}>
              Spa, yoga and excursions
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className={`${styles.section} bg-navy`}>
        <div className="container">
          <figure className={styles.quote} data-reveal>
            <blockquote>
              <p>
                “The colors, the flowers, the staff, the details and art all around, the breeze, the sunsets that were
                completely different each evening. The sanctuary held us so well and I feel born again.”
              </p>
            </blockquote>
            <figcaption>Sara, who stayed with her friend Ian</figcaption>
          </figure>
        </div>
      </section>

      {/* Story */}
      <section className={`${styles.section} ${styles.storySection}`} id="our-story">
        <div className={`container ${styles.row}`}>
          <div className={styles.text} data-reveal>
            <h2>How Shambala came to be</h2>
            <p className={styles.lead}>
              In October 1999, Ilona Selke met a very old seer in Ubud who told her, “we are, or will be, neighbors.”
            </p>
            <p>
              In spring 2005 Ilona and her husband Don Paris found a home for sale right on the beach on the north
              shore. A narrow strip of land beside it, bought only to build a sea wall, became the humble beginning of
              Shambala.
            </p>
            <p>
              Architect and builder Gede Partajana created the octagon villas, bungalows and meditation hall. Six women
              and forty men built it over a year and a half, carrying every stone in from the road. Today the team also
              runs the{' '}
              <a href="https://www.baliblessing.com" target="_blank" rel="noopener noreferrer" className="ext">
                Bali Blessing project
              </a>{' '}
              for families in the village.
            </p>
          </div>
          <div className={styles.media} data-reveal-image>
            <Picture
              name="welcome-ceremony"
              alt="Guests welcomed with flower garlands by Shambala staff at the carved entrance gate"
              sizes="(min-width: 900px) 45vw, 100vw"
              className={`photo ${styles.photo}`}
            />
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className={`${styles.section} ${styles.closingSection} bg-mist`}>
        <div className={`container ${styles.closing}`} data-reveal>
          <h2>Plan your stay</h2>
          <p className={styles.lead}>
            Bondalem, on the north shore of Bali, where Bali is still Bali. You are booking with a government-approved
            hotel.
          </p>
          <div className={styles.actionsCenter}>
            <Link href="/book" className="btn btn-primary">
              Book your stay
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact and directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
