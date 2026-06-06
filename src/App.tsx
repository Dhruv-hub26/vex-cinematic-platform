import { AmbientScene } from './components/AmbientScene';
import { CinematicVeil } from './components/CinematicVeil';
import { HeroVideoLayer } from './components/HeroVideoLayer';
import { Navbar } from './components/Navbar';
import { Advisory } from './sections/Advisory';
import { Building } from './sections/Building';
import { Home } from './sections/Home';
import { Investing } from './sections/Investing';
import { Story } from './sections/Story';

function App() {
  return (
    <div className="relative w-full text-white font-sans antialiased">
      <AmbientScene />
      <HeroVideoLayer />
      <CinematicVeil />
      <Navbar />
      <Home />
      <main className="relative z-10">
        <Story />
        <Investing />
        <Building />
        <Advisory />
      </main>
    </div>
  );
}

export default App;
