import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/Navbar/Navbar";
import { Team } from "./Components/Team/Team";
import { About } from "./Components/About/About"
import { Skills } from "./Components/Skills/Skills";
import { Contact } from "./Components/Contact/Contact";
function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About />
      <Team />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
