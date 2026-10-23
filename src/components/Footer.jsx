import Link from '@/components/Link';
import { nav, contact } from '@/data/site';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <p className={styles.name}>Shambala Oceanside Retreat</p>
          <address>
            {contact.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
        </div>

        <nav aria-label="Footer">
          <ul className={styles.links}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/book">Book your stay</Link>
            </li>
          </ul>
        </nav>

        <ul className={styles.contact}>
          <li>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>
            <a href={`tel:${contact.mobile.tel}`}>{contact.mobile.display}</a> <span>WhatsApp and mobile</span>
          </li>
          <li>
            <a href={`tel:${contact.landline.tel}`}>{contact.landline.display}</a> <span>Landline</span>
          </li>
          <li className={styles.external}>
            <a href={contact.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={contact.linktree} target="_blank" rel="noopener noreferrer">All links</a>
          </li>
        </ul>
      </div>

      <div className={`container ${styles.legal}`}>
        <p>
          © {new Date().getFullYear()} Shambala Oceanside Retreat. Operated by {contact.businessName}
        </p>
      </div>
    </footer>
  );
}
