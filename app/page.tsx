import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-full w-full flex-auto overflow-x-hidden">
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
