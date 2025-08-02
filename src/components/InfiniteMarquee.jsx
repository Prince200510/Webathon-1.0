import { motion } from 'framer-motion';
import { useState } from 'react';

const InfiniteMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const marqueeImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=250&fit=crop",
      title: "Collection V1",
      category: "Landscape",
      description: "Breathtaking natural vistas",
      color: "from-purple-400 to-pink-400"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop",
      title: "Collection V2",
      category: "Office",
      description: "Modern workspace designs",
      color: "from-blue-400 to-purple-400"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop",
      title: "Collection V3",
      category: "Workspace",
      description: "Creative work environments",
      color: "from-pink-400 to-red-400"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop",
      title: "Collection V4",
      category: "Tech",
      description: "Cutting-edge technology",
      color: "from-green-400 to-blue-400"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      title: "Collection V5",
      category: "Data",
      description: "Information visualization",
      color: "from-yellow-400 to-orange-400"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
      title: "Collection V6",
      category: "AI",
      description: "Artificial intelligence future",
      color: "from-cyan-400 to-blue-400"
    }
  ];

  const duplicatedImages = [...marqueeImages, ...marqueeImages, ...marqueeImages];

  return (
    <section id="infinite-marquee" className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="marqueeGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#marqueeGrid)" />
          </svg>
        </div>
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
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
      <div className="relative z-10">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #e879f9, #a855f7, #3b82f6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
            }}
          >
            Infinite Marquee
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 120 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-purple-300 mt-4 max-w-2xl mx-auto"
          >
            Experience our continuous scroll of curated collections with hover interactions
          </motion.p>
        </div>
        <div className="relative">
          <motion.div
            className="flex gap-8"
            animate={{
              x: isPaused ? "0%" : "-33.33%"
            }}
            transition={{
              duration: isPaused ? 0 : 30,
              repeat: isPaused ? 0 : Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            style={{ width: "300%" }}
          >
            {duplicatedImages.map((image, index) => (
              <motion.div
                key={`${image.id}-${index}`}
                className="relative flex-shrink-0 w-80 h-64 cursor-pointer group"
                onHoverStart={() => {
                  setIsPaused(true);
                  setHoveredItem(image);
                }}
                onHoverEnd={() => {
                  setIsPaused(false);
                  setHoveredItem(null);
                }}
                whileHover={{
                  scale: 1.08,
                  y: -15,
                  rotateY: 5
                }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                <div className="relative h-full rounded-2xl overflow-hidden backdrop-blur-lg border border-purple-500/20"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139, 69, 197, 0.1), rgba(59, 130, 246, 0.1))',
                  }}>
                  <div className="relative h-3/4 overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${image.color} text-white shadow-lg`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.05, type: "spring" }}
                    >
                      {image.category}
                    </motion.div>
                  </div>
                  <div className="relative p-4 h-1/4 flex flex-col justify-center">
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-purple-300 transition-colors">
                      {image.title}
                    </h3>
                    <p className="text-purple-300/80 text-sm">
                      {image.description}
                    </p>
                  </div>
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${image.color} opacity-0 rounded-2xl blur-xl`}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-transparent"
                    style={{
                      background: `linear-gradient(45deg, transparent, rgba(168, 85, 247, 0.3), transparent) border-box`,
                      WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude'
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-900 via-purple-900/80 to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-900 via-purple-900/80 to-transparent pointer-events-none z-10" />
        </div>
        {hoveredItem && (
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="inline-block px-6 py-3 rounded-2xl backdrop-blur-lg border border-purple-500/30"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 69, 197, 0.2), rgba(59, 130, 246, 0.2))',
              }}>
              <p className="text-white font-medium">
                Currently viewing: <span className="text-purple-300">{hoveredItem.title}</span>
              </p>
              <p className="text-purple-400 text-sm mt-1">{hoveredItem.description}</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default InfiniteMarquee;
