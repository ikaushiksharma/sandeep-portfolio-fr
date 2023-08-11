import Landing from './components/Landing';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-full w-full flex-auto overflow-x-hidden">
        <Landing />
      </div>
    </main>
  );
}
