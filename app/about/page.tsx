import styles from "./page.module.css";

export default function Corporate() {
  return (
    <div className={styles.container}>
      <h1>Information for corporate</h1>

      <h1>Pamphlet</h1>
      <iframe 
        title="Pamphlet"
        src="https://drive.google.com/file/d/10bZv_SIzxny86-qV1fnB0BxYDMy78eUA/preview" 
        width="100%" 
        height="980px"
        className={styles.iframe}
      >
      </iframe>
      
      <h1>Corporate Package</h1>
      <iframe 
        title="Corporate Package"
        src="https://drive.google.com/file/d/1jNCZMIZg4zc2ji_2DBrGRShttYwOSPZ8/preview" 
        allow="autoplay"
        className={styles.iframe}
      >  
      </iframe>
    </div>
  )
}
