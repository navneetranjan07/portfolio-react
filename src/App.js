import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Heroo from './components/Heroo';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
    <div>
      <Navbar/>
      <Heroo/>
      <Skills/>
      <About/>
      <Work/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
