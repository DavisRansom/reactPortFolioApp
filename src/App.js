import Footer from './components/Footer.js';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import davisBigBeard from './components/davisBigBeard.jpg';

function App() {
  return (
<>
<Header />

<main>

<AboutMe />
<Portfolio />


<Contact />

<Resume />
<img src={davisBigBeard} alt="Davis Big Beard" />
</main>


<Footer />
</>

  );
}

export default App;