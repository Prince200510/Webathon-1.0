import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ThreeDMarquee = ({ images, className = '' }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <div className={`mx-auto block h-[600px] overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 ${className}`}>
      <div className="flex size-full items-center justify-center relative">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
          <div
            style={{
              transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
              transformStyle: "preserve-3d"
            }}
            className="relative top-96 right-[50%] grid size-full origin-top-left grid-cols-4 gap-8"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 12 : 16,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-8"
              >
                <div 
                  className="absolute -left-4 top-[-80px] h-[calc(100%+160px)] w-[1px] bg-gradient-to-b from-transparent via-purple-400/40 to-transparent"
                />
                
                {subarray.map((image, imageIndex) => (
                  <div 
                    className="relative group" 
                    key={imageIndex + image}
                    onMouseEnter={() => setHoveredIndex(colIndex * chunkSize + imageIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div 
                      className="absolute -top-4 left-[-20px] w-[calc(100%+40px)] h-[1px] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
                    />
                    
                    <motion.div
                      whileHover={{
                        y: -15,
                        rotateX: 10,
                        rotateY: 5,
                        scale: 1.05
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      className="relative overflow-hidden rounded-lg"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <img
                        src={image}
                        alt={`Gallery image ${imageIndex + 1}`}
                        className="aspect-[970/700] w-full rounded-lg object-cover ring-2 ring-purple-500/20 shadow-2xl transition-all duration-300"
                        width={970}
                        height={700}
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-indigo-900/40 rounded-lg flex items-end p-4"
                      >
                        <div className="text-white">
                          <p className="text-sm font-medium opacity-90">
                            Image {colIndex * chunkSize + imageIndex + 1}
                          </p>
                        </div>
                      </motion.div>
                      {hoveredIndex === colIndex * chunkSize + imageIndex && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl blur-xl -z-10"
                        />
                      )}
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeDMarquee;
