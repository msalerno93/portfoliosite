import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Socials from './components/Socials';
import './index.css'

function App() {
  return (
    <div>
      <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Socials />
    </div>
  );
}

export default App;
