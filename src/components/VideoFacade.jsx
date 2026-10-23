'use client';

import { useState } from 'react';
import Picture from './Picture';
import styles from './VideoFacade.module.css';

// Click-to-load YouTube player: shows a local photo until the visitor asks for the
// video, so no third-party iframe loads with the page. Always fluid 16:9.
export default function VideoFacade({ id, title, poster, posterAlt, sizes = '(min-width: 1024px) 50vw, 100vw' }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={styles.frame}>
      {playing ? (
        <iframe
          className={styles.iframe}
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className={styles.trigger} onClick={() => setPlaying(true)}>
          <Picture name={poster} alt={posterAlt} sizes={sizes} className={styles.poster} />
          <span className={styles.play} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
          </span>
          <span className={styles.label}>
            Play video<span className="visually-hidden">: {title}</span>
          </span>
        </button>
      )}
    </div>
  );
}
