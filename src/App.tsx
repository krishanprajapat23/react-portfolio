import {Header, Footer} from "./components/layout";
import { Divider } from "./components/ui";
import { HeroSection, Skills, TechStack, Portfolio, Contact } from "./components/sections";

import { LazyMotion, domAnimation } from "motion/react"


function App() {
  return (
    <LazyMotion features={domAnimation}>
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
    </LazyMotion>
  );
}

export default App;
