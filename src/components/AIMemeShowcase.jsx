import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import EnhancedAnimatedBackground from './EnhancedAnimatedBackground';

const AIMemeShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const aiMemes = [
    {
      id: 1,
      title: "When AI Finally Understands Context",
      description: "That moment when your chatbot actually gets the joke and responds perfectly in character. Pure magic! 🤖✨",
      emoji: "🤖",
      category: "AI Humor",
      likes: "2.4k",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Me vs My AI Assistant",
      description: "When you ask AI to write code and it produces better algorithms than you've written in years. Existential crisis mode: ON 😅",
      emoji: "💻",
      category: "Developer Life",
      likes: "3.1k",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "AI Training Data Be Like",
      description: "AI: 'I learned everything from the internet!' Also AI: Thinks a hotdog is a sandwich and pineapple belongs on pizza 🍕",
      emoji: "🧠",
      category: "Machine Learning",
      likes: "1.8k",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=200&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Prompt Engineering Mastery",
      description: "When you finally craft the perfect prompt and AI gives you exactly what you wanted on the first try. Chef's kiss! 👨‍🍳💋",
      emoji: "✨",
      category: "Prompt Engineering",
      likes: "2.7k",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "AI Art Generation",
      description: "Asked AI to draw a 'simple cat' and got a photorealistic masterpiece that would make Da Vinci weep tears of joy 🎨",
      emoji: "🎨",
      category: "AI Art",
      likes: "4.2k",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=200&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "The Singularity Approaches",
      description: "When AI starts making memes about humans making memes about AI. We've come full circle, folks! 🔄",
      emoji: "🤯",
      category: "Singularity",
      likes: "5.6k",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop&crop=center"
    }
  ];

  return (
    <section id="ai-memes" className="min-h-screen relative py-20 px-4 overflow-hidden"
             style={{
               background: 'linear-gradient(135deg, rgb(26, 26, 26) 0%, rgb(17, 17, 17) 50%, rgb(26, 26, 26) 100%)'
             }}>
      <EnhancedAnimatedBackground />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 25%, #6366f1 50%, #8b5cf6 75%, #a855f7 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)',
              filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.4))'
            }}
          >
            AI Meme Central 🤖
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ 
              textShadow: '0 0 15px rgba(255, 255, 255, 0.3)' 
            }}
          >
            Where artificial intelligence meets comedy gold. Dive into the hilarious world of AI memes, developer humor, and tech culture shenanigans!
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiMemes.map((meme, index) => (
            <MemeCard 
              key={meme.id} 
              meme={meme} 
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center items-center mt-16 gap-12 flex-wrap"
        >
          {[
            { icon: '😂', number: '10k+', text: 'Laughs Generated', color: 'rgba(234, 179, 8, 0.3)' },
            { icon: '🤖', number: '500+', text: 'AI Memes Created', color: 'rgba(168, 85, 247, 0.3)' },
            { icon: '💻', number: '2k+', text: 'Developers Entertained', color: 'rgba(59, 130, 246, 0.3)' },
            { icon: '🚀', number: '100%', text: 'Fun Guaranteed', color: 'rgba(34, 197, 94, 0.3)' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 1.0 + index * 0.1, 
                duration: 0.5 
              }}
              whileHover={{ 
                scale: 1.1,
                y: -5
              }}
              className="text-center p-6 rounded-2xl transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: `0 0 30px ${stat.color}, inset 0 0 30px rgba(255, 255, 255, 0.05)`
              }}
            >
              <div className="text-4xl mb-3" 
                   style={{ 
                     filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))' 
                   }}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-purple-300 mb-1"
                   style={{ 
                     textShadow: '0 0 15px rgba(168, 85, 247, 0.6)' 
                   }}>
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm"
                   style={{ 
                     textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' 
                   }}>
                {stat.text}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const MemeCard = ({ meme, index, hoveredIndex, setHoveredIndex }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-indigo-500/20 rounded-2xl blur-xl"
            layoutId="hoverBackground"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.3 }
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              transition: { duration: 0.2 }
            }}
          />
        )}
      </AnimatePresence>
      <motion.div
        whileHover={{ 
          y: -8,
          rotateX: 8,
          rotateY: 8,
          scale: 1.02
        }}
        className="relative rounded-2xl p-6 overflow-hidden transform-gpu"
        style={{ 
          transformStyle: "preserve-3d",
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 0 40px rgba(168, 85, 247, 0.2), inset 0 0 40px rgba(255, 255, 255, 0.05)'
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `conic-gradient(from 0deg, transparent, rgba(168, 85, 247, 0.6), rgba(236, 72, 153, 0.6), rgba(99, 102, 241, 0.6), transparent)`,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
            padding: '2px',
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
        <div className="relative z-10" style={{ transform: "translateZ(60px)" }}>
          <div className="flex items-center justify-between mb-4">
            <motion.div 
              className="text-4xl"
              whileHover={{ 
                scale: 1.3, 
                rotate: [0, -15, 15, 0],
                transition: { duration: 0.6 }
              }}
              style={{
                filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))'
              }}
            >
              {meme.emoji}
            </motion.div>
            <span className="text-purple-200 text-xs font-medium px-3 py-1 rounded-full transition-all duration-300"
                  style={{
                    background: 'rgba(168, 85, 247, 0.25)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(168, 85, 247, 0.4)',
                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
                  }}>
              {meme.category}
            </span>
          </div>
          <motion.div 
            className="relative mb-4 rounded-xl overflow-hidden h-32"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: '0 0 25px rgba(168, 85, 247, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <img 
              src={meme.image} 
              alt={meme.title}
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.9) contrast(1.1) saturate(1.2)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-2 right-2">
              <span className="text-pink-200 text-xs font-medium px-2 py-1 rounded-full flex items-center transition-all duration-300"
                    style={{
                      background: 'rgba(236, 72, 153, 0.3)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(236, 72, 153, 0.5)',
                      boxShadow: '0 0 15px rgba(236, 72, 153, 0.4)',
                      textShadow: '0 0 8px rgba(255, 255, 255, 0.8)'
                    }}>
                ❤️ {meme.likes}
              </span>
            </div>
          </motion.div>
          <motion.h3 
            className="text-lg font-bold text-white mb-3 transition-colors duration-300"
            style={{ 
              transform: "translateZ(30px)",
              textShadow: '0 0 15px rgba(255, 255, 255, 0.6)'
            }}
          >
            {meme.title}
          </motion.h3>
          <motion.p 
            className="text-gray-300 text-sm leading-relaxed"
            style={{ 
              transform: "translateZ(20px)",
              textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
            }}
          >
            {meme.description}
          </motion.p>
          <motion.div 
            className="flex gap-2 mt-4"
            style={{ transform: "translateZ(15px)" }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 text-white text-xs font-medium py-2 px-4 rounded-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(99, 102, 241, 0.4) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(168, 85, 247, 0.5)',
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
                textShadow: '0 0 8px rgba(255, 255, 255, 0.8)'
              }}
            >
              Share Meme 🚀
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white text-xs font-medium py-2 px-4 rounded-lg transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)',
                textShadow: '0 0 8px rgba(255, 255, 255, 0.8)'
              }}
            >
              😂 LOL
            </motion.button>
          </motion.div>
        </div>
        {hoveredIndex === index && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {['😂', '🤖', '💻', '✨', '🚀', '🔥', '💎', '⚡'].map((emoji, i) => (
              <motion.div
                key={i}
                className="absolute text-xl"
                initial={{ 
                  x: Math.random() * 100 + '%', 
                  y: '100%',
                  opacity: 0,
                  scale: 0.5
                }}
                animate={{ 
                  y: '-30%',
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1.2, 1, 0.3],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeOut" 
                }}
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))',
                  textShadow: '0 0 15px rgba(168, 85, 247, 0.6)'
                }}
              >
                {emoji}
              </motion.div>
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 0 10px rgba(168, 85, 247, 0.8)'
                }}
                initial={{ 
                  x: Math.random() * 100 + '%', 
                  y: Math.random() * 100 + '%',
                  opacity: 0,
                  scale: 0
                }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  rotate: [0, 180]
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default AIMemeShowcase;
