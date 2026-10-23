import AudioPlayer from '@/components/AudioPlayer';
import Picture from '@/components/Picture';
import PageHero from '@/components/PageHero';
import VideoFacade from '@/components/VideoFacade';
import { booking, contact, docs } from '@/data/site';
import styles from './retreats.module.css';

export const metadata = {
  title: 'Personal, group and long-stay retreats',
  description:
    'Personal and writer’s retreats, group seminars and long stays at Shambala Oceanside Retreat on the north shore of Bali.',
};

const personal = [
  { title: 'Personal or shared retreat', detail: '7 days', href: booking.personal7 },
  { title: 'Personal retreat', detail: '30 days', href: booking.personal30 },
  { title: 'Personal detox retreat', detail: 'Rejuvenate your essence', href: booking.detox },
];

const equipment = [
  'Audio sound system with mixer',
  'PA system with remote or wired microphones',
  'MP3 player connection',
  'Projector and screen',
  'Flip chart on request',
  'Wall fans, and AC units on request (surcharge)',
  'Yoga mats, mat covers, blocks and bolsters',
  'Sponge mats, back jacks and pillows',
];

const quotes = [
  {
    text: 'Shambala was so beautiful as always, no mould, because the rooms are so airy and everything was perfect. Honestly I really wouldn’t use another venue again in Bali after using Shambala.',
    by: 'Chelsa, Australia',
  },
  {
    text: 'Shambala is a magical venue with a wonderful vibration, beautiful gardens, amazing rooms, situated by the sea. One feels both protected, private and free at the same time.',
    by: 'Sa, USA',
  },
  {
    text: 'All the rooms have a bright energy. The rooms are very beautiful and well kept! Some of my retreat participants said it was much nicer than they thought from the pictures.',
    by: 'Julia Mandel, Germany',
  },
];

