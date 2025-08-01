import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import EnhancedAnimatedBackground from './EnhancedAnimatedBackground';

const AICodeGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const sliderImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center",
      title: "AI Brain Networks",
      description: "Neural network visualization"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&crop=center",
      title: "Code Development",
      description: "Programming workspace"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center",
      title: "Machine Learning",
      description: "Data processing algorithms"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center",
      title: "Tech Innovation",
      description: "Future technology concepts"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=center",
      title: "Digital Workspace",
      description: "Modern coding environment"
    }
  ];

  const gridImages = [
    { id: 1, url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop", category: "ai", title: "Neural Networks" },
    { id: 2, url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop", category: "coding", title: "Code Editor" },
    { id: 3, url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop", category: "data", title: "Data Science" },
    { id: 4, url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop", category: "ai", title: "AI Technology" },
    { id: 5, url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop", category: "coding", title: "Development" },
    { id: 6, url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop", category: "data", title: "Analytics" },
    { id: 7, url: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop", category: "ai", title: "Machine Learning" },
    { id: 8, url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop", category: "coding", title: "Programming" },
    { id: 9, url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop", category: "data", title: "Big Data" }
  ];

  const categories = ['all', 'ai', 'coding', 'data'];

  const filteredImages = selectedCategory === 'all' 
    ? gridImages 
    : gridImages.filter(img => img.category === selectedCategory);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <section id="ai-code-gallery" className="min-h-screen relative overflow-hidden" 
             style={{
               background: 'linear-gradient(135deg, rgb(16, 16, 30) 0%, rgb(25, 15, 40) 25%, rgb(30, 20, 50) 50%, rgb(25, 15, 40) 75%, rgb(16, 16, 30) 100%)'
             }}>
      <EnhancedAnimatedBackground />
      <div className="absolute inset-0 opacity-30" 
           style={{
             backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.4) 1px, transparent 0)',
             backgroundSize: '40px 40px',
             animation: 'pulse 4s ease-in-out infinite'
           }}></div>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, transparent 70%)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(20px)',
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
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
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 25%, #8b5cf6 50%, #d946ef 75%, #a855f7 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 40px rgba(168, 85, 247, 0.8), 0 0 80px rgba(147, 51, 234, 0.6), 0 0 120px rgba(168, 85, 247, 0.4)',
              filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.8))'
            }}
          >
            AI CODE GALAXY
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-purple-200 text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ 
              textShadow: '0 0 20px rgba(196, 181, 253, 0.6), 0 0 40px rgba(168, 85, 247, 0.3)' 
            }}
          >
            Explore our curated collection of AI-powered components and interactive experiences
          </motion.p>
        </motion.div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mb-12">
            <div className="xl:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(147, 51, 234, 0.1)',
                  backdropFilter: 'blur(25px)',
                  border: '2px solid rgba(168, 85, 247, 0.3)',
                  boxShadow: '0 0 50px rgba(147, 51, 234, 0.4), inset 0 0 50px rgba(168, 85, 247, 0.1)'
                }}
              >
                  boxShadow: '0 0 50px rgba(156, 163, 175, 0.3), inset 0 0 50px rgba(255, 255, 255, 0.05)'
                }}
              >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={sliderImages[currentSlide].url}
                    alt={sliderImages[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
      
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl font-bold mb-2"
                    >
                      {sliderImages[currentSlide].title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-200"
                    >
                      {sliderImages[currentSlide].description}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full p-3 transition-all duration-300 group"
                style={{
                  background: 'rgba(147, 51, 234, 0.3)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(168, 85, 247, 0.5)',
                  boxShadow: '0 0 20px rgba(147, 51, 234, 0.4)'
                }}
              >
                <svg className="w-6 h-6 text-purple-200 group-hover:text-white transition-colors" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     style={{ filter: 'drop-shadow(0 0 5px rgba(196, 181, 253, 0.8))' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-3 transition-all duration-300 group"
                style={{
                  background: 'rgba(147, 51, 234, 0.3)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(168, 85, 247, 0.5)',
                  boxShadow: '0 0 20px rgba(147, 51, 234, 0.4)'
                }}
              >
                <svg className="w-6 h-6 text-purple-200 group-hover:text-white transition-colors" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     style={{ filter: 'drop-shadow(0 0 5px rgba(196, 181, 253, 0.8))' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'scale-125' : 'scale-100'
                    }`}
                    style={index === currentSlide ? {
                      background: 'rgba(168, 85, 247, 0.9)',
                      boxShadow: '0 0 15px rgba(168, 85, 247, 0.8)'
                    } : {
                      background: 'rgba(196, 181, 253, 0.4)',
                      boxShadow: '0 0 8px rgba(196, 181, 253, 0.3)'
                    }}
                  />
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="rounded-xl p-6 shadow-lg cursor-pointer group transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.2), inset 0 0 30px rgba(255, 255, 255, 0.05)'
                }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300"
                       style={{
                         background: 'rgba(59, 130, 246, 0.2)',
                         backdropFilter: 'blur(10px)',
                         border: '1px solid rgba(59, 130, 246, 0.3)',
                         boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)'
                       }}>
                    <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white mb-2" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>Documentation</h4>
                  <p className="text-sm text-gray-300">Comprehensive guides and API docs</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="rounded-xl p-6 shadow-lg cursor-pointer group transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 0 30px rgba(34, 197, 94, 0.2), inset 0 0 30px rgba(255, 255, 255, 0.05)'
                }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300"
                       style={{
                         background: 'rgba(34, 197, 94, 0.2)',
                         backdropFilter: 'blur(10px)',
                         border: '1px solid rgba(34, 197, 94, 0.3)',
                         boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)'
                       }}>
                    <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white mb-2" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>Live Demo</h4>
                  <p className="text-sm text-gray-300">Interactive code examples</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="rounded-xl p-6 shadow-lg cursor-pointer group transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 0 30px rgba(147, 51, 234, 0.2), inset 0 0 30px rgba(255, 255, 255, 0.05)'
                }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300"
                       style={{
                         background: 'rgba(147, 51, 234, 0.2)',
                         backdropFilter: 'blur(10px)',
                         border: '1px solid rgba(147, 51, 234, 0.3)',
                         boxShadow: '0 0 20px rgba(147, 51, 234, 0.4)'
                       }}>
                    <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white mb-2" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>Download</h4>
                  <p className="text-sm text-gray-300">Get started with our toolkit</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="xl:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.15), inset 0 0 30px rgba(255, 255, 255, 0.05)'
              }}
            >
              <h3 className="font-bold text-white mb-4" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'text-white shadow-lg'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    style={selectedCategory === category ? {
                      background: 'rgba(147, 51, 234, 0.3)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(147, 51, 234, 0.4)',
                      boxShadow: '0 0 20px rgba(147, 51, 234, 0.3)',
                      textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
                    } : {
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl p-6 text-white"
              style={{
                background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.3) 0%, rgba(99, 102, 241, 0.3) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(147, 51, 234, 0.3)',
                boxShadow: '0 0 40px rgba(147, 51, 234, 0.25), inset 0 0 40px rgba(255, 255, 255, 0.05)'
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                     style={{
                       background: 'rgba(255, 255, 255, 0.2)',
                       backdropFilter: 'blur(10px)',
                       border: '1px solid rgba(255, 255, 255, 0.3)',
                       boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)'
                     }}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>AI & Code</h4>
                  <p className="text-purple-200 text-sm" style={{ textShadow: '0 0 5px rgba(147, 51, 234, 0.5)' }}>Premium Collection</p>
                </div>
              </div>
              <p className="text-gray-200 text-sm mb-4" style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.3)' }}>
                Explore our curated collection of AI technology and coding excellence.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-medium px-6 py-2 rounded-lg text-sm transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  textShadow: '0 0 5px rgba(255, 255, 255, 0.5)'
                }}
              >
                View Collection
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="rounded-xl p-4 transition-all duration-300"
                   style={{
                     background: 'rgba(255, 255, 255, 0.08)',
                     backdropFilter: 'blur(15px)',
                     border: '1px solid rgba(255, 255, 255, 0.15)',
                     boxShadow: '0 0 20px rgba(147, 51, 234, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-300 mb-1" style={{ textShadow: '0 0 10px rgba(147, 51, 234, 0.5)' }}>50+</div>
                  <div className="text-xs text-gray-400">AI Projects</div>
                </div>
              </div>
              <div className="rounded-xl p-4 transition-all duration-300"
                   style={{
                     background: 'rgba(255, 255, 255, 0.08)',
                     backdropFilter: 'blur(15px)',
                     border: '1px solid rgba(255, 255, 255, 0.15)',
                     boxShadow: '0 0 20px rgba(59, 130, 246, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300 mb-1" style={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}>100+</div>
                  <div className="text-xs text-gray-400">Code Samples</div>
                </div>
              </div>
              <div className="rounded-xl p-4 transition-all duration-300"
                   style={{
                     background: 'rgba(255, 255, 255, 0.08)',
                     backdropFilter: 'blur(15px)',
                     border: '1px solid rgba(255, 255, 255, 0.15)',
                     boxShadow: '0 0 20px rgba(34, 197, 94, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300 mb-1" style={{ textShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }}>25+</div>
                  <div className="text-xs text-gray-400">Data Models</div>
                </div>
              </div>
              <div className="rounded-xl p-4 transition-all duration-300"
                   style={{
                     background: 'rgba(255, 255, 255, 0.08)',
                     backdropFilter: 'blur(15px)',
                     border: '1px solid rgba(255, 255, 255, 0.15)',
                     boxShadow: '0 0 20px rgba(236, 72, 153, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.05)'
                   }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-300 mb-1" style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.5)' }}>10k+</div>
                  <div className="text-xs text-gray-400">Lines of Code</div>
                </div>
              </div>
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 0 30px rgba(255, 165, 0, 0.15), inset 0 0 30px rgba(255, 255, 255, 0.05)'
              }}
            >
              <h4 className="font-bold text-white mb-4 flex items-center" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
                <span className="w-2 h-2 rounded-full mr-3" style={{ background: 'rgba(147, 51, 234, 0.8)', boxShadow: '0 0 10px rgba(147, 51, 234, 0.6)' }}></span>
                Tech Stack
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: 'Python', color: 'rgba(59, 130, 246, 0.3)' },
                  { name: 'React', color: 'rgba(6, 182, 212, 0.3)' },
                  { name: 'Node.js', color: 'rgba(34, 197, 94, 0.3)' },
                  { name: 'AI/ML', color: 'rgba(147, 51, 234, 0.3)' },
                  { name: 'Docker', color: 'rgba(37, 99, 235, 0.3)' },
                  { name: 'AWS', color: 'rgba(249, 115, 22, 0.3)' }
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="text-white text-xs font-medium px-2 py-2 rounded-lg text-center cursor-pointer transition-all duration-300"
                    style={{
                      background: tech.color,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)',
                      textShadow: '0 0 5px rgba(255, 255, 255, 0.5)'
                    }}
                  >
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </motion.div> */}
          </div>
        </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4"
                style={{ 
                  background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #8b5cf6 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 30px rgba(168, 85, 247, 0.8)' 
                }}>
              Cosmic Gallery Collection
            </h3>
            <p className="text-purple-200" 
               style={{ textShadow: '0 0 15px rgba(196, 181, 253, 0.6)' }}>
              Explore our curated selection of AI innovations across the digital universe
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                className={`relative rounded-xl overflow-hidden cursor-pointer group transition-all duration-500 ${
                  index === 0 ? 'md:col-span-2 md:row-span-2 h-64' : 'h-32'
                }`}
                style={{
                  background: 'rgba(147, 51, 234, 0.1)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  boxShadow: '0 0 30px rgba(147, 51, 234, 0.3), inset 0 0 30px rgba(168, 85, 247, 0.1)'
                }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90"
                  style={{ filter: 'brightness(0.8) contrast(1.1)' }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-end"
                  style={{
                    background: 'linear-gradient(to top, rgba(25, 15, 40, 0.95) 0%, rgba(147, 51, 234, 0.3) 50%, transparent 100%)'
                  }}
                >
                  <div className="p-3 text-white">
                    <h4 className="font-semibold text-sm" 
                        style={{ textShadow: '0 0 15px rgba(168, 85, 247, 0.8)' }}>
                      {image.title}
                    </h4>
                    <span className="text-xs px-2 py-1 rounded-full mt-1 inline-block transition-all duration-300"
                          style={{
                            background: 'rgba(168, 85, 247, 0.4)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(168, 85, 247, 0.7)',
                            boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
                            textShadow: '0 0 8px rgba(196, 181, 253, 0.9)'
                          }}>
                      {image.category}
                    </span>
                  </div>
                </motion.div>
                <div className="absolute top-2 right-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full transition-all duration-300 ${
                    image.category === 'ai' ? 'text-cyan-200' :
                    image.category === 'coding' ? 'text-emerald-200' :
                    'text-purple-200'
                  }`}
                  style={{
                    background: image.category === 'ai' ? 'rgba(34, 211, 238, 0.3)' :
                               image.category === 'coding' ? 'rgba(16, 185, 129, 0.3)' :
                               'rgba(168, 85, 247, 0.3)',
                    backdropFilter: 'blur(12px)',
                    border: `1px solid ${
                      image.category === 'ai' ? 'rgba(34, 211, 238, 0.6)' :
                      image.category === 'coding' ? 'rgba(16, 185, 129, 0.6)' :
                      'rgba(168, 85, 247, 0.6)'
                    }`,
                    boxShadow: `0 0 18px ${
                      image.category === 'ai' ? 'rgba(34, 211, 238, 0.4)' :
                      image.category === 'coding' ? 'rgba(16, 185, 129, 0.4)' :
                      'rgba(168, 85, 247, 0.4)'
                    }`,
                    textShadow: '0 0 8px rgba(255, 255, 255, 0.9)'
                  }}>
                    {image.category.toUpperCase()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(147, 51, 234, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              boxShadow: '0 0 40px rgba(147, 51, 234, 0.3), inset 0 0 40px rgba(168, 85, 247, 0.1)'
            }}
          >
            <h3 className="text-2xl font-bold text-center mb-6"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 20px rgba(168, 85, 247, 0.6)'
                }}>
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "🤖",
                  title: "Advanced AI Models",
                  description: "State-of-the-art machine learning algorithms and neural networks"
                },
                {
                  icon: "⚡",
                  title: "High Performance",
                  description: "Optimized code for lightning-fast execution and scalability"
                },
                {
                  icon: "🔒",
                  title: "Secure & Reliable",
                  description: "Enterprise-grade security with 99.9% uptime guarantee"
                },
                {
                  icon: "🌐",
                  title: "Global Scale",
                  description: "Deploy anywhere with our worldwide infrastructure"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-xl transition-all duration-300"
                  style={{
                    background: 'rgba(168, 85, 247, 0.05)',
                    border: '1px solid rgba(168, 85, 247, 0.2)'
                  }}
                >
                  <div className="text-3xl" 
                       style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.6))' }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-purple-200"
                        style={{ textShadow: '0 0 10px rgba(196, 181, 253, 0.8)' }}>
                      {feature.title}
                    </h4>
                    <p className="text-purple-300 text-sm"
                       style={{ textShadow: '0 0 8px rgba(196, 181, 253, 0.5)' }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(168, 85, 247, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              boxShadow: '0 0 40px rgba(147, 51, 234, 0.3), inset 0 0 40px rgba(168, 85, 247, 0.1)'
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 20px rgba(168, 85, 247, 0.6)'
                  }}>
                Recent Updates
              </h3>
              <span className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(34, 197, 94, 0.3)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(34, 197, 94, 0.5)',
                      color: 'rgb(187, 247, 208)',
                      boxShadow: '0 0 15px rgba(34, 197, 94, 0.4)',
                      textShadow: '0 0 8px rgba(255, 255, 255, 0.8)'
                    }}>
                Latest
              </span>
            </div>
            <div className="space-y-4">
              {[
                {
                  date: "Jan 15, 2025",
                  title: "New AI Model Release",
                  description: "Introducing GPT-5 integration with enhanced capabilities",
                  type: "Feature"
                },
                {
                  date: "Jan 10, 2025",
                  title: "Performance Improvements",
                  description: "40% faster processing with optimized algorithms",
                  type: "Update"
                },
              ].map((update, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-lg p-4 transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(168, 85, 247, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(168, 85, 247, 0.2)',
                    boxShadow: '0 0 20px rgba(147, 51, 234, 0.2)'
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold text-purple-200"
                            style={{ textShadow: '0 0 10px rgba(196, 181, 253, 0.8)' }}>
                          {update.title}
                        </h4>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          update.type === 'Feature' ? 'text-cyan-200' :
                          update.type === 'Update' ? 'text-orange-200' :
                          'text-red-200'
                        }`}
                        style={{
                          background: update.type === 'Feature' ? 'rgba(34, 211, 238, 0.3)' :
                                    update.type === 'Update' ? 'rgba(251, 146, 60, 0.3)' :
                                    'rgba(248, 113, 113, 0.3)',
                          backdropFilter: 'blur(8px)',
                          border: `1px solid ${
                            update.type === 'Feature' ? 'rgba(34, 211, 238, 0.5)' :
                            update.type === 'Update' ? 'rgba(251, 146, 60, 0.5)' :
                            'rgba(248, 113, 113, 0.5)'
                          }`,
                          boxShadow: `0 0 10px ${
                            update.type === 'Feature' ? 'rgba(34, 211, 238, 0.3)' :
                            update.type === 'Update' ? 'rgba(251, 146, 60, 0.3)' :
                            'rgba(248, 113, 113, 0.3)'
                          }`,
                          textShadow: '0 0 8px rgba(255, 255, 255, 0.8)'
                        }}>
                          {update.type}
                        </span>
                      </div>
                      <p className="text-purple-300 text-sm mb-2"
                         style={{ textShadow: '0 0 8px rgba(196, 181, 253, 0.5)' }}>
                        {update.description}
                      </p>
                      <span className="text-xs text-purple-400"
                            style={{ textShadow: '0 0 6px rgba(196, 181, 253, 0.4)' }}>
                        {update.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AICodeGallery;
