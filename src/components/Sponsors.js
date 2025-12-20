import { useState } from 'react';
import styles from './Sponsors.module.css';

function Sponsors() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const sponsors = [
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
      description: "AMD is the high performance and adaptive computing leader, powering the products and services that help solve the world’s most important challenges. Their technologies advance the future of the data center, embedded, gaming and PC markets. Founded in 1969 as a Silicon Valley start-up, the AMD journey began with dozens of employees who were passionate about creating leading-edge semiconductor products. AMD has grown into a global company setting the standard for modern computing, with many important industry firsts and major technological achievements along the way."
    }
  ];

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
            <img
              src={require(`../assets/2026/sponsor-${index + 1}.png`)}
              alt={sponsor.title}
              className={styles.sponsorImage}
            />
            {hoveredIndex === index && (
              <div className={styles.descriptionOverlay}>
                {/* <h3>{sponsor.title}</h3> */}
                <p>{sponsor.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
