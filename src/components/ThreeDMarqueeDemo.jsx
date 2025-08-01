import { motion } from 'framer-motion';
import ThreeDMarquee from './ThreeDMarquee';
import EnhancedAnimatedBackground from './EnhancedAnimatedBackground';

const ThreeDMarqueeDemo = () => {
  const images = [
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1558655146-364adaf25c59?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1526378800651-c32d170fe6e8?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1516110833967-0b5ee0d87159?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1594736797933-d0a3be68ebe2?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?w=970&h=700&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=970&h=700&fit=crop&crop=center"
  ];

  return (
    <section id="marquee" className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden"
             style={{
               background: 'linear-gradient(135deg, rgb(26, 26, 26) 0%, rgb(17, 17, 17) 50%, rgb(26, 26, 26) 100%)'
             }}>
      <EnhancedAnimatedBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 25%, #6366f1 50%, #8b5cf6 75%, #a855f7 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)',
              filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.4))'
            }}
          >
            3D SHOWCASE GALLERY
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            style={{ 
              textShadow: '0 0 15px rgba(255, 255, 255, 0.3)' 
            }}
          >
            Experience our work in an immersive 3D environment with smooth animations and stunning visual effects
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-7xl"
        >
          <ThreeDMarquee images={images} />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center items-center mt-12 gap-8 flex-wrap"
        >
          {[
            { icon: '🎨', text: '3D Visual Effects', color: 'rgba(168, 85, 247, 0.3)' },
            { icon: '⚡', text: 'Smooth Animations', color: 'rgba(236, 72, 153, 0.3)' },
            { icon: '🔮', text: 'Interactive Hover', color: 'rgba(99, 102, 241, 0.3)' },
            { icon: '✨', text: 'Modern Design', color: 'rgba(34, 197, 94, 0.3)' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.8 + index * 0.1, 
                duration: 0.5 
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -5
              }}
              className="flex items-center text-purple-200 hover:text-white transition-all duration-300 cursor-pointer rounded-full px-6 py-3"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: `0 0 30px ${item.color}, inset 0 0 30px rgba(255, 255, 255, 0.05)`
              }}
            >
              <span className="text-2xl mr-3" style={{filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.6))'}}>{item.icon}</span>
              <span className="text-sm font-medium" style={{textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ThreeDMarqueeDemo;
