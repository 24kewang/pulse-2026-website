import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./components/Home";
// import Events from "./components/Events";
import Corporate from "./components/Corporate";
import OurTeam from "./components/OurTeam";
import Sponsors from "./components/Sponsors";
import ContactUs from "./components/ContactUs";
import './App.css';

import { AnimatePresence, motion } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
        <div className="container">
            <Navbar />
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={
                <motion.div
                  initial={{ opacity: 0}}
                  animate={{ opacity: 1}}
                  exit={{ opacity: 0}}
                  transition={{ duration: 0.3 }}
                >
                  <Home />
                </motion.div>
              } />

              <Route path='/about' element={
                <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{ duration: 0.3 }}
              >
                <Corporate />
                </motion.div>
              } />
              {/* <Route path='/events' element={
                <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{ duration: 0.3 }}
              >
                <Events />
                </motion.div>
                } /> */}
              <Route path="/our-team" element={
                <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{ duration: 0.3 }}
              >
                <OurTeam />
                </motion.div>} />
              <Route path="/sponsors" element={
                <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{ duration: 0.3 }}
              >
                <Sponsors />
                </motion.div>} />
              <Route path="/contact-us" element={
                <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{ duration: 0.3 }}
              >
                <ContactUs />
                </motion.div>
                } />
            </Routes>
        </div>
      </AnimatePresence>
  )
}

function App() {
  

  return (
    <Router >
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
