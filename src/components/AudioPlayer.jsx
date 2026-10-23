'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './AudioPlayer.module.css';

const fmt = (s) => (Number.isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}` : '0:00');

// Minimal player styled with the site fonts (native <audio> controls use the system font).
export default function AudioPlayer({ src, title }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const a = audioRef.current;
    const onTime = () => setTime(a.currentTime);
    const onMeta = () => setDuration(a.duration);
    const onEnd = () => setPlaying(false);
    a.addEventListener('timeupdate', onTime);
    a.addEventListener('loadedmetadata', onMeta);
    a.addEventListener('ended', onEnd);
    return () => {
      a.removeEventListener('timeupdate', onTime);
      a.removeEventListener('loadedmetadata', onMeta);
      a.removeEventListener('ended', onEnd);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (a.paused) {
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  const seek = (e) => {
    const a = audioRef.current;
    a.currentTime = Number(e.target.value);
    setTime(a.currentTime);
  };

  return (
    <div className={styles.player}>
      {/* preload="none": the file is only downloaded when the visitor presses play */}
      <audio ref={audioRef} src={src} preload="none" />
      <button type="button" className={styles.button} onClick={toggle} aria-label={`${playing ? 'Pause' : 'Play'} ${title}`}>
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          {playing ? <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" /> : <path d="M8 5.5v13l11-6.5z" fill="currentColor" />}
        </svg>
      </button>
      <input
        type="range"
        className={styles.range}
        min="0"
        max={duration || 0}
        step="0.1"
        value={time}
        onChange={seek}
        aria-label={`Seek ${title}`}
        style={{ '--progress': duration ? `${(time / duration) * 100}%` : '0%' }}
      />
      <span className={styles.time}>
        {fmt(time)} / {fmt(duration)}
      </span>
    </div>
  );
}
