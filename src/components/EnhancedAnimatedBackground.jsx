import React from 'react';

const EnhancedAnimatedBackground = () => {
  const programmingSymbols = ['<>', '{}', '[]', '/>', '&&', '||', '===', '!=', '=>', '++', '--', '/*', '*/', '()', ';', '#'];
  const codeKeywords = ['let', 'const', 'var', 'if', 'else', 'for', 'while', 'function', 'return', 'class', 'import', 'export'];
  const blockchainSymbols = ['₿', 'Ξ', '⛏', '🔗', '🔐', '📊', '🚀', '💎'];
  const blockchainTerms = ['HODL', 'DeFi', 'NFT', 'DAO', 'Web3', 'dApp', 'Smart Contract', 'Consensus', 'Mining', 'Staking'];
  const aiTerms = ['Neural', 'Tensor', 'Gradient', 'Model', 'Train', 'Predict', 'Dataset', 'Algorithm', 'CNN', 'RNN', 'GAN', 'LSTM'];
  // const mlSymbols = ['∑', '∂', 'α', 'β', 'γ', 'λ', 'μ', 'σ', '∇', '∞', '≈', '±'];
  
  return (
    <div className="absolute inset-0 overflow-hidden z-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 bg-repeat opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(100,100,100,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(100,100,100,0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center bottom'
          }}
        />
      </div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full animate-pulse shadow-2xl shadow-blue-500/50"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full animate-bounce shadow-2xl shadow-cyan-500/50"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-ping shadow-2xl shadow-purple-400/50"></div>
      <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full animate-pulse delay-1000 shadow-2xl shadow-emerald-400/50"></div>
      <div className="absolute top-[70%] left-[60%] w-14 h-14 bg-gradient-to-r from-yellow-300 to-orange-500 rounded-full animate-pulse delay-700 shadow-2xl shadow-yellow-300/50"></div>
      <div className="absolute top-1/5 right-1/5 w-10 h-10 bg-gradient-to-br from-rose-200 to-pink-400 rounded-full animate-ping shadow-xl shadow-pink-400/40"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-gradient-to-l from-indigo-400 to-blue-600 rounded-full animate-bounce shadow-2xl shadow-indigo-500/40 delay-500"></div>
      <div className="absolute top-[40%] left-[80%] w-18 h-18 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full animate-pulse delay-300 shadow-2xl shadow-violet-500/50"></div>
      <div className="absolute bottom-[60%] left-[15%] w-22 h-22 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full animate-bounce delay-800 shadow-2xl shadow-teal-400/50"></div>
      <div className="absolute top-[25%] left-[15%] w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 shadow-lg transform rotate-12 opacity-80"
           style={{ animation: 'blockFloat 8s ease-in-out infinite, rotateBlock 12s linear infinite' }}>
        <div className="absolute inset-1 bg-gradient-to-tr from-yellow-300 to-orange-300 opacity-60"></div>
        <div className="absolute inset-0 border border-yellow-400 opacity-40"></div>
      </div>
      
      <div className="absolute bottom-[35%] right-[25%] w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg transform rotate-45 opacity-75"
           style={{ animation: 'blockFloat 10s ease-in-out infinite reverse, rotateBlock 15s linear infinite' }}>
        <div className="absolute inset-1 bg-gradient-to-tr from-emerald-300 to-green-300 opacity-60"></div>
      </div>

      <div className="absolute top-[45%] right-[35%] w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 shadow-xl transform rotate-30 opacity-70"
           style={{ animation: 'blockFloat 12s ease-in-out infinite, rotateBlock 18s linear infinite reverse' }}>
        <div className="absolute inset-1 bg-gradient-to-tr from-cyan-300 to-blue-300 opacity-50"></div>
        <div className="absolute inset-0 border-2 border-cyan-400 opacity-30"></div>
      </div>

      <div className="absolute top-[30%] left-[40%] w-8 h-8 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full shadow-lg opacity-80"
           style={{ animation: 'neuralPulse 3s ease-in-out infinite' }}>
        <div className="absolute inset-1 bg-white rounded-full opacity-60 animate-ping"></div>
      </div>
      
      <div className="absolute bottom-[45%] left-[55%] w-6 h-6 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full shadow-md opacity-75"
           style={{ animation: 'neuralPulse 2.5s ease-in-out infinite delay-500' }}>
        <div className="absolute inset-1 bg-white rounded-full opacity-50 animate-ping"></div>
      </div>

      <div className="absolute top-[55%] left-[25%] w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full shadow-lg opacity-70"
           style={{ animation: 'neuralPulse 4s ease-in-out infinite delay-1000' }}>
        <div className="absolute inset-1 bg-white rounded-full opacity-40 animate-ping"></div>
      </div>

      <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none">
        <defs>
          <linearGradient id="neural" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4"/>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path d="M 150 200 Q 300 150 450 300" stroke="url(#neural)" strokeWidth="2" fill="none" filter="url(#glow)"
              style={{ animation: 'neuralFlow 6s ease-in-out infinite' }}/>
        <path d="M 100 400 Q 250 300 400 450" stroke="url(#neural)" strokeWidth="2" fill="none" filter="url(#glow)"
              style={{ animation: 'neuralFlow 8s ease-in-out infinite delay-1000' }}/>
        <path d="M 200 100 Q 400 200 600 150" stroke="url(#neural)" strokeWidth="2" fill="none" filter="url(#glow)"
              style={{ animation: 'neuralFlow 7s ease-in-out infinite delay-500' }}/>
      </svg>
      <div className="absolute top-[15%] left-[70%] opacity-60">
        <div className="flex items-center space-x-2" style={{ animation: 'chainMove 10s linear infinite' }}>
          <div className="w-4 h-4 border-2 border-yellow-400 transform rotate-45 bg-yellow-500/20"></div>
          <div className="w-2 h-px bg-yellow-400"></div>
          <div className="w-4 h-4 border-2 border-orange-400 transform rotate-45 bg-orange-500/20"></div>
          <div className="w-2 h-px bg-orange-400"></div>
          <div className="w-4 h-4 border-2 border-red-400 transform rotate-45 bg-red-500/20"></div>
        </div>
      </div>
      <div className="absolute bottom-[25%] right-[10%] opacity-50">
        <div className="flex items-center space-x-2" style={{ animation: 'chainMove 12s linear infinite reverse' }}>
          <div className="w-3 h-3 border-2 border-green-400 transform rotate-45 bg-green-500/20"></div>
          <div className="w-2 h-px bg-green-400"></div>
          <div className="w-3 h-3 border-2 border-emerald-400 transform rotate-45 bg-emerald-500/20"></div>
          <div className="w-2 h-px bg-emerald-400"></div>
          <div className="w-3 h-3 border-2 border-teal-400 transform rotate-45 bg-teal-500/20"></div>
        </div>
      </div>
      <div className="absolute top-1/2 left-20 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 transform rotate-45 shadow-lg" 
           style={{ animation: 'spin 8s linear infinite, float 4s ease-in-out infinite' }}></div>
      <div className="absolute top-20 right-1/3 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 transform rotate-12 animate-pulse shadow-lg"
           style={{ animation: 'rotateY 6s linear infinite, pulse 2s ease-in-out infinite' }}></div>
      <div className="absolute bottom-1/4 left-10 w-6 h-6 bg-gradient-to-br from-purple-300 to-pink-500 transform rotate-45 shadow-xl"
           style={{ animation: 'spin 10s linear infinite reverse' }}></div>
      <div className="absolute top-1/3 left-1/3 w-5 h-5 bg-gradient-to-br from-emerald-400 to-teal-600 transform rotate-90 shadow-md delay-1000"
           style={{ animation: 'spin 12s linear infinite, bounce 3s ease-in-out infinite' }}></div>
      <div className="absolute top-[15%] left-[25%] w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg"
           style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)', animation: 'spin 15s linear infinite' }}></div>
      <div className="absolute bottom-[25%] right-[15%] w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-600 shadow-xl"
           style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)', animation: 'spin 20s linear infinite reverse' }}></div>
      {blockchainSymbols.map((symbol, i) => (
        <div
          key={`blockchain-symbol-${i}`}
          className="absolute text-yellow-400 text-lg opacity-70 select-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `cryptoFloat ${4 + Math.random() * 6}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            textShadow: '0 0 10px rgba(255, 193, 7, 0.5)',
          }}
        >
          {symbol}
        </div>
      ))}
      {blockchainTerms.map((term, i) => (
        <div
          key={`blockchain-term-${i}`}
          className="absolute text-orange-300 font-mono text-xs opacity-50 select-none font-bold"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            animation: 'blockchainGlow 4s ease-in-out infinite',
          }}
        >
          {term}
        </div>
      ))}
      {aiTerms.map((term, i) => (
        <div
          key={`ai-term-${i}`}
          className="absolute text-purple-300 font-mono text-xs opacity-60 select-none font-semibold"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${3 + Math.random() * 5}s`,
            animation: 'aiGlow 5s ease-in-out infinite',
          }}
        >
          {term}
        </div>
      ))}
      {/* {mlSymbols.map((symbol, i) => (
        <div
          key={`ml-symbol-${i}`}
          className="absolute text-pink-300 text-sm opacity-50 select-none font-bold"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `mathFloat ${5 + Math.random() * 7}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
            textShadow: '0 0 8px rgba(236, 72, 153, 0.4)',
          }}
        >
          {symbol}
        </div>
      ))} */}
      {programmingSymbols.map((symbol, i) => (
        <div
          key={`symbol-${i}`}
          className="absolute text-blue-300 font-mono text-sm opacity-60 animate-bounce select-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        >
          {symbol}
        </div>
      ))}
      {codeKeywords.map((keyword, i) => (
        <div
          key={`keyword-${i}`}
          className="absolute text-cyan-400 font-mono text-xs opacity-50 animate-pulse select-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        >
          {keyword}
        </div>
      ))}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={`binary-${i}`}
          className="absolute text-green-300 font-mono text-xs opacity-40 select-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        >
          {Math.random() > 0.5 ? '1010' : '0101'}
        </div>
      ))}
      <div className="absolute top-[20%] right-[10%] w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full shadow-2xl opacity-80"
           style={{ animation: 'orbit 25s linear infinite' }}>
        <div className="absolute inset-2 bg-gradient-to-tr from-red-300 to-yellow-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-[30%] left-[5%] w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full shadow-xl opacity-70"
           style={{ animation: 'orbit 30s linear infinite reverse' }}>
        <div className="absolute inset-1 bg-gradient-to-tr from-blue-300 to-white rounded-full opacity-50"></div>
      </div>
      <div className="absolute top-[60%] right-[40%] w-14 h-14 opacity-75" style={{ animation: 'orbit 35s linear infinite' }}>
        <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-xl relative">
          <div className="absolute inset-0 rounded-full border-2 border-yellow-300 opacity-60" 
               style={{ transform: 'rotateX(75deg) scale(1.8)', borderWidth: '1px' }}></div>
        </div>
      </div>
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`asteroid-${i}`}
          className="absolute bg-gray-400 rounded-full opacity-60"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            top: `${30 + Math.random() * 40}%`,
            left: `${Math.random() * 100}%`,
            animation: `drift ${10 + Math.random() * 20}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        ></div>
      ))}
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
        <defs>
          <linearGradient id="constellation" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3"/>
          </linearGradient>
        </defs>
        <path d="M 100 100 L 200 150 L 150 220 L 250 180" stroke="url(#constellation)" strokeWidth="1" fill="none"/>
        <path d="M 400 80 L 480 120 L 520 200 L 580 160 L 620 240" stroke="url(#constellation)" strokeWidth="1" fill="none"/>
        <path d="M 50 300 L 120 350 L 180 320 L 240 380" stroke="url(#constellation)" strokeWidth="1" fill="none"/>
      </svg>
      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-white rounded-full animate-ping delay-500"></div>
      <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-blue-300 rounded-full animate-bounce delay-700"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-[10%] left-[80%] w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping delay-200"></div>
      <div className="absolute bottom-[15%] right-[40%] w-2.5 h-2.5 bg-pink-200 rounded-full animate-bounce delay-400"></div>
      <div className="absolute bottom-[10%] left-[70%] w-1 h-1 bg-yellow-300 rounded-full animate-ping delay-1000"></div>
      <div className="absolute top-[15%] right-[25%] w-2 h-2 bg-emerald-300 rounded-full animate-pulse delay-600"></div>
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full animate-pulse"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            backgroundColor: i % 3 === 0 ? '#ffffff' : i % 3 === 1 ? '#60a5fa' : '#a855f7',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 4}s`,
          }}
        ></div>
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={`shooting-star-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full opacity-80"
          style={{
            top: `${Math.random() * 50}%`,
            left: `-10px`,
            animation: `shootingStar ${3 + Math.random() * 4}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`,
            boxShadow: '0 0 10px 2px rgba(255,255,255,0.8), 0 0 20px 4px rgba(255,255,255,0.4)',
          }}
        ></div>
      ))}
      <div className="absolute top-[10%] left-[60%] w-32 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-lg opacity-60 animate-pulse"></div>
      <div className="absolute bottom-[40%] right-[20%] w-28 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-lg opacity-50 animate-pulse delay-700"></div>
      <div className="absolute top-[50%] left-[10%] w-24 h-16 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-lg opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`data-line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            style={{
              width: '200px',
              top: `${10 + i * 12}%`,
              left: '-200px',
              animation: `dataFlow ${4 + Math.random() * 6}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20h60v20h-60z" fill="none" stroke="#22d3ee" strokeWidth="1"/>
              <path d="M20 60h20v20h-20z" fill="none" stroke="#22d3ee" strokeWidth="1"/>
              <path d="M60 60h20v20h-20z" fill="none" stroke="#22d3ee" strokeWidth="1"/>
              <circle cx="20" cy="20" r="2" fill="#22d3ee"/>
              <circle cx="80" cy="40" r="2" fill="#22d3ee"/>
              <circle cx="40" cy="80" r="2" fill="#22d3ee"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute text-green-400 font-mono text-xs leading-none select-none"
            style={{
              left: `${i * 8 + 5}%`,
              top: '-100px',
              animation: `matrixRain ${8 + Math.random() * 12}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} className="opacity-60">
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute top-[70%] left-[40%] opacity-70">
        <div className="relative">
          <div className="w-16 h-10 bg-gradient-to-r from-gray-700 to-gray-600 rounded shadow-lg">
            <div className="absolute inset-1 bg-gradient-to-r from-gray-600 to-gray-500 rounded"></div>
            <div className="absolute top-2 left-2 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-300"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-yellow-400 animate-pulse"></div>
          </div>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs text-yellow-300 font-mono animate-bounce">
            ⛏️ Mining...
          </div>
        </div>
      </div>
      <div className="absolute top-[10%] right-[15%] opacity-60">
        <div className="relative w-20 h-16">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute top-2 left-3 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute top-6 left-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-200"></div>
          <div className="absolute bottom-3 left-5 w-2 h-2 bg-violet-400 rounded-full animate-ping delay-400"></div>
          <div className="absolute top-4 right-2 w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-ping delay-600"></div>
          <svg className="absolute inset-0 w-full h-full">
            <path d="M8 8 Q12 6 16 10" stroke="#a855f7" strokeWidth="1" fill="none" opacity="0.6"/>
            <path d="M16 10 Q14 12 12 14" stroke="#ec4899" strokeWidth="1" fill="none" opacity="0.6"/>
            <path d="M8 8 Q10 12 12 14" stroke="#8b5cf6" strokeWidth="1" fill="none" opacity="0.6"/>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[50%] left-[20%] opacity-50">
        <div className="flex items-center space-x-1 text-xs font-mono text-green-300">
          <span className="animate-pulse">Hash:</span>
          <span className="animate-pulse delay-100">0x4a7b</span>
          <span className="animate-pulse delay-200">c8d9</span>
          <span className="animate-pulse delay-300">e5f2</span>
        </div>
      </div>
      <div className="absolute top-[80%] right-[30%] opacity-60">
        <div className="text-xs font-mono text-blue-300">
          <div className="flex items-center space-x-2">
            <span>Training:</span>
            <div className="w-16 h-1 bg-gray-600 rounded overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded animate-pulse" 
                   style={{ width: '70%', animation: 'progress 3s ease-in-out infinite' }}></div>
            </div>
            <span className="animate-pulse">87%</span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-purple-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-cyan-500/10 pointer-events-none"></div>
      <style jsx>{`
        @keyframes blockFloat {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-15px) rotateX(15deg); }
        }
        @keyframes rotateBlock {
          0% { transform: rotateY(0deg) rotateZ(0deg); }
          100% { transform: rotateY(360deg) rotateZ(360deg); }
        }
        @keyframes neuralPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes neuralFlow {
          0%, 100% { stroke-dasharray: 0 100; stroke-dashoffset: 0; }
          50% { stroke-dasharray: 50 50; stroke-dashoffset: -25; }
        }
        @keyframes chainMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(50px); }
        }
        @keyframes cryptoFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-25px) scale(1.1); }
        }
        @keyframes blockchainGlow {
          0%, 100% { text-shadow: 0 0 5px rgba(255, 193, 7, 0.5); }
          50% { text-shadow: 0 0 20px rgba(255, 193, 7, 0.8), 0 0 30px rgba(255, 193, 7, 0.6); }
        }
        @keyframes aiGlow {
          0%, 100% { text-shadow: 0 0 5px rgba(168, 85, 247, 0.5); }
          50% { text-shadow: 0 0 20px rgba(168, 85, 247, 0.8), 0 0 30px rgba(168, 85, 247, 0.6); }
        }
        @keyframes mathFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(-10px) rotate(-5deg); }
        }
        @keyframes matrixRain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 87%; }
          100% { width: 100%; }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        @keyframes drift {
          0% { transform: translateX(-10px); }
          100% { transform: translateX(calc(100vw + 10px)); }
        }
        @keyframes shootingStar {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(calc(100vw + 100px)) translateY(50px); opacity: 0; }
        }
        @keyframes dataFlow {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(100vw + 200px)); }
        }
      `}</style>
    </div>
  );
};

export default EnhancedAnimatedBackground;