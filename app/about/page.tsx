import styles from "./page.module.css";

export default function Corporate() {
  return (
    <div className={styles.container}>
      <h1>Sponsorship Packages</h1>

      <h1>Pulse 2027 Conference Pamphlet</h1>
      <p>February 15-21, 2027</p>
      <iframe 
        title="Pulse 2027 Conference Sponsorship Pamphlet"
        src="https://drive.google.com/file/d/176qHCqr1GPiVWBKeNI5S0G8i2K3Xk8ph/preview"
        width="100%" 
        height="980px"
        className={styles.iframe}
      >
      </iframe>
      <a href="https://drive.google.com/file/d/176qHCqr1GPiVWBKeNI5S0G8i2K3Xk8ph/preview" target="_blank" rel="noopener noreferrer">
        Open Conference Sponsorship Package
      </a>
      
      <h1>Hardware Hackathon Pamphlet</h1>
      <p>April 2027 - Co-hosted by Pulse</p>
      <iframe 
        title="April 2027 Hardware Hackathon Sponsorship Package"
        src="https://drive.google.com/file/d/1t4ZGiGgc5TQUDRvUNInxw_WY2kHb_Ys6/preview"
        allow="autoplay"
        className={styles.iframe}
      >  
      </iframe>
      <a href="https://drive.google.com/file/d/1t4ZGiGgc5TQUDRvUNInxw_WY2kHb_Ys6/preview" target="_blank" rel="noopener noreferrer">
        Open Hackathon Sponsorship Package
      </a>
    </div>
  )
}
