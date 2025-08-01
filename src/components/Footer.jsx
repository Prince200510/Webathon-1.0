const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Webathon Complete</h3>
        <p className="text-gray-400 mb-8">
          All 9 elements successfully implemented with modern animations and responsive design
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <span>React</span>
          <span>•</span>
          <span>Framer Motion</span>
          <span>•</span>
          <span>Tailwind CSS</span>
          <span>•</span>
          <span>Vite</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
