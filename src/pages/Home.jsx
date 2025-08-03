import { motion } from 'framer-motion';
import BinaryRain from "../components/BinaryRain";
import './Home.css'; // We'll create this CSS file

const Home = () => {
  return (
    <div className="home-container">
      <BinaryRain />
      <div className="overlay"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="content"
      >
        <h1 className="title">
          Hello, it's me <span className="name">Oween Cesar</span>
        </h1>
        <p className="subtitle">Full Stack Developer & Tech Enthusiast</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
        >
          Explore My Work
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;