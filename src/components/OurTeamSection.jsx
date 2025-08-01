import { motion } from 'framer-motion';
import { useState } from 'react';
import Prince_Maurya from '../assets/images/Prince_Maurya.jpg';

const OurTeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Prince Maurya",
      position: "AI",
      image: Prince_Maurya
    },
    {
      id: 2,
      name: "Maaz Shaikh",
      position: "DEV",
      image: "https://i.ibb.co/vHpxsK2/Formal-infront-dias.jpg?w=400&h=400&fit=crop"
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
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
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-24 h-24 bg-pink-500/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-light mb-4"
            style={{
              background: 'linear-gradient(135deg, #e879f9, #a855f7, #3b82f6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Team
          </motion.h2>
        </div>
        <div className="space-y-0">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="relative border-b border-purple-500/30 py-6 cursor-pointer group"
              onMouseEnter={() => setHoveredMember(member)}
              onMouseLeave={() => setHoveredMember(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div className="text-2xl font-light text-purple-400 w-16">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 text-center">
                  <motion.h3 
                    className="text-3xl md:text-4xl font-light text-white transition-colors duration-300 group-hover:text-purple-400"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {member.name}
                  </motion.h3>
                </div>
                <div className="text-2xl font-light text-purple-300 w-32 text-right">
                  {member.position}
                </div>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-purple-500"
                initial={{ width: "0%" }}
                animate={{ width: hoveredMember?.id === member.id ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
        {hoveredMember && (
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-purple-400 shadow-2xl">
                <img
                  src={hoveredMember.image}
                  alt={hoveredMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full shadow-lg border border-purple-400/50"
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 69, 197, 0.9), rgba(59, 130, 246, 0.9))',
                  backdropFilter: 'blur(20px)'
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-white font-medium text-center">
                  {hoveredMember.position}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-light text-white mb-2">50+</div>
            <div className="text-purple-300 text-sm">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-light text-white mb-2">15+</div>
            <div className="text-purple-300 text-sm">Team Members</div>
          </div>
          <div>
            <div className="text-3xl font-light text-white mb-2">5+</div>
            <div className="text-purple-300 text-sm">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-light text-white mb-2">100%</div>
            <div className="text-purple-300 text-sm">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