export default function RetreatsPage() {
  return (
    <>
      <PageHero
        title="Retreats at Shambala"
        image="sea-yoga"
        imageAlt="A guest in a yoga tree pose between stone statues at the edge of the ocean"
        actions={
          <>
            <a href="#personal" className="btn btn-primary">
              Personal retreats
            </a>
            <a href="#groups" className="btn btn-outline">
              Groups and seminars
            </a>
          </>
        }
      >
        <p>
          Take some time out from the noise and speed of the world. Come for a needed rest, for your health and mental
          wellbeing, or to write your book without disturbances.
        </p>
      </PageHero>

      <section className="section" id="personal">
        <div className="container split">
          <div className="media" data-reveal-image>
            <Picture
              name="ocean-scarf"
              alt="A woman standing in the waves holding a white scarf in the wind"
              sizes="(min-width: 860px) 50vw, 100vw"
              className="photo ratio-4-5 offset"
            />
          </div>
          <div className="stack" data-reveal>
            <h2>Personal and writer’s retreats</h2>
            <p>
              Activate your inner calm with journaling, writing your book, meditating by the sea, yoga and spa
              treatments. Located on Bali’s untouched north coast, Shambala offers:
            </p>
            <ul className="list">
              <li>Ocean-view rooms and lush tropical gardens</li>
              <li>A peaceful, high-vibration environment</li>
              <li>Nourishing detox and vegetarian cuisine, without garlic or alcohol</li>
              <li>A space designed for reflection, creativity and transformation</li>
            </ul>
            <p className="muted">We have already had more than five writers finish their books here at Shambala.</p>
          </div>
        </div>

        <div className={`container ${styles.options}`} data-reveal>
          <h3>Choose your retreat</h3>
          <ul className={styles.optionList}>
            {personal.map((p) => (
              <li key={p.href}>
                <div>
                  <span className={styles.optionTitle}>{p.title}</span>
                  <span className={styles.optionDetail}>{p.detail}</span>
                </div>
                <a href={p.href} className="btn btn-outline ext" target="_blank" rel="noopener noreferrer">
                  Details and booking
                </a>
              </li>
            ))}
          </ul>
          <p className="small muted">Dates, prices and what is included are shown on each WeTravel page.</p>
        </div>
      </section>

      <section className="section bg-mist" id="groups">
        <div className="container">
          <div className="split">
            <div className="stack" data-reveal>
              <h2>Groups and seminars</h2>
              <p className="lead">
                Dear seminar leader, we welcome you to lead your groups at Shambala, where we offer boutique
                hotel-style accommodation and a caring staff.
              </p>
              <p>
                We offer a yoga hall, meeting hall and temple for group gatherings, garden areas for outdoor
                gatherings, charming pavilions, the ocean and a pool, a restaurant right on the ocean, nature
                excursions to a waterfall and to temples for blessing and cleansing ceremonies, and a beach for
                night-time beach fires.
              </p>
            </div>
            <div className="media" data-reveal-image>
              <VideoFacade
                id="mFP4CRO191s"
                title="The Shambala meditation and yoga hall"
                poster="hall-interior"
                posterAlt="The octagon meditation hall with purple cushions arranged around a golden shrine"
              />
            </div>
          </div>

          <div className={styles.groupDetails}>
            <div data-reveal>
              <h3>The meditation hall</h3>
              <p>
                About 100 m² (around 900 square feet) under a high vaulted ceiling of about 12 metres, surrounded by
                the garden.
              </p>
              <h3 className={styles.subhead}>Equipment</h3>
              <ul className="list">
                {equipment.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
            <div data-reveal>
              <h3>How to book a group</h3>
              <ol className={styles.steps}>
                <li>
                  Email <a href={`mailto:${contact.email}`}>{contact.email}</a> with your preferred dates.
                </li>
                <li>Once we have confirmed the dates with you, make your booking with the group event deposit.</li>
                <li>Check that all participants have the proper visas.</li>
              </ol>
              <div className="actions">
                <a href={booking.groupDeposit} className="btn btn-primary ext" target="_blank" rel="noopener noreferrer">
                  Group event deposit
                </a>
              </div>
              <ul className={`rows ${styles.links}`}>
                <li>
                  <a href={docs.c10} target="_blank" rel="noopener">
                    C10 visa application for the group leader
                  </a>
                  <span className="label">PDF</span>
                </li>
                <li>
                  <a href="https://evisa.imigrasi.go.id/web/visa-selection" target="_blank" rel="noopener noreferrer" className="ext">
                    Indonesian government e-visa site
                  </a>
                  <span className="label">External</span>
                </li>
              </ul>
            </div>
          </div>

          <h3 className={styles.quotesTitle} data-reveal>
            From group leaders
          </h3>
          <div className={styles.quotes} data-reveal-stagger>
            {quotes.map((q) => (
              <figure key={q.by} className="quote">
                <blockquote>
                  <p>“{q.text}”</p>
                </blockquote>
                <figcaption>{q.by}</figcaption>
              </figure>
            ))}
          </div>

          <div className={styles.audio} data-reveal>
            <p>
              <strong>Voice message from a group leader</strong>
              <span className="muted">, Chelsa, Australia, 2023</span>
            </p>
            <AudioPlayer src="/media/testimonial-chelsa-2023.mp3" title="voice message from Chelsa" />
          </div>
        </div>
      </section>

      <section className="section" id="long-stay">
        <div className="container split reverse">
          <div className="media" data-reveal-image>
            <Picture
              name="octagon-bedroom"
              alt="Octagon villa bedroom with a canopy bed, blue fabrics and carved wooden furniture"
              sizes="(min-width: 860px) 50vw, 100vw"
              className="photo ratio-4-3"
            />
          </div>
          <div className="stack" data-reveal>
            <h2>Long stays</h2>
            <p className="lead">Welcome to Bali, welcome to Shambala, your home away from home.</p>
            <p>
              Stay with us a little longer in one of the two-story octagon houses, Rajinder, Quan Yin or Brahma, with
              a kitchenette, or in a single-story octagon. We have sunshine and the dry season for about nine months of
              the year, from April to December.
            </p>
            <p>
              Order your food à la carte at the oceanside restaurant, or ask our staff to cook a vegetarian meal of
              your choice.
            </p>
            <div className="actions">
              <a
                href={`mailto:${contact.email}?subject=${encodeURIComponent('Long stay enquiry')}`}
                className="btn btn-primary"
              >
                Ask about long-stay rates
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
