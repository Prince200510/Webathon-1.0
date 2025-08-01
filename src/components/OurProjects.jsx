import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import project1 from '../assets/images/project1.jpeg';
import project2 from '../assets/images/project2.jpeg';
import project3 from '../assets/images/project3.jpeg';
import project4 from '../assets/images/project4.jpeg';
import EnhancedAnimatedBackground from './EnhancedAnimatedBackground';

gsap.registerPlugin(ScrollTrigger);

const OurProjects = () => {
  const containerRef = useRef(null);
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);

  useEffect(() => {
    const initSheryEffect = () => {
      if (window.Shery) {
        window.Shery.imageEffect(".image-div", {
          style: 5,
          gooey: true,
          config: {
            "a": {"value": 2, "range": [0, 30]},
            "b": {"value": 0.75, "range": [-1, 1]},
            "zindex": {"value": -9996999, "range": [-9999999, 9999999]},
            "aspect": {"value": 0.7241195453907675},
            "gooey": {"value": true},
            "infiniteGooey": {"value": false},
            "growSize": {"value": 4, "range": [1, 15]},
            "durationOut": {"value": 1, "range": [0.1, 5]},
            "durationIn": {"value": 1.5, "range": [0.1, 5]},
            "displaceAmount": {"value": 0.5},
            "masker": {"value": true},
            "maskVal": {"value": 1.23, "range": [1, 5]},
            "scrollType": {"value": 0},
            "geoVertex": {"range": [1, 64], "value": 1},
            "noEffectGooey": {"value": true},
            "onMouse": {"value": 0},
            "noise_speed": {"value": 0.5, "range": [0, 10]},
            "metaball": {"value": 0.33, "range": [0, 2]},
            "discard_threshold": {"value": 0.5, "range": [0, 1]},
            "antialias_threshold": {"value": 0.01, "range": [0, 0.1]},
            "noise_height": {"value": 0.5, "range": [0, 2]},
            "noise_scale": {"value": 10, "range": [0, 100]}
          }
        });
      }
    };
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

    const setupImageAnimations = () => {
      const images = containerRef.current?.querySelectorAll('.image-div img');
      images?.forEach((img, index) => {
        const parent = img.parentElement;
        
        parent.addEventListener('mouseenter', () => {
          gsap.to(img, {
            scale: 1.15,
            rotation: index % 2 === 0 ? 3 : -3,
            duration: 0.6,
            ease: "power2.out"
          });
        });

        parent.addEventListener('mouseleave', () => {
          gsap.to(img, {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "power2.out"
          });
        });
      });
    };

    // Initialize animations with delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initSheryEffect();
      setupCircleAnimations();
      setupImageAnimations();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="projects" className="min-h-screen relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgb(26, 26, 26) 0%, rgb(35, 35, 35) 50%, rgb(26, 26, 26) 100%)'}}>
      <EnhancedAnimatedBackground />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-gray-800/10" 
           style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent drop-shadow-2xl"
        style={{
          textShadow: '0 0 30px rgba(156, 163, 175, 0.5), 0 0 60px rgba(156, 163, 175, 0.3)',
          filter: 'drop-shadow(0 0 20px rgba(156, 163, 175, 0.8))'
        }}
      >
        Our Projects
      </motion.h1>
      <div className="underline bg-gradient-to-r from-gray-400 to-gray-500"></div>
      <motion.div 
        id="image-div-container"
        ref={containerRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div 
          className="image-div group cursor-pointer overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img 
            src={project1} 
            alt="Web Development Project" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Web Development</h3>
              <p className="text-sm text-gray-300">Modern responsive websites</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="image-div group cursor-pointer overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <img 
            src={project2} 
            alt="Mobile App Project" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Mobile Apps</h3>
              <p className="text-sm text-gray-300">iOS & Android solutions</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          ref={circle1Ref}
          className="page3-circle1 cursor-pointer"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <svg className="button__arrow" viewBox="0 0 91 118" fill="none">
            <path
              d="M15.2307 57.4152L15.9378 56.708L15.2307 56.0009L14.5236 56.708L15.2307 57.4152ZM34.9813 77.1658L34.2742 77.8729L35.9813 79.58L35.9813 77.1658L34.9813 77.1658ZM0.151478 72.4944L-0.555622 71.7873L-1.26273 72.4944L-0.555622 73.2015L0.151478 72.4944ZM45.29 117.633L44.5828 118.34L45.29 119.047L45.9971 118.34L45.29 117.633ZM60.3692 102.554L61.0763 103.261L61.7839 102.553L61.0758 101.846L60.3692 102.554ZM60.3685 102.553L59.6614 101.846L58.9538 102.553L59.6619 103.261L60.3685 102.553ZM90.427 72.4944L91.1341 73.2015L91.8412 72.4944L91.1341 71.7873L90.427 72.4944ZM75.3478 57.4152L76.0549 56.7081L75.3478 56.001L74.6407 56.7081L75.3478 57.4152ZM56.3065 76.4565L55.3065 76.4565L55.3065 78.8707L57.0136 77.1636L56.3065 76.4565ZM56.3065 0.120074L57.3065 0.120074L57.3065 -0.879926L56.3065 -0.879926L56.3065 0.120074ZM34.9813 0.120076L34.9813 -0.879924L33.9813 -0.879924L33.9813 0.120076L34.9813 0.120076ZM14.5236 58.1223L34.2742 77.8729L35.6884 76.4587L15.9378 56.708L14.5236 58.1223ZM0.858585 73.2015L15.9378 58.1223L14.5236 56.708L-0.555622 71.7873L0.858585 73.2015ZM45.9971 116.926L0.858585 71.7873L-0.555622 73.2015L44.5828 118.34L45.9971 116.926ZM59.662 101.846L44.5828 116.926L45.9971 118.34L61.0763 103.261L59.662 101.846ZM59.6619 103.261L59.6625 103.261L61.0758 101.846L61.0751 101.845L59.6619 103.261ZM61.0756 103.26L91.1341 73.2015L89.7199 71.7873L59.6614 101.846L61.0756 103.26ZM91.1341 71.7873L76.0549 56.7081L74.6407 58.1223L89.7199 73.2015L91.1341 71.7873ZM74.6407 56.7081L55.5994 75.7494L57.0136 77.1636L76.0549 58.1223L74.6407 56.7081ZM57.3065 76.4565L57.3065 0.120074L55.3065 0.120074L55.3065 76.4565L57.3065 76.4565ZM56.3065 -0.879926L34.9813 -0.879924L34.9813 1.12008L56.3065 1.12007L56.3065 -0.879926ZM33.9813 0.120076L33.9813 77.1658L35.9813 77.1658L35.9813 0.120076L33.9813 0.120076Z"
              fill="currentColor"
            />
          </svg>
          <div className="circle-in absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center transform scale-0 transition-all duration-500 ease-out">
            <p className="text-white font-medium text-center px-4 transform scale-0 opacity-0 transition-all duration-500 delay-300">
              We are thrilled to have you on board. We hope you enjoyed the projects ❤
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          ref={circle2Ref}
          className="page3-circle2 cursor-pointer"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <svg className="button__arrow transform -rotate-45" viewBox="0 0 91 118" fill="none">
            <path
              d="M15.2307 57.4152L15.9378 56.708L15.2307 56.0009L14.5236 56.708L15.2307 57.4152ZM34.9813 77.1658L34.2742 77.8729L35.9813 79.58L35.9813 77.1658L34.9813 77.1658ZM0.151478 72.4944L-0.555622 71.7873L-1.26273 72.4944L-0.555622 73.2015L0.151478 72.4944ZM45.29 117.633L44.5828 118.34L45.29 119.047L45.9971 118.34L45.29 117.633ZM60.3692 102.554L61.0763 103.261L61.7839 102.553L61.0758 101.846L60.3692 102.554ZM60.3685 102.553L59.6614 101.846L58.9538 102.553L59.6619 103.261L60.3685 102.553ZM90.427 72.4944L91.1341 73.2015L91.8412 72.4944L91.1341 71.7873L90.427 72.4944ZM75.3478 57.4152L76.0549 56.7081L75.3478 56.001L74.6407 56.7081L75.3478 57.4152ZM56.3065 76.4565L55.3065 76.4565L55.3065 78.8707L57.0136 77.1636L56.3065 76.4565ZM56.3065 0.120074L57.3065 0.120074L57.3065 -0.879926L56.3065 -0.879926L56.3065 0.120074ZM34.9813 0.120076L34.9813 -0.879924L33.9813 -0.879924L33.9813 0.120076L34.9813 0.120076ZM14.5236 58.1223L34.2742 77.8729L35.6884 76.4587L15.9378 56.708L14.5236 58.1223ZM0.858585 73.2015L15.9378 58.1223L14.5236 56.708L-0.555622 71.7873L0.858585 73.2015ZM45.9971 116.926L0.858585 71.7873L-0.555622 73.2015L44.5828 118.34L45.9971 116.926ZM59.662 101.846L44.5828 116.926L45.9971 118.34L61.0763 103.261L59.662 101.846ZM59.6619 103.261L59.6625 103.261L61.0758 101.846L61.0751 101.845L59.6619 103.261ZM61.0756 103.26L91.1341 73.2015L89.7199 71.7873L59.6614 101.846L61.0756 103.26ZM91.1341 71.7873L76.0549 56.7081L74.6407 58.1223L89.7199 73.2015L91.1341 71.7873ZM74.6407 56.7081L55.5994 75.7494L57.0136 77.1636L76.0549 58.1223L74.6407 56.7081ZM57.3065 76.4565L57.3065 0.120074L55.3065 0.120074L55.3065 76.4565L57.3065 76.4565ZM56.3065 -0.879926L34.9813 -0.879924L34.9813 1.12008L56.3065 1.12007L56.3065 -0.879926ZM33.9813 0.120076L33.9813 77.1658L35.9813 77.1658L35.9813 0.120076L33.9813 0.120076Z"
              fill="currentColor"
            />
          </svg>
          <div className="circle-in absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full flex items-center justify-center transform scale-0 transition-all duration-500 ease-out">
            <p className="text-white font-medium text-center px-4 transform scale-0 opacity-0 transition-all duration-500 delay-300">
              We are thrilled to have you on board. We hope you enjoyed the projects
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="image-div group cursor-pointer overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <img 
            src={project3} 
            alt="E-Commerce Project" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-700/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">E-Commerce</h3>
              <p className="text-sm text-gray-300">Online store solutions</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="image-div group cursor-pointer overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <img 
            src={project4} 
            alt="AI Platform Project" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">AI Platform</h3>
              <p className="text-sm text-gray-300">Machine learning solutions</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurProjects;
