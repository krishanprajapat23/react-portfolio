import {Header, Footer} from "./components/layout";
import { Divider } from "./components/ui";
import { HeroSection, Skills, TechStack, Portfolio, Contact } from "./components/sections";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Skills />
        <Divider/>
        <TechStack />
        <Divider/>
        <Portfolio/>
        <Divider/>
        <Contact />
      </main>
      <Footer />

    </>
  );
}

export default App;
