import Footer from './Footer';
import styles from './Home.module.css';
// import { Drawer } from 'antd';
// import {  useState } from 'react';

function Home() {
  // const [open, setOpen] = useState(false);
  // const [comp, setComp] = useState(false);

  return (
    <div className={styles.colContainer}>
      <div className={`${styles.mainContent}`}>
        <img className={styles.logo}  src={require("../assets/2025/full_logo_26.png")} alt="Pulse 2025 Logo Full" />
        <div className={styles.welcomeText}>
          Welcome to the fifteenth annual technology conference to celebrate the latest developments in the ECE and CS departments at the University of Illinois Urbana-Champaign!
        </div>
        {/* <div className={styles.registration}>
          <button 
            className={styles.btn}
            onClick={() => setOpen(true)}
          >
            Conference Registration
          </button>

          <button 
            className={styles.btn}
            onClick={() => setComp(true)}
          >
            Competitions Registration
          </button>
        </div>

        <Drawer
          title="Conference Registration"
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
          size="large"
        >
          <iframe 
          title="Conference Registration Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSd1IfvEddqxG_38g43qKcxImm6JUT1j9pjj7_YdeHc5DzfiTA/viewform?embedded=true" style={{ width: "100%", height: "100%"}} frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </Drawer>

        <Drawer
          title="Competitions Registration"
          placement="right"
          onClose={() => setComp(false)}
          open={comp}
          size="large">
          <iframe 
          title="Competitions Registration Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSd4cjoNXIL3yPvjHyZ38O7WgpnjGX5-PL2Ayg57a0xgFyFPBQ/viewform?embedded=true"  style={{ width: "100%", height: "100%"}} frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </Drawer> */}

      </div>
      {/* <button className={styles.btn} onClick={clickRegister}>Apply for our staff!</button> */}

      <Footer />
    </div>
  )
}

export default Home;