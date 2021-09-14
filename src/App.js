import Container from './components/Container';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
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
      </Container>
    </>
  );
}

export default App;
