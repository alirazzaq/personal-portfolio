import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, ExternalLink, Download, Sparkles, Zap, Rocket, Code, Brain, Shield } from 'lucide-react';

const Portfolio = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: <Sparkles size={16} /> },
    { id: 'about', label: 'About', icon: <Brain size={16} /> },
    { id: 'experience', label: 'XP', icon: <Zap size={16} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={16} /> },
    { id: 'contact', label: 'Contact', icon: <Rocket size={16} /> }
  ];

  const projects = [
    {
      title: 'NLP Sentiment Analysis',
      description: 'Teaching machines to understand human emotions through text!',
      tech: ['Python', 'NLTK', 'Scikit-learn', 'Pandas'],
      github: '#',
      color: 'from-yellow-400 via-orange-500 to-pink-500',
      emoji: '🎭'
    },
    {
      title: 'Sales Forecasting Dashboard',
      description: 'Predicting the future of sales with time-traveling algorithms!',
      tech: ['Python', 'Plotly', 'Dash', 'Prophet'],
      github: '#',
      color: 'from-cyan-400 via-blue-500 to-purple-600',
      emoji: '📈'
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Keeping customers happy before they even think about leaving!',
      tech: ['Python', 'XGBoost', 'TensorFlow', 'SQL'],
      github: '#',
      color: 'from-green-400 via-emerald-500 to-teal-600',
      emoji: '🔮'
    }
  ];

  const skills = [
    'Python', 'Machine Learning', 'Data Science', 'TensorFlow', 'PyTorch',
    'NLP', 'Computer Vision', 'SQL', 'Big Data', 'AI Ethics'
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Cursor Follower */}
      <div 
        className="fixed w-96 h-96 rounded-full opacity-20 pointer-events-none z-0 transition-all duration-1000 ease-out blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,255,0.5) 0%, rgba(0,255,255,0.5) 50%, transparent 70%)',
          left: mousePos.x - 192,
          top: mousePos.y - 192,
        }}
      />

      {/* Funky Background Pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Navigation Bubbles */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex gap-4 bg-black/40 backdrop-blur-xl p-3 rounded-full border border-white/20">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white' 
                  : 'hover:bg-white/10'
              }`}
              style={{
                animation: isLoaded ? `float ${3 + index * 0.5}s ease-in-out infinite` : 'none',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <span className="flex items-center gap-2">
                <span className="group-hover:rotate-180 transition-transform duration-500">{item.icon}</span>
                <span className="hidden md:inline">{item.label}</span>
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8 relative inline-block">
            <h1 className={`text-6xl md:text-8xl font-black transition-all duration-1000 ${
              isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}>
              <span className="inline-block hover:rotate-6 transition-transform duration-300">A</span>
              <span className="inline-block hover:-rotate-6 transition-transform duration-300">L</span>
              <span className="inline-block hover:rotate-6 transition-transform duration-300">I</span>
              <span className="inline-block mx-2"></span>
              <span className="inline-block hover:-rotate-6 transition-transform duration-300">R</span>
              <span className="inline-block hover:rotate-6 transition-transform duration-300">A</span>
              <span className="inline-block hover:-rotate-6 transition-transform duration-300">Z</span>
              <span className="inline-block hover:rotate-6 transition-transform duration-300">Z</span>
              <span className="inline-block hover:-rotate-6 transition-transform duration-300">A</span>
              <span className="inline-block hover:rotate-6 transition-transform duration-300">Q</span>
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          </div>
          
          <div className="mb-8 space-y-2">
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Data Wizard 🧙‍♂️ | ML Alchemist ⚗️ | Bug Hunter 🐛
            </p>
            <p className="text-lg text-gray-400">
              Turning coffee into code and data into magic ✨
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 text-lg font-bold overflow-hidden rounded-full"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-600 transition-all duration-300 group-hover:scale-110"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                Let's Talk! <Sparkles className="animate-spin-slow" size={20} />
              </span>
            </button>
            
            <a
              href="#"
              className="group relative px-8 py-4 text-lg font-bold rounded-full border-2 border-transparent bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent"
            >
              <span className="absolute inset-0 rounded-full border-2 border-pink-500 group-hover:border-yellow-400 transition-colors duration-300"></span>
              <span className="flex items-center gap-2">
                <Download className="group-hover:animate-bounce" size={20} />
                Grab My CV
              </span>
            </a>
          </div>

          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 animate-float-slow text-4xl">🚀</div>
            <div className="absolute top-40 right-20 animate-float-medium text-4xl">💻</div>
            <div className="absolute bottom-20 left-1/4 animate-float-fast text-4xl">🎯</div>
            <div className="absolute bottom-40 right-1/3 animate-float-slow text-4xl">🌟</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Who</span>
            <span className="mx-2">Am</span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">I?</span>
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-500/10 to-purple-600/10 p-8 rounded-3xl border border-pink-500/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Brain className="text-pink-500" /> The Mind
              </h3>
              <p className="text-gray-300">
                Masters student diving deep into the ocean of Data Science at UMT Lahore. I speak fluent Python, dream in algorithms, and wake up thinking about neural networks! 🧠
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8 rounded-3xl border border-cyan-500/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="text-cyan-500" /> The Mission
              </h3>
              <p className="text-gray-300">
                By day, I craft AI solutions at a stealth startup. By night, I hunt bugs on HackerOne. My superpower? Making machines understand humans better! 🦸‍♂️
              </p>
            </div>
          </div>

          {/* Skills Cloud */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">My Superpowers</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 hover:border-pink-500/50 hover:scale-110 transition-all duration-300 cursor-pointer"
                  style={{
                    animation: `float ${2 + index % 3}s ease-in-out infinite`,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-12">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">My</span>
            <span className="mx-2">Epic</span>
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">Journey</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Current Role */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black p-8 rounded-2xl border border-purple-500/30">
                <div className="flex items-start gap-4">
                  <div className="text-4xl animate-bounce-slow">🤖</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                      AI Engineer @ Stealth Startup
                    </h3>
                    <p className="text-gray-400 mb-2">Feb 2025 – Present</p>
                    <p className="text-gray-300">Building the future of AI, one algorithm at a time! Can't tell you what we're building (it's stealth 🤫), but it's going to be HUGE!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* HackerOne */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black p-8 rounded-2xl border border-green-500/30">
                <div className="flex items-start gap-4">
                  <div className="text-4xl animate-pulse">🔍</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                      Security Researcher @ HackerOne
                    </h3>
                    <p className="text-gray-400 mb-2">2017 – Present</p>
                    <p className="text-gray-300">Professional bug hunter! I find vulnerabilities before the bad guys do. 8+ years of keeping the internet safe!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black p-8 rounded-2xl border border-yellow-500/30">
                <div className="flex items-start gap-4">
                  <div className="text-4xl animate-spin-slow">🎓</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                      Masters in Data Science @ UMT
                    </h3>
                    <p className="text-gray-400 mb-2">Sep 2024 – Oct 2026</p>
                    <p className="text-gray-300">Learning the dark arts of data science! Currently mastering the ways of machine learning and AI.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-12">
            <span className="bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-transparent">Cool</span>
            <span className="mx-2">Stuff</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">I Built</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-300`}></div>
                <div className="relative bg-black p-8 rounded-2xl border border-white/10 h-full transform transition-all duration-300 group-hover:scale-105">
                  <div className="text-5xl mb-4 transform transition-transform duration-300 group-hover:rotate-12">
                    {project.emoji}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    className={`inline-flex items-center gap-2 font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent hover:gap-4 transition-all duration-300`}
                  >
                    <Github size={20} />
                    Check it out
                    <ExternalLink size={16} className={hoveredProject === index ? 'animate-bounce' : ''} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-pulse">Let's</span>
            <span className="mx-2">Create</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent animate-pulse">Magic!</span>
          </h2>
          
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8">
              Got an exciting project? Need some AI wizardry? Or just want to chat about the latest in tech? 
              <span className="block mt-2 text-2xl">Hit me up! 🚀</span>
            </p>
            
            <div className="flex justify-center gap-6">
              <a
                href="mailto:ali.razzaq@example.com"
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-600/10 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:scale-110"
              >
                <Mail size={32} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-pink-500 rounded-full animate-ping"></span>
              </a>
              <a
                href="https://linkedin.com/in/alirazzaq"
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={32} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="https://github.com/alirazzaq"
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:scale-110"
              >
                <Github size={32} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
            
            <div className="mt-12 text-6xl animate-bounce">
              👇
            </div>
            <p className="text-gray-500 mt-4">
              "The best way to predict the future is to create it!" - Me, probably
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">
            © 2025 Ali Razzaq | Made with 💜 and lots of ☕
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-10deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;