import { Navbar }     from "./components/Navbar/Navbar";
import { Hero }       from "./components/Hero/Hero";
import { Projects }   from "./components/Projects/Projects";
import { Experience } from "./components/Experience/Experience";
import { About }      from "./components/About/About";
import { Contact }    from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
      </main>
      <Contact />
    </>
  );
}

export default App;
