import styles from "./Corporate.module.css";

function Corporate() {
  return (
    <div className={styles.container}>
      <h1>Information for corporate</h1>

      <h1>Pamphlet</h1>
      <iframe 
      title="Pamphlet"
      src="https://drive.google.com/file/d/10bZv_SIzxny86-qV1fnB0BxYDMy78eUA/preview" width="100%" height="980px">
      </iframe>
      
      <h1>Corporate Package</h1>
      <iframe 
        title="Corporate Package"
        src="https://drive.google.com/file/d/1jNCZMIZg4zc2ji_2DBrGRShttYwOSPZ8/preview" allow="autoplay">  
      </iframe>

     
      
      {/* <h2>TBA</h2> */}
      {/* <div>
        <div className={styles.col}>
          <div className={styles.row}>
            <img className={styles.logo} src={require("../assets/2023/AMD.png")} alt="AMD Logo" />
          </div>
          <div className={styles.row}>
            <img className={styles.logo} src={require("../assets/2023/Capital One white.png")} alt="Capital One Logo" />
            <img className={styles.logo} src={require("../assets/2023/Texas Instruments white.png")} alt="Texas Instruments Logo" />
          </div>
        </div>
      </div> */}
      {/* <Footer className={styles.footer} /> */}
    </div>
  )
}

export default Corporate