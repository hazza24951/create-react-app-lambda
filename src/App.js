import { ThemeProvider } from 'styled-components';
import Globalstyles from './styles/GlobalStyles';
import { dark, light } from "./styles/Themes";


import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Roadmap from './components/sections/Roadmap';
import Team from './components/sections/Team';
import Faq from './components/sections/Faq'
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <>
    <Globalstyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Team />
        <Faq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
