import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import EnhancedAnimatedBackground from './EnhancedAnimatedBackground';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      title: "AI Chatbot Development",
      description: "Build intelligent conversational AI that understands context, learns from interactions, and provides human-like responses.",
      category: "AI Solutions",
      price: "$2,999",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center",
      features: ["Natural Language Processing", "Multi-Language Support", "24/7 Availability", "Custom Training"]
    },
    {
      id: 2,
      title: "Computer Vision AI",
      description: "Advanced image recognition and analysis powered by deep learning for automated visual intelligence.",
      category: "AI Solutions",
      price: "$3,499",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop&crop=center",
      features: ["Object Detection", "Facial Recognition", "Real-time Analysis", "Edge Computing"]
    },
    {
      id: 3,
      title: "Predictive Analytics AI",
      description: "Harness machine learning to predict trends, forecast outcomes, and make data-driven decisions with confidence.",
      category: "AI Solutions",
      price: "$2,799",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      features: ["Data Mining", "Pattern Recognition", "Risk Assessment", "Business Intelligence"]
    },
    {
      id: 4,
      title: "Voice AI Assistant",
      description: "Create custom voice-powered AI assistants that understand speech, process commands, and respond naturally.",
      category: "AI Solutions",
      price: "$2,299",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=300&fit=crop&crop=center",
      features: ["Speech Recognition", "Voice Synthesis", "Smart Commands", "IoT Integration"]
    },
    {
      id: 5,
      title: "AI Content Generator",
      description: "Generate high-quality content, articles, and creative text using advanced language models and AI algorithms.",
      category: "AI Solutions",
      price: "$1,899",
      image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=400&h=300&fit=crop&crop=center",
      features: ["Text Generation", "Creative Writing", "SEO Optimization", "Multi-format Output"]
    },
    {
      id: 6,
      title: "AI Automation Suite",
      description: "Complete workflow automation powered by AI to streamline processes, reduce costs, and increase efficiency.",
      category: "AI Solutions",
      price: "$4,199",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=center",
      features: ["Process Automation", "Smart Workflows", "API Integration", "Custom Dashboards"]
    }
  ];

  return (
    <section id="featured-products" className="min-h-screen relative py-20 px-4 overflow-hidden"
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
            AI Services
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
            Unlock the power of artificial intelligence with our cutting-edge AI solutions. From chatbots to computer vision, we deliver intelligent systems that transform your business and drive innovation.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
            className="text-white font-semibold px-12 py-4 rounded-full text-lg transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.4) 50%, rgba(99, 102, 241, 0.4) 100%)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(168, 85, 247, 0.5)',
              boxShadow: '0 0 40px rgba(168, 85, 247, 0.3), inset 0 0 40px rgba(255, 255, 255, 0.05)',
              textShadow: '0 0 15px rgba(255, 255, 255, 0.8)'
            }}
          >
            Explore AI Solutions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, index }) => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      className="group perspective-1000"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ z: 50 }}
        className="relative rounded-2xl p-6 overflow-hidden cursor-pointer transform-gpu"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 0 40px rgba(168, 85, 247, 0.2), inset 0 0 40px rgba(255, 255, 255, 0.05)'
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(168, 85, 247, 0.3), transparent 40%)`,
            filter: 'blur(20px)'
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `conic-gradient(from 0deg, transparent, rgba(168, 85, 247, 0.6), rgba(236, 72, 153, 0.6), rgba(99, 102, 241, 0.6), transparent)`,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
            padding: '2px',
          }}
        />
        <div className="relative z-10 transform-gpu" style={{ transform: "translateZ(75px)" }}>
          <motion.div 
            className="relative mb-6 rounded-xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: '0 0 25px rgba(168, 85, 247, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-48 object-cover"
              style={{ filter: 'brightness(0.9) contrast(1.1) saturate(1.2)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="text-purple-200 text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(168, 85, 247, 0.3)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(168, 85, 247, 0.5)',
                      boxShadow: '0 0 15px rgba(168, 85, 247, 0.4)',
                      textShadow: '0 0 8px rgba(255, 255, 255, 0.8)'
                    }}>
                {product.category}
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="text-green-200 text-sm font-bold px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(34, 197, 94, 0.3)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(34, 197, 94, 0.5)',
                      boxShadow: '0 0 15px rgba(34, 197, 94, 0.4)',
                      textShadow: '0 0 8px rgba(255, 255, 255, 0.8)'
                    }}>
                {product.price}
              </span>
            </div>
          </motion.div>
          <div className="space-y-4">
            <motion.h3 
              className="text-xl font-bold text-white transition-colors duration-300"
              style={{ 
                transform: "translateZ(25px)",
                textShadow: '0 0 15px rgba(255, 255, 255, 0.6)'
              }}
            >
              {product.title}
            </motion.h3>
            <motion.p 
              className="text-gray-300 text-sm leading-relaxed"
              style={{ 
                transform: "translateZ(15px)",
                textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
              }}
            >
              {product.description}
            </motion.p>
            <motion.div 
              className="grid grid-cols-2 gap-2"
              style={{ transform: "translateZ(10px)" }}
            >
              {product.features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                  className="flex items-center text-xs text-purple-200"
                  style={{ textShadow: '0 0 8px rgba(168, 85, 247, 0.5)' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0"
                       style={{
                         background: 'rgba(168, 85, 247, 0.8)',
                         boxShadow: '0 0 8px rgba(168, 85, 247, 0.6)'
                       }} />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.button
              whileHover={{ 
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full text-white font-medium py-3 rounded-lg mt-6 transition-all duration-300"
              style={{ 
                transform: "translateZ(5px)",
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(99, 102, 241, 0.4) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(168, 85, 247, 0.5)',
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
                textShadow: '0 0 8px rgba(255, 255, 255, 0.8)'
              }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
        {isHovering && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: 'rgba(168, 85, 247, 0.8)',
                  boxShadow: '0 0 15px rgba(168, 85, 247, 0.6)'
                }}
                initial={{ 
                  x: Math.random() * 100 + '%', 
                  y: Math.random() * 100 + '%',
                  opacity: 0,
                  scale: 0.5
                }}
                animate={{ 
                  y: [null, '-100%'],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.2, 0.3],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeOut" 
                }}
              />
            ))}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute"
                style={{
                  width: '3px',
                  height: '3px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
                }}
                initial={{ 
                  x: Math.random() * 100 + '%', 
                  y: Math.random() * 100 + '%',
                  opacity: 0,
                  scale: 0
                }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 2, 0],
                  rotate: [0, 180]
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.4,
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

export default FeaturedProducts;
