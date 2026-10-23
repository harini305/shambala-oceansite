'use client';

import { useEffect, useRef, useState } from 'react';
import Link from '@/components/Link';
import { usePathname } from 'next/navigation';
import { nav } from '@/data/site';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);

  // Close the menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const closeOnDesktop = () => window.innerWidth >= 960 && setOpen(false);
    document.documentElement.classList.add('menu-open');
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', closeOnDesktop);
    return () => {
      document.documentElement.classList.remove('menu-open');
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, [open]);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.raised : ''}`}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label="Shambala Oceanside Retreat, home">
          <img src="/images/logo-96.webp" width="48" height="48" alt="" fetchPriority="high" />
          <span className={styles.wordmark}>
            Shambala
            <small>Oceanside Retreat</small>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link} aria-current={isActive(item.href) ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/book" className={`btn btn-primary ${styles.cta}`} aria-current={isActive('/book') ? 'page' : undefined}>
          Book your stay
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          <span className={styles.bars} aria-hidden="true" />
        </button>
      </div>

      <div id="mobile-menu" className={`${styles.panel} ${open ? styles.panelOpen : ''}`} hidden={!open}>
        <nav aria-label="Main mobile">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.panelLink} aria-current={isActive(item.href) ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/book" className="btn btn-primary btn-block">
          Book your stay
        </Link>
      </div>
    </header>
  );
}
