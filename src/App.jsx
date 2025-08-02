import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import PolecatNavbar from './components/PolecatNavbar';
import HeroSection from './components/HeroSection';
import OurProjects from './components/OurProjects';
import ThreeDMarqueeDemo from './components/ThreeDMarqueeDemo';
import FeaturedProducts from './components/FeaturedProducts';
import AIMemeShowcase from './components/AIMemeShowcase';
import AICodeGallery from './components/AICodeGallery';
import InfiniteMarquee from './components/InfiniteMarquee';
import OurTeamSection from './components/OurTeamSection';
import Footer from './components/Footer';
import EnhancedAnimatedBackground from './components/EnhancedAnimatedBackground';
import Purple_model from './components/Purple_model';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setLoading(true);
    setShowContent(false);
  }, []);

  const handleLoaderComplete = () => {
    console.log('Loader completed!');
    setLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };
  if (loading) {
    return <Loader onComplete={handleLoaderComplete} />;
  }
  if (!showContent) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading complete...</div>
      </div>
    );
  }

  return (
    <div className="App relative">
      <EnhancedAnimatedBackground />
      <div className="relative z-10">
        <PolecatNavbar />
        <main className="relative">
          <HeroSection />
          <OurProjects />
          <ThreeDMarqueeDemo />
          <FeaturedProducts />
          <AIMemeShowcase />
          <AICodeGallery />
          <InfiniteMarquee />
          <OurTeamSection />
          <Purple_model />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
