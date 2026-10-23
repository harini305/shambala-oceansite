import Link from '@/components/Link';
import Picture from '@/components/Picture';
import { contact, docs } from '@/data/site';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact and getting here',
  description:
    'Contact Shambala Oceanside Retreat by email, phone or WhatsApp, with directions to Bondalem on the north shore of Bali and travel documents.',
};

const route = [
  'Take the road all the way to Kintamani, the volcano town, with its view of Lake Batur and Mt Agung.',
  'About 5 miles after passing Kintamani you will come to a large statue in the middle of a Y in the road.',
  'Go about another 8–10 miles until you see a sign toward Bondalem, staying right at the Y.',
  'Look for our orange Shambala sign. About 200 metres after it, the main road bends sharply left down the hill: do not take the left bend, go straight or slightly right, following the sign to Bondalem.',
];

const sections = [
  { id: 'reach-us', label: 'Reach us' },
  { id: 'getting-here', label: 'Getting here' },
  { id: 'before-you-travel', label: 'Before you travel' },
];

export default function ContactPage() {
  return (
    <section className={`section ${styles.page}`}>
      <div className={`container ${styles.layout}`} data-pin-container>
        {/* Pinned text column */}
        <aside className={styles.intro} data-pin>
          <h1 data-hero-item>Contact and getting here</h1>
          <p className="lead" data-hero-item>
            Shambala Oceanside Retreat is in Bondalem, on the north shore of Bali. Our reception team will help with
            bookings, groups, long stays and excursions.
          </p>
          <nav aria-label="On this page" className={styles.toc} data-hero-item>
            <ul>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="actions" data-hero-item>
            <Link href="/book" className="btn btn-primary">
              Book your stay
            </Link>
            <a href={contact.maps} className="btn btn-outline ext" target="_blank" rel="noopener noreferrer">
              Google Maps
            </a>
          </div>
        </aside>

        {/* Scrolling column */}
        <div className={styles.content}>
          <section id="reach-us" className={styles.block} aria-labelledby="reach-us-title">
            <h2 id="reach-us-title">Reach us</h2>
            <ul className="rows">
              <li>
                <span className="label">Email</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <span className="label">WhatsApp and mobile, {contact.mobile.person}</span>
                <a href={`tel:${contact.mobile.tel}`}>{contact.mobile.display}</a>
              </li>
              <li>
                <span className="label">Landline</span>
                <a href={`tel:${contact.landline.tel}`}>{contact.landline.display}</a>
              </li>
              <li>
                <span className="label">Address</span>
                <address className={styles.address}>
                  Shambala Oceanside Retreat ({contact.businessName})
                  {contact.address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
              </li>
              <li>
                <span className="label">Online</span>
                <span className={styles.inline}>
                  <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="ext">
                    Facebook
                  </a>
                  <a href={contact.linktree} target="_blank" rel="noopener noreferrer" className="ext">
                    All our links
                  </a>
                </span>
              </li>
            </ul>
          </section>

          <section id="getting-here" className={styles.block} aria-labelledby="getting-here-title" data-reveal>
            <h2 id="getting-here-title">Getting here</h2>
            <p>
              The drive via Kintamani takes about 2 to 3 hours, depending on where you are picked up. One van fits four
              guests and their luggage.
            </p>
            <div className={styles.routeRow}>
              <ol className={styles.route}>
                {route.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <figure className={styles.sign}>
                <Picture
                  name="road-sign"
                  alt="The orange Shambala Oceanside Retreat road sign, listing Dolphins, Yoga, Snorkeling, Massage, Diving and Vegetarian"
                  sizes="(min-width: 900px) 220px, 60vw"
                  className="photo"
                />
                <figcaption className="caption">Look for this sign at the crossroads, about 10 km past Kintamani.</figcaption>
              </figure>
            </div>
            <ul className="rows">
              <li>
                <a href={docs.directions} target="_blank" rel="noopener">
                  Full directions, including the last stretch to Shambala
                </a>
                <span className="label">PDF</span>
              </li>
              <li>
                <a href={contact.perama} target="_blank" rel="noopener noreferrer" className="ext">
                  Perama Tour: pick-up, drop-off and tours
                </a>
                <span className="label">External</span>
              </li>
              <li>
                <a href={contact.ritatkala} target="_blank" rel="noopener noreferrer" className="ext">
                  Ritatkala café, a stop-over in Kintamani
                </a>
                <span className="label">External</span>
              </li>
            </ul>
          </section>

          <section id="before-you-travel" className={styles.block} aria-labelledby="travel-title" data-reveal>
            <h2 id="travel-title">Before you travel</h2>
            <p>Packing lists, our guest waiver and visa information.</p>
            <ul className="rows">
              <li>
                <a href={docs.packingEn} target="_blank" rel="noopener">
                  Packing list (English)
                </a>
                <span className="label">PDF, 4.4 MB</span>
              </li>
              <li>
                <a href={docs.packingDe} target="_blank" rel="noopener" hrefLang="de">
                  Packliste (Deutsch)
                </a>
                <span className="label">PDF, 4.2 MB</span>
              </li>
              <li>
                <a href={docs.waiver} target="_blank" rel="noopener">
                  Guest waiver and travel insurance requirements
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
          </section>
        </div>
      </div>
    </section>
  );
}
