import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Socials from './components/Socials';
import './index.css'

function App() {
  return (
    <div>
      <NavBar />
        <Home />
        <About />
        <Socials />
    </div>
  );
}

export default App;
