import HeroCover from './components/HeroCover';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <HeroCover />
      <main className="relative z-0">
        <Features />
        <Workflow />
      </main>
      <Footer />
    </div>
  );
}

export default App;
