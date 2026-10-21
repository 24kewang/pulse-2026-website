import Link from 'next/link';
import styles from './page.module.css';

// Keep this page static until the sponsor API and current sponsors are confirmed.
// See lib/sponsorData.ts for the future fetch and rendering example.
export default function Sponsors() {
  return (
    <main className={styles.container}>
      <h1>Our Sponsors</h1>
      <section className={styles.placeholder} aria-labelledby="coming-soon">
        <p className={styles.eyebrow}>Supporting the next wave of innovation</p>
        <h2 id="coming-soon">Coming Soon</h2>
        <p className={styles.description}>
          Meet the partners helping bring Pulse to life. Check back for our
          sponsor announcements!
        </p>
        <Link href="/contact-us" className={styles.contactLink}>
          Interested in sponsoring Pulse? Contact us
        </Link>
      </section>
    </main>
  );
}

/*
Preserved sponsor card implementation for future integration (inactive).
Move this renderer into a separate client component before enabling it, and
uncomment the preserved styles in page.module.css. Pass confirmed current
sponsors from the server-side API; never use lastYearsSponsors as a fallback.
The positional 2026 image paths below belong ONLY to the historical example:
replace them with confirmed current logo sources before publishing cards.
The original markup, hover behavior, and responsive card styles are retained.

'use client'

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import type { Sponsor } from '@/lib/sponsorData';

export default function SponsorCards({ sponsors }: { sponsors: Sponsor[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <h1>Our Sponsors</h1>
      <div className={styles.sponsorGrid}>
        {sponsors.map((sponsor, index) => (
          <div
            key={sponsor.id}
            className={`${styles.sponsorCard} ${styles[`delay${index}`]}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={`/assets/2026/sponsor-${index + 1}.png`}
              alt={sponsor.title}
              className={styles.sponsorImage}
              width={200}
              height={200}
            />
            {hoveredIndex === index && (
              <div className={styles.descriptionOverlay}>
                <p>{sponsor.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

Historical 2026 data for local card previews only (not current sponsors):
const lastYearsSponsors: Sponsor[] = [
    {
      id: 1,
      title: "Astera Labs",
      description: "Astera Labs is a global leader in providing purpose-built connectivity solutions specifically designed to tackle data, memory, and networking bottlenecks in rack-scale AI infrastructure. The company utilizes a pioneering software-defined architecture and maintains trusted relationships with hyperscalers to deliver scalable semiconductor-based solutions including PCIe, CXL, and Ethernet technologies."
    },
    {
      id: 2,
      title: "Texas Instruments",
      description: "Texas Instruments is a global semiconductor company that designs, manufactures and sells analog and embedded processing chips. Their approximately 80,000 products help over 100,000 customers efficiently manage power, accurately sense and transmit data and provide the core control or processing in their designs, going into markets such as industrial, automotive, personal electronics, enterprise systems and communications equipment."
    },
    {
      id: 3,
      title: "AMD",
      description: "AMD is the high performance and adaptive computing leader, powering the products and services that help solve the world's most important challenges. Their technologies advance the future of the data center, embedded, gaming and PC markets. Founded in 1969 as a Silicon Valley start-up, the AMD journey began with dozens of employees who were passionate about creating leading-edge semiconductor products. AMD has grown into a global company setting the standard for modern computing, with many important industry firsts and major technological achievements along the way."
    }
  ];

// Local preview only: <SponsorCards sponsors={lastYearsSponsors} />
*/
