const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Webathon 1.0
            </h3>
            <p className="text-gray-400 mb-4">
              Complete web development showcase with modern animations, responsive design, and cutting-edge technology stack.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 text-sm">
              <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full">React</span>
              <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">Framer Motion</span>
              <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full">Tailwind CSS</span>
              <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full">Vite</span>
              <span className="bg-yellow-600/20 text-yellow-300 px-3 py-1 rounded-full">THREE.js</span>
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-purple-300">👨‍💻 Developers</h4>
            <div className="space-y-3">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/30">
                <h5 className="font-semibold text-white">Prince Maurya</h5>
                <p className="text-gray-400 text-sm">AI & Full Stack Developer</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/30">
                <h5 className="font-semibold text-white">Maaz Shaikh</h5>
                <p className="text-gray-400 text-sm">Frontend & UI/UX Developer</p>
              </div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold mb-4 text-purple-300">📞 Contact & Support</h4>
            <div className="space-y-3">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/30">
                <p className="text-gray-400 text-sm mb-2">For any issues or inquiries:</p>
                <a href="mailto:princemaurya8879@gmail.com" 
                   className="text-purple-400 hover:text-purple-300 transition-colors text-sm block mb-1">
                  📧 princemaurya8879@gmail.com
                </a>
                <a href="tel:+919987742369" 
                   className="text-purple-400 hover:text-purple-300 transition-colors text-sm block">
                  📱 +91 9987742369
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700/30 pt-8">
          <div className="text-center">
            <div className="mb-4">
              <h5 className="text-lg font-semibold text-purple-300 mb-2">🏆 Team Information</h5>
              <div className="inline-flex items-center gap-4 bg-gray-800/30 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700/30">
                <span className="text-white font-semibold">Team: Duo Dare</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-300">TCET ACM</span>
                <span className="text-gray-400">•</span>
                <span className="text-purple-400">Webathon 1.0</span>
              </div>
            </div>
            <div className="text-gray-500 text-sm">
              <p>&copy; 2025 Webathon 1.0 | Duo Dare Team | TCET ACM</p>
              <p className="mt-1">Made with ❤️ for web development excellence</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
