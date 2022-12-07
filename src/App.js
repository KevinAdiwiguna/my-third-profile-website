import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/Navbar/Navbar";
import { Team } from "./Components/Team/Team";
import { About } from "./Components/About/About"
function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About />
      <Team />
    </div>
  );
}

export default App;
