import About from './components/About/About';
import Landing from './components/Landing/Landing';
import Skills from './components/Skills/Skills';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-full w-full flex-auto overflow-x-hidden">
        <Landing />
        <About />
        <Skills />
      </div>
    </main>
  );
}
