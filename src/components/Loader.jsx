import { useState, useEffect } from 'react';

const Loader = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoading(false);
            if (onComplete) {
              onComplete();
            }
          }, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 60); 

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col justify-center items-center p-8 md:p-16">
      <div id="loader">
        <div className="line">
          <div id="line1-part1">
            <h5 className="text-white">{progress.toString().padStart(2, '0')}</h5>
            <h6 className="text-white">- 100</h6>
          </div>
          <h1 className="text-white">Your</h1>
        </div>
        <div className="line">
          <h1 className="text-white">Web Experiences</h1>
        </div>
        <div className="line">
          <h1 className="text-white">is loading right</h1>
          <h2 className="text-white">Now</h2>
        </div>
      </div>
    </div>
  );
};

export default Loader;

