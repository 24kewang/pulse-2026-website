'use client'

import { useEffect, useState } from 'react';
import { eventData, EventInfo } from '@/lib/eventData';
import styles from './EventMarquee.module.css';

const parseEventDate = (dateStr: string): Date => {
  // Extract "February 16" from "Monday, February 16"
  const parts = dateStr.split(', ');
  if (parts.length < 2) return new Date(dateStr);
  
  const dateOnly = parts[1]; // "February 16"
  // Create a date with the current year (2026)
  return new Date(`${dateOnly}, 2026`);
};

// Helper function to parse time string to minutes since midnight
function timeToMinutes(timeStr: string): number {
  const match = timeStr.match(/(\d+):(\d+)(am|pm)/i);
  if (!match) return 0;
  
  let hours = parseInt(match[1]);
  const minutes = parseInt(match[2]);
  const period = match[3].toLowerCase();
  
  if (period === 'pm' && hours !== 12) {
    hours += 12;
  } else if (period === 'am' && hours === 12) {
    hours = 0;
  }
  
  return hours * 60 + minutes;
}

// Helper function to format date like "Monday, February 16"
function formatEventDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return date.toLocaleDateString('en-US', options);
}

export default function EventMarquee() {
  const [marqueeText, setMarqueeText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const now = new Date();
    const currentDateStr = formatEventDate(now);
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    // Find today's events
    const todayEvents = eventData.find(day => formatEventDate(parseEventDate(day.day)) === currentDateStr);
    
    // Check if current time falls during an event
    let text = '';

    if (todayEvents) {
      for (const event of todayEvents.events) {
        const startMinutes = timeToMinutes(event.start);
        const endMinutes = timeToMinutes(event.end);

        if (currentMinutes >= startMinutes && currentMinutes < endMinutes) {
          // Current time is during this event
          const foodText = event.food !== 'None' ? `${event.food.toUpperCase()} WILL BE PROVIDED!` : '';
          text = `${event.title.toUpperCase()} HAPPENING NOW IN ${event.location.toUpperCase()}! ${foodText}`;
          setMarqueeText(text);
          setIsLoading(false);
          return;
        }
      }
    }

    // No current event, find the next event
    let allEvents: (EventInfo & { date: string })[] = [];
    
    for (const dayData of eventData) {
      for (const event of dayData.events) {
        allEvents.push({
          ...event,
          date: dayData.day
        });
      }
    }

    // Find the next event after current time
    let nextEvent: (EventInfo & { date: string }) | null = null;

    // First, look for events later today
    if (todayEvents) {
      for (const event of todayEvents.events) {
        const startMinutes = timeToMinutes(event.start);
        if (startMinutes > currentMinutes) {
          nextEvent = {
            ...event,
            date: todayEvents.day
          };
          break;
        }
      }
    }

    // If no event later today, look at future days
    if (!nextEvent) {
      for (const dayData of eventData) {
        const dayDate = parseEventDate(dayData.day);
        const currentDate = new Date(now);
        currentDate.setHours(0, 0, 0, 0);
        dayDate.setHours(0, 0, 0, 0);

        if (dayDate > currentDate && dayData.events.length > 0) {
          nextEvent = {
            ...dayData.events[0],
            date: dayData.day
          };
          break;
        }
      }
    }

    if (nextEvent) {
      const foodText = nextEvent.food !== 'None' ? `${nextEvent.food.toUpperCase()} WILL BE PROVIDED!` : '';
      text = `UPCOMING: ${nextEvent.title.toUpperCase()} FROM ${nextEvent.start.toUpperCase()} TO ${nextEvent.end.toUpperCase()} AT ${nextEvent.location.toUpperCase()}! ${foodText}`;
    } else {
      text = 'THANKS FOR ATTENDING THE 2026 PULSE CONFERENCE';
    }

    setMarqueeText(text);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeInner}>
        <span className={styles.marqueeText}>{marqueeText}</span>
        <span className={styles.marqueeText}>{marqueeText}</span>
      </div>
    </div>
  );
}
