import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EnhancedAnimatedBackground from './EnhancedAnimatedBackground';

gsap.registerPlugin(ScrollTrigger);

const OurProjects = () => {
  const containerRef = useRef(null);
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);

  const projects = [
    {
      id: 1,
      title: "AI & Machine Learning",
      description: "Advanced AI solutions and ML algorithms",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&crop=center",
      category: "Artificial Intelligence"
    },
    {
      id: 2,
      title: "Blockchain Technology", 
      description: "Decentralized applications and smart contracts",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop&crop=center",
      category: "Blockchain"
    },
    {
      id: 3,
      title: "Data Science Platform",
      description: "Analytics and data visualization and tools",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
      category: "Data Science"
    },
    {
      id: 4,
      title: "IoT Solutions",
      description: "Internet of Things and smart device integration",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop&crop=center",
      category: "Internet of Things"
    }
  ];

  useEffect(() => {
    const setupCircleAnimations = () => {
      if (circle1Ref.current) {
        const circle1 = circle1Ref.current;
        const circleIn1 = circle1.querySelector('.circle-in');
        const text1 = circle1.querySelector('.circle-in p');

        circle1.addEventListener('mouseenter', () => {
          gsap.to(circleIn1, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
          });
          gsap.to(text1, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            delay: 0.3,
            ease: "power2.out"
          });
        });

        circle1.addEventListener('mouseleave', () => {
          gsap.to(circleIn1, {
            scale: 0,
            duration: 0.5,
            ease: "power2.in"
          });
          gsap.to(text1, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in"
          });
        });
      }

      if (circle2Ref.current) {
        const circle2 = circle2Ref.current;
        const circleIn2 = circle2.querySelector('.circle-in');
        const text2 = circle2.querySelector('.circle-in p');

        circle2.addEventListener('mouseenter', () => {
          gsap.to(circleIn2, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
          });
          gsap.to(text2, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            delay: 0.3,
            ease: "power2.out"
          });
        });

        circle2.addEventListener('mouseleave', () => {
          gsap.to(circleIn2, {
            scale: 0,
            duration: 0.5,
            ease: "power2.in"
          });
          gsap.to(text2, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in"
          });
        });
      }
    };

    const timer = setTimeout(() => {
      setupCircleAnimations();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="projects" className="min-h-screen relative overflow-hidden flex items-center justify-center py-20 px-4" style={{background: 'linear-gradient(135deg, rgb(26, 26, 26) 0%, rgb(35, 35, 35) 50%, rgb(26, 26, 26) 100%)'}}>
      <EnhancedAnimatedBackground />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-gray-800/10" 
           style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
           <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent drop-shadow-2xl text-center"
            style={{
              textShadow: '0 0 30px rgba(156, 163, 175, 0.5), 0 0 60px rgba(156, 163, 175, 0.3)',
              filter: 'drop-shadow(0 0 20px rgba(156, 163, 175, 0.8))'
            }}
          >
            Our Projects
          </motion.h1>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-12 sm:mb-16 rounded-full"></div>
          
          <motion.div 
            className="w-full flex justify-center"
            ref={containerRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 place-items-center">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="group cursor-pointer overflow-hidden relative rounded-2xl shadow-lg bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 w-full max-w-sm h-[350px] sm:h-[380px] md:h-[400px]"
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -8,
                    rotateY: 3,
                    rotateX: 3 
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/500x300/4a5568/ffffff?text=" + encodeURIComponent(project.category);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="absolute top-3 left-3 px-2 py-1 sm:px-3 sm:py-1 bg-blue-600/90 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      {project.category}
                    </div>
                  </div>
                
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <button className="w-full mt-3 sm:mt-4 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 transform group-hover:scale-105 text-sm sm:text-base">
                      View Project
                    </button>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
        <motion.div 
          ref={circle1Ref}
          className="hidden lg:block fixed top-1/2 left-4 xl:left-10 w-12 h-12 xl:w-16 xl:h-16 cursor-pointer z-20 text-white opacity-70 hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <svg className="w-full h-full" viewBox="0 0 91 118" fill="none">
            <path
              d="M15.2307 57.4152L15.9378 56.708L15.2307 56.0009L14.5236 56.708L15.2307 57.4152ZM34.9813 77.1658L34.2742 77.8729L35.9813 79.58L35.9813 77.1658L34.9813 77.1658ZM0.151478 72.4944L-0.555622 71.7873L-1.26273 72.4944L-0.555622 73.2015L0.151478 72.4944ZM45.29 117.633L44.5828 118.34L45.29 119.047L45.9971 118.34L45.29 117.633ZM60.3692 102.554L61.0763 103.261L61.7839 102.553L61.0758 101.846L60.3692 102.554ZM60.3685 102.553L59.6614 101.846L58.9538 102.553L59.6619 103.261L60.3685 102.553ZM90.427 72.4944L91.1341 73.2015L91.8412 72.4944L91.1341 71.7873L90.427 72.4944ZM75.3478 57.4152L76.0549 56.7081L75.3478 56.001L74.6407 56.7081L75.3478 57.4152ZM56.3065 76.4565L55.3065 76.4565L55.3065 78.8707L57.0136 77.1636L56.3065 76.4565ZM56.3065 0.120074L57.3065 0.120074L57.3065 -0.879926L56.3065 -0.879926L56.3065 0.120074ZM34.9813 0.120076L34.9813 -0.879924L33.9813 -0.879924L33.9813 0.120076L34.9813 0.120076ZM14.5236 58.1223L34.2742 77.8729L35.6884 76.4587L15.9378 56.708L14.5236 58.1223ZM0.858585 73.2015L15.9378 58.1223L14.5236 56.708L-0.555622 71.7873L0.858585 73.2015ZM45.9971 116.926L0.858585 71.7873L-0.555622 73.2015L44.5828 118.34L45.9971 116.926ZM59.662 101.846L44.5828 116.926L45.9971 118.34L61.0763 103.261L59.662 101.846ZM59.6619 103.261L59.6625 103.261L61.0758 101.846L61.0751 101.845L59.6619 103.261ZM61.0756 103.26L91.1341 73.2015L89.7199 71.7873L59.6614 101.846L61.0756 103.26ZM91.1341 71.7873L76.0549 56.7081L74.6407 58.1223L89.7199 73.2015L91.1341 71.7873ZM74.6407 56.7081L55.5994 75.7494L57.0136 77.1636L76.0549 58.1223L74.6407 56.7081ZM57.3065 76.4565L57.3065 0.120074L55.3065 0.120074L55.3065 76.4565L57.3065 76.4565ZM56.3065 -0.879926L34.9813 -0.879924L34.9813 1.12008L56.3065 1.12007L56.3065 -0.879926ZM33.9813 0.120076L33.9813 77.1658L35.9813 77.1658L35.9813 0.120076L33.9813 0.120076Z"
              fill="currentColor"
            />
          </svg>
          <div className="circle-in absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center transform scale-0 transition-all duration-500 ease-out">
            <p className="text-white font-medium text-center px-2 xl:px-4 text-xs transform scale-0 opacity-0 transition-all duration-500 delay-300">
              We are thrilled to have you on board. We hope you enjoyed the projects ❤
            </p>
          </div>
        </motion.div>
        <motion.div 
          ref={circle2Ref}
          className="hidden lg:block fixed top-1/2 right-4 xl:right-10 w-12 h-12 xl:w-16 xl:h-16 cursor-pointer z-20 text-white opacity-70 hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <svg className="w-full h-full transform -rotate-45" viewBox="0 0 91 118" fill="none">
            <path
              d="M15.2307 57.4152L15.9378 56.708L15.2307 56.0009L14.5236 56.708L15.2307 57.4152ZM34.9813 77.1658L34.2742 77.8729L35.9813 79.58L35.9813 77.1658L34.9813 77.1658ZM0.151478 72.4944L-0.555622 71.7873L-1.26273 72.4944L-0.555622 73.2015L0.151478 72.4944ZM45.29 117.633L44.5828 118.34L45.29 119.047L45.9971 118.34L45.29 117.633ZM60.3692 102.554L61.0763 103.261L61.7839 102.553L61.0758 101.846L60.3692 102.554ZM60.3685 102.553L59.6614 101.846L58.9538 102.553L59.6619 103.261L60.3685 102.553ZM90.427 72.4944L91.1341 73.2015L91.8412 72.4944L91.1341 71.7873L90.427 72.4944ZM75.3478 57.4152L76.0549 56.7081L75.3478 56.001L74.6407 56.7081L75.3478 57.4152ZM56.3065 76.4565L55.3065 76.4565L55.3065 78.8707L57.0136 77.1636L56.3065 76.4565ZM56.3065 0.120074L57.3065 0.120074L57.3065 -0.879926L56.3065 -0.879926L56.3065 0.120074ZM34.9813 0.120076L34.9813 -0.879924L33.9813 -0.879924L33.9813 0.120076L34.9813 0.120076ZM14.5236 58.1223L34.2742 77.8729L35.6884 76.4587L15.9378 56.708L14.5236 58.1223ZM0.858585 73.2015L15.9378 58.1223L14.5236 56.708L-0.555622 71.7873L0.858585 73.2015ZM45.9971 116.926L0.858585 71.7873L-0.555622 73.2015L44.5828 118.34L45.9971 116.926ZM59.662 101.846L44.5828 116.926L45.9971 118.34L61.0763 103.261L59.662 101.846ZM59.6619 103.261L59.6625 103.261L61.0758 101.846L61.0751 101.845L59.6619 103.261ZM61.0756 103.26L91.1341 73.2015L89.7199 71.7873L59.6614 101.846L61.0756 103.26ZM91.1341 71.7873L76.0549 56.7081L74.6407 58.1223L89.7199 73.2015L91.1341 71.7873ZM74.6407 56.7081L55.5994 75.7494L57.0136 77.1636L76.0549 58.1223L74.6407 56.7081ZM57.3065 76.4565L57.3065 0.120074L55.3065 0.120074L55.3065 76.4565L57.3065 76.4565ZM56.3065 -0.879926L34.9813 -0.879924L34.9813 1.12008L56.3065 1.12007L56.3065 -0.879926ZM33.9813 0.120076L33.9813 77.1658L35.9813 77.1658L35.9813 0.120076L33.9813 0.120076Z"
              fill="currentColor"
            />
          </svg>
          <div className="circle-in absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center transform scale-0 transition-all duration-500 ease-out">
            <p className="text-white font-medium text-center px-2 xl:px-4 text-xs transform scale-0 opacity-0 transition-all duration-500 delay-300">
              We are thrilled to have you on board. We hope you enjoyed the projects
            </p>
          </div>
        </motion.div>
    </section>
  );
};

export default OurProjects;
