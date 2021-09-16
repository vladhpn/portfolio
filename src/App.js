import Container from './components/Container';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
function App() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
      </Container>
      <AboutMe />
      <Container>
        <Skills />
        <Portfolio />
        <Contacts />
      </Container>
    </>
  );
}

export default App;
