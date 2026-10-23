import Picture from '@/components/Picture';
import PageHero from '@/components/PageHero';
import VideoFacade from '@/components/VideoFacade';
import { contact } from '@/data/site';
import styles from './wellness.module.css';

export const metadata = {
  title: 'Spa, yoga and excursions',
  description:
    'Balinese massage, reflexology, flower baths and sound healing at the Shambala Spa, easy hatha yoga with Sumane, and excursions on the north shore of Bali.',
};

const treatments = [
  {
    name: 'Balinese oil massage',
    text: 'A traditional full-body Bali massage with organic to aromatic oils. Light pressure and slow, smooth strokes release tension, stress and muscle soreness.',
  },
  {
    name: 'Chakra oil massage and body scrub',
    text: 'Two hours: a sound healing session on the sound table, a full-body massage with one of seven chakra oils, then a salt or herbal scrub.',
  },
  {
    name: 'Body scrubs',
    text: 'Natural lulur, the traditional Balinese herbal scrub, or a salt scrub made with pure essential oils, after your oil massage.',
  },
  {
    name: 'Reflexology',
    text: 'Done “clothes on”, with powder instead of oil, for the feet, head and shoulders, or the full body.',
  },
  {
    name: 'Facials',
    text: 'Totally natural products: mango, papaya or aloe vera, depending on which fruits are in season.',
  },
  {
    name: 'Pedicure and manicure',
    text: 'Nail shaping, trimming and cuticle treatment, followed by a hand and lower-arm or foot and calf massage.',
  },
  {
    name: 'Sound healing',
    text: 'Our specially crafted teak sound table, sound bowls, and the Otto 64 and Otto 128 tuning forks.',
  },
  {
    name: 'Flower bath',
    text: 'Warm water, flowers and candlelight, alone or with a partner. Please order one day in advance: the flowers are bought fresh each morning at the village market.',
  },
];

const dayAtTheSpa = [
  'Ten minutes on the sound table',
  'A foot soak in warm water with flower petals',
  'Half an hour of foot reflexology',
  'Half an hour of head, neck and shoulder massage',
  'A Balinese oil massage of your choice and a salt scrub',
  'A natural facial, and a manicure or pedicure',
];

const excursions = [
  {
    id: 'dolphins',
    title: 'Dolphins and sunrise',
    text: 'An early-morning adventure with the village fishermen on their outrigger boats, at most two passengers per boat, starting right from the beach at Shambala.',
    image: 'dolphins',
    alt: 'Dolphins leaping beside an outrigger boat with guests at sea',
  },
  {
    id: 'waterfall',
    title: 'Les waterfall',
    text: 'A wild and wonderful waterfall, about 70 metres tall, around 20 minutes from Shambala by car.',
    image: 'waterfall',
    alt: 'A wide waterfall cascading over mossy rocks in the forest',
  },
  {
    id: 'temples',
    title: 'Temples and ceremonies',
    text: 'Temple visits in Bondalem, cleansing and blessing ceremonies at a temple by the ocean, and all-day trips to Besakih, Ulun Danu Batur and Tirta Ganga.',
    image: 'ceremony',
    alt: 'Villagers dressed in white gathered for a ceremony at a Balinese temple at night',
  },
  {
    id: 'offerings',
    title: 'Balinese culture',
    text: 'Offering-basket making, Balinese dance performances and classes, a visit to a Balinese healer, and the hot springs with the nearby Buddhist temple.',
    image: 'offering',
    alt: 'A hand holding incense sticks and a frangipani flower over a Balinese offering',
  },
];

export default function WellnessPage() {
  return (
    <>
      <PageHero
        title="Spa, yoga and the north shore"
        image="flower-bath"
        imageAlt="A stone bath filled with flower petals and surrounded by candles"
        actions={
          <a href="#spa" className="btn btn-primary">
            Spa treatments
          </a>
        }
      >
        <p>
          A few steps from our swimming pool, the Shambala Spa offers wellness sessions ranging from massages with salt
          scrubs, chakra oils and flower baths to sound healing.
        </p>
      </PageHero>

      <section className="section" id="spa">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Spa treatments</h2>
            <p>
              Our massages are designed to nurture your soul as well as your body, from the bottom of your feet to the
              tip of your head.
            </p>
          </div>
          <dl className={styles.menu} data-reveal-stagger>
            {treatments.map((t) => (
              <div key={t.name} className={styles.item}>
                <dt>{t.name}</dt>
                <dd>{t.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section bg-navy">
        <div className={`container ${styles.day}`}>
          <div data-reveal>
            <h2>A day at the spa</h2>
            <p className={styles.dayLead}>
              Four and a half hours of our favourite treatments, which you can end with a flower bath by candlelight,
              alone or with your sweetheart.
            </p>
          </div>
          <ol className={styles.dayList} data-reveal-stagger>
            {dayAtTheSpa.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <div className={`container ${styles.dayNote}`} data-reveal>
          <p>
            Spa treatments and the Day at the Spa are booked at the office at Shambala. For current prices, ask our team
            on arrival or email <a href={`mailto:${contact.email}`}>{contact.email}</a>. If you wish to leave a tip,
            please give it directly to your therapist.
          </p>
        </div>
      </section>

      <section className="section" id="yoga">
        <div className="container split">
          <div className="media" data-reveal-image>
            <VideoFacade
              id="Wkfy5VYUdVA"
              title="Yoga with Sumane at Shambala Oceanside Retreat"
              poster="yoga-sumane"
              posterAlt="Sumane seated cross-legged in front of carved wooden doors"
            />
          </div>
          <div className="stack" data-reveal>
            <h2>Yoga and meditation</h2>
            <p className="lead">
              Join Sumane at our yoga shala in the heart of Shambala to restore calm, strength and centredness with easy
              hatha yoga.
            </p>
            <p>
              Sumane is a self-taught yoga practitioner with a very gentle presence. The shala is surrounded by our lush
              garden, where the sound of the birds and the ocean waves accompany your session. Individual and group
              sessions can be arranged at a time that suits you.
            </p>
            <h3 className={styles.subhead}>Other wellness sessions</h3>
            <ul className="list">
              <li>Amethyst far-infrared Bio-Mat</li>
              <li>Hyperbaric oxygen chamber</li>
              <li>Guided imagery meditation</li>
              <li>
                Online guided meditations in English and German at{' '}
                <a href="https://www.ilonaselke.online/" target="_blank" rel="noopener noreferrer" className="ext">
                  ilonaselke.online
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-mist" id="around-shambala">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Around Shambala</h2>
            <p>
              Swim or snorkel on the safe reef right in front of Shambala, with snorkeling equipment free of charge,
              paddle a kayak, and explore Bali’s temples and the waterfalls of the north shore.
            </p>
          </div>
          <div className={styles.excursions}>
            {excursions.map((e) => (
              <article key={e.id} className={styles.excursion} data-reveal>
                <Picture name={e.image} alt={e.alt} sizes="(min-width: 860px) 45vw, 100vw" className={`photo ${styles.excursionPhoto}`} />
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </article>
            ))}
          </div>
          <p className={styles.arrange} data-reveal>
            Excursions are arranged by our office. Transfers and tours are run by{' '}
            <a href={contact.perama} target="_blank" rel="noopener noreferrer" className="ext">
              Perama Tour
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
