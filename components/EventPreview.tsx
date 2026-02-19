'use client'

import Link from 'next/link';
import { eventData as data } from '@/lib/eventData';
import styles from '@/app/page.module.css';

export default function EventPreview() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  const dayData = data.find((d) => d.day && d.day.includes(formattedDate));
  const events = dayData?.events ?? [];

  return (
    <div className={styles.eventPreview}>
      <div className={styles.previewHeader}>Today's Events</div>
      {events.length > 0 ? (
        events.slice(0, 3).map((ev, i) => (
          <div key={`${ev.title}-${i}`} className={styles.eventItem}>
            <div className={styles.eventTime}>{ev.start}{ev.end ? ` — ${ev.end}` : ''}</div>
            <div className={styles.eventTitle}>{ev.title}{ev.location ? ` • ${ev.location}` : ''}</div>
          </div>
        ))
      ) : (
        <div className={styles.eventEmpty}>No events today.</div>
      )}
      <div className={styles.previewFooter}>
        <Link href="/events">See full schedule</Link>
      </div>
    </div>
  );
}
