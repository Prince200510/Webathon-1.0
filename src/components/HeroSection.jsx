import { motion } from 'framer-motion';
import EnhancedAnimatedBackground from './EnhancedAnimatedBackground';

const HeroSection = () => {
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-white relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgb(26, 26, 26) 0%, rgb(35, 35, 35) 50%, rgb(26, 26, 26) 100%)'}}>
      <EnhancedAnimatedBackground />
     
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-gray-800/10" 
           style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
      
      <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-6 lg:pt-6 pb-4 sm:pb-6 lg:pb-8 relative z-10">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-3 sm:mb-4 leading-tight tracking-wide bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent drop-shadow-2xl mt-8 sm:mt-12 lg:mt-16"
          style={{
            textShadow: '0 0 30px rgba(156, 163, 175, 0.5), 0 0 60px rgba(156, 163, 175, 0.3)',
            filter: 'drop-shadow(0 0 20px rgba(156, 163, 175, 0.8))'
          }}
        >
          STARTING A NEW
          <br />
          <motion.span
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              textShadow: [
                '0 0 20px rgba(156, 163, 175, 0.8)',
                '0 0 40px rgba(107, 114, 128, 0.8)',
                '0 0 20px rgba(156, 163, 175, 0.8)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent"
            style={{ backgroundSize: '200% 200%' }}
          >
            JOURNEY
          </motion.span>
        </motion.h1>
        
        {/* Animated Subheading with Floating Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center mb-2 relative"
        >
          <motion.span 
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-3xl mr-3 filter drop-shadow-lg"
          >
            🚀
          </motion.span>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed px-4 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent font-semibold"
          >
            Transform your ideas into extraordinary digital experiences
          </motion.p>
          <motion.span 
            animate={{ 
              rotate: [0, -15, 15, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="text-3xl ml-3 filter drop-shadow-lg"
          >
            ✨
          </motion.span>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4 text-gray-200"
        >
          Share your vision, and we'll navigate you through an amazing development journey
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>with cutting-edge technology and creative excellence
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="max-w-5xl mx-auto px-4"
        >
          <div className="relative">
            <motion.div 
              animate={{ 
                boxShadow: [
                  '0 0 30px rgba(168, 85, 247, 0.3)',
                  '0 0 60px rgba(168, 85, 247, 0.5)', 
                  '0 0 30px rgba(168, 85, 247, 0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-r from-gray-800/20 to-gray-700/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-400/30 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700/30 via-gray-600/30 to-gray-800/30 rounded-2xl sm:rounded-3xl opacity-75 animate-pulse"></div>
               <div className="relative z-10">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="absolute -top-2 sm:-top-3 lg:-top-4 left-3 sm:left-4 lg:left-8 z-10"
                  >
                    <span className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full text-xs sm:text-sm lg:text-base font-medium border-2 border-white shadow-lg flex items-center animate-bounce">
                      <motion.span 
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="mr-2"
                      >
                        💼
                      </motion.span>
                      Project
                    </span>
                  </motion.div>
                  <motion.textarea
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="w-full p-3 sm:p-4 md:p-6 lg:p-8 pt-12 sm:pt-14 md:pt-16 lg:pt-18 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white/10 backdrop-blur-sm border-2 border-gray-400/50 text-white placeholder-gray-300/80 resize-none focus:outline-none focus:border-gray-300 focus:ring-4 focus:ring-gray-400/20 transition-all duration-300 text-sm sm:text-base lg:text-lg shadow-inner min-h-[100px] sm:min-h-[120px] lg:min-h-[140px]"
                    rows="3"
                    placeholder="🎯 Tell us about your project, timeline and budget... Let's create something amazing together!"
                  />
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
                    className="absolute bottom-2 sm:bottom-3 lg:bottom-4 right-2 sm:right-3 lg:right-4 flex gap-2 sm:gap-3 flex-wrap sm:flex-nowrap"
                  >
                  <motion.button 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ 
                      boxShadow: [
                        '0 0 20px rgba(168, 85, 247, 0.5)',
                        '0 0 40px rgba(168, 85, 247, 0.8)',
                        '0 0 20px rgba(168, 85, 247, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shadow-lg flex items-center"
                  >
                      <motion.span 
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="mr-2"
                      >
                        🤖
                      </motion.span>
                      Ask AI
                    </motion.button>
                    
                  <motion.button 
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ 
                      background: [
                        'linear-gradient(45deg, #6366f1, #8b5cf6)',
                        'linear-gradient(45deg, #8b5cf6, #ec4899)',
                        'linear-gradient(45deg, #6366f1, #8b5cf6)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shadow-lg flex items-center"
                  >
                      <motion.span 
                        animate={{ 
                          y: [0, -5, 0],
                          rotate: [0, 15, -15, 0] 
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="mr-2"
                      >
                        📎
                      </motion.span>
                      Attach
                    </motion.button>
                  </motion.div>
                </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="flex justify-center items-center mt-3 sm:mt-4 lg:mt-6 gap-2 sm:gap-4 lg:gap-6 flex-wrap"
            >
              {[
                { icon: '🎨', text: 'Creative Design', delay: 0 },
                { icon: '⚡', text: 'Fast Delivery', delay: 0.2 },
                { icon: '🔒', text: 'Secure & Reliable', delay: 0.4 },
                { icon: '🌟', text: 'Premium Quality', delay: 0.6 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 2.8 + item.delay, 
                    duration: 0.6, 
                    ease: "easeOut" 
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -10,
                    boxShadow: '0 10px 30px rgba(168, 85, 247, 0.4)'
                  }}
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300 cursor-pointer bg-white/5 backdrop-blur-sm rounded-full px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 border border-gray-400/20 text-xs sm:text-sm lg:text-base"
                >
                  <motion.span 
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2 + index * 0.5, 
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                    className="text-lg sm:text-xl lg:text-2xl mr-1 sm:mr-2 filter drop-shadow-lg"
                  >
                    {item.icon}
                  </motion.span>
                  <span className="text-xs sm:text-sm lg:text-base font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
      </section>
  );
};

export default HeroSection;
