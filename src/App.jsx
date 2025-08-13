import { useState } from 'react';
import BinaryRain from './components/BinaryRain';
import Projects from './components/Projects';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch(activeComponent) {
      case 'about':
        return (
          <div className="component-transition active">
            <About />
          </div>
        )
      case 'contact':
        return (
          <div className="component-transition active">
            <Contact />
          </div>
        );
        
      case 'projects':
        return (
        <div className="component-transition active">
          <Projects />
        </div>
        );
      // Add cases for other components as needed
      default:
        return null;
    }
  }

  return (
    <div className="app-container">
      <BinaryRain setActiveComponent={setActiveComponent} />
      {renderComponent()}
    </div>
  );
}

export default App;