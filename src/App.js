import './App.css';
import SkillCert from './sections/SkillCert';
import Nav from './components/Nav';
import WelcomePage from './sections/WelcomePage';
import Experience from './sections/Experience';
import { useEffect, useState } from 'react';

function App() {
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 500) setOffset(1);
      if (window.pageYOffset > 500 && window.pageYOffset < 1000) setOffset(2);
      if (window.pageYOffset > 1000) setOffset(3);
    };
  }, []);

  return (
    <div className="App">
     <Nav offset={offset}  />
     <WelcomePage />
     <SkillCert />
     <Experience />
    </div>
  );
}

export default App;
