import Link from '@/components/Link';
import PageHero from '@/components/PageHero';
import { booking, contact } from '@/data/site';
import styles from './book.module.css';

export const metadata = {
  title: 'Book your stay',
  description:
    'How to book a room, a personal retreat, a group retreat or a long stay at Shambala Oceanside Retreat in North Bali.',
};

const options = [
  {
    title: 'A room or villa',
    text: 'Rooms are booked online through WeTravel, our booking provider, where you can see current rates, availability and booking terms.',
    primary: { label: 'Continue to WeTravel', href: booking.room, external: true },
    secondary: { label: 'See the rooms first', href: '/rooms' },
  },
  {
    title: 'A personal retreat',
    text: 'Seven-day, thirty-day and personal detox retreats. Each one has its own booking page with dates and what is included.',
    primary: { label: 'Choose a retreat', href: '/retreats#personal' },
  },
  {
    title: 'A group or seminar',
    text: 'Email our office with your preferred dates. Once we have confirmed them with you, the group deposit is paid on WeTravel.',
    primary: { label: 'Group booking steps', href: '/retreats#groups' },
    secondary: { label: 'Email the office', href: `mailto:${contact.email}?subject=${encodeURIComponent('Group booking enquiry')}` },
  },
  {
    title: 'A long stay',
    text: 'Stay a little longer in one of our octagon houses. Ask our office for long-stay rates and availability.',
    primary: { label: 'Email about a long stay', href: `mailto:${contact.email}?subject=${encodeURIComponent('Long stay enquiry')}` },
  },
];

function Action({ item, variant }) {
  const cls = `btn ${variant}${item.external ? ' ext' : ''}`;
  if (item.href.startsWith('/')) {
    return (
      <Link href={item.href} className={cls}>
        {item.label}
      </Link>
    );
  }
  return (
    <a href={item.href} className={cls} {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {item.label}
    </a>
  );
}

export default function BookPage() {
  return (
    <>
      <PageHero title="Book your stay" image="pool" imageAlt="The Shambala pool with thatched parasols and loungers in the tropical garden">
        <p>
          Choose how you would like to stay with us. Room and retreat bookings are completed securely on WeTravel; for
          groups and long stays, our office will help you directly.
        </p>
      </PageHero>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          {options.map((o) => (
            <article key={o.title} className={styles.option} data-reveal>
              <h2>{o.title}</h2>
              <p>{o.text}</p>
              <div className={styles.actions}>
                <Action item={o.primary} variant="btn-primary" />
                {o.secondary && <Action item={o.secondary} variant="btn-outline" />}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-mist">
        <div className={`container ${styles.help}`} data-reveal>
          <div>
            <h2>Questions before you book?</h2>
            <p>Our reception team is happy to help with rooms, transfers and excursions.</p>
          </div>
          <ul className="rows">
            <li>
              <span className="label">Email</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <span className="label">WhatsApp and mobile</span>
              <a href={`tel:${contact.mobile.tel}`}>{contact.mobile.display}</a>
            </li>
            <li>
              <span className="label">Landline</span>
              <a href={`tel:${contact.landline.tel}`}>{contact.landline.display}</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
