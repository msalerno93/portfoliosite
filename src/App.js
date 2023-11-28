import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Socials from './components/Socials';
import Technology from './components/Technology';
import './index.css'

function App() {
  return (
    <div>
      <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Technology />
        <Contact />

        <Socials />
    </div>
  );
}

export default App;
