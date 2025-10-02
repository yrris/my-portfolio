import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, Instagram } from 'lucide-react';

const Portfolio = () => {
  const [_scrollY, setScrollY] = useState(0);
  const [auroraPositions, setAuroraPositions] = useState([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 生成随机极光位置
  useEffect(() => {
    const generateAuroraPositions = () => {
      return [
        {
          top: Math.random() * 80 + '%',
          left: Math.random() * 80 + '%',
          delay: Math.random() * 4,
          duration: 15 + Math.random() * 10,
          color: 'blue'
        },
        {
          top: Math.random() * 80 + '%',
          left: Math.random() * 80 + '%',
          delay: Math.random() * 4,
          duration: 15 + Math.random() * 10,
          color: 'green'
        },
        {
          top: Math.random() * 80 + '%',
          left: Math.random() * 80 + '%',
          delay: Math.random() * 4,
          duration: 15 + Math.random() * 10,
          color: 'purple'
        },
        {
          top: Math.random() * 80 + '%',
          left: Math.random() * 80 + '%',
          delay: Math.random() * 4,
          duration: 15 + Math.random() * 10,
          color: 'yellow'
        },
        {
          top: Math.random() * 80 + '%',
          left: Math.random() * 80 + '%',
          delay: Math.random() * 4,
          duration: 15 + Math.random() * 10,
          color: 'cyan'
        },
        {
          top: Math.random() * 80 + '%',
          left: Math.random() * 80 + '%',
          delay: Math.random() * 4,
          duration: 15 + Math.random() * 10,
          color: 'teal'
        }
      ];
    };

    setAuroraPositions(generateAuroraPositions());
    
    const interval = setInterval(() => {
      setAuroraPositions(generateAuroraPositions());
    }, 25000);

    return () => clearInterval(interval);
  }, []);

  const getColorClass = (color) => {
    const colors = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      cyan: 'bg-cyan-500',
      teal: 'bg-teal-500'
    };
    return colors[color];
  };

  // Life photos
  const lifeImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop', title: 'Profile' },
    { id: 2, url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop', title: 'Working' },
    { id: 3, url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop', title: 'Conference' },
    { id: 4, url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop', title: 'Team' },
    { id: 5, url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop', title: 'Presentation' },
    { id: 6, url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop', title: 'Studying' },
  ];

  // Hobby/Game images
  const hobbyImages = [
    { id: 7, url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop', title: 'Gaming' },
    { id: 8, url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop', title: 'Coding' },
    { id: 9, url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop', title: 'Technology' },
    { id: 10, url: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop', title: 'Music' },
    { id: 11, url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop', title: 'Innovation' },
    { id: 12, url: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=300&fit=crop', title: 'Travel' },
  ];

  const projects = [
    {
      id: 1,
      title: 'AI Agent Platform',
      description: 'Intelligent conversational system based on LLM with multimodal interaction capabilities',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      link: 'https://github.com/yourusername/ai-agent',
      tags: ['React', 'Python', 'OpenAI']
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Modern online shopping experience with payment integration and real-time inventory',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
      link: 'https://github.com/yourusername/ecommerce',
      tags: ['Next.js', 'Node.js', 'MongoDB']
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description: 'Real-time data analytics and visualization tool with interactive charts',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      link: 'https://github.com/yourusername/dashboard',
      tags: ['Vue', 'D3.js', 'Express']
    },
    {
      id: 4,
      title: 'Mobile Social App',
      description: 'Cross-platform social networking application built with React Native',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop',
      link: 'https://github.com/yourusername/social-app',
      tags: ['React Native', 'Firebase', 'Redux']
    }
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript','Next.js','Redux','Tailwind CSS'] },
    { category: 'Backend', items: ['Java', 'Go','Node.js', 'Python','PostgreSQL','MySQL', 'Redis','MongoDB','RabbitMQ','RPC'] },
    { category: 'DevOps', items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Kubernetes'] },
    { category: 'AI/ML', items: ['LangChain', 'OpenAI API', 'RAG'] }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Dynamic Aurora Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {auroraPositions.map((aurora, index) => (
          <div
            key={index}
            className={`absolute w-96 h-96 ${getColorClass(aurora.color)} rounded-full mix-blend-screen filter blur-3xl opacity-0 transition-all`}
            style={{
              top: aurora.top,
              left: aurora.left,
              animation: `auroraGlow ${aurora.duration}s ease-in-out ${aurora.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-green-500 p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <User size={48} className="text-blue-400" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 text-transparent bg-clip-text tracking-tight">
            Peter Griffin
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Backend Developer | AI Enthusiast
          </p>
          
          <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about building innovative web applications and products. 
            Experienced in both frontend and backend development with a focus on 
            user experience and code quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
              Get In Touch
            </a>
            <a href="#projects" className="px-8 py-3 border border-blue-500 rounded-full font-semibold hover:bg-blue-500/10 transition-all">
              View Projects
            </a>
            <a href="#projects" className="px-8 py-3 border border-blue-500 rounded-full font-semibold hover:bg-blue-500/10 transition-all">
              To My Blogs
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Code className="text-green-400" />
            Tech Stack
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Images - P5 Style */}
      <section 
        className="relative py-20 overflow-hidden w-full"
        // style={{
        //   background: 'linear-gradient(135deg, #1a1a1a 0%, #2d0a0a 50%, #1a1a1a 100%)',
        // }}
      >
        <div className="absolute inset-0 opacity-10" style={{
          // backgroundImage: 'repeating-linear-gradient(45deg, #ff0000 0px, #ff0000 2px, transparent 2px, transparent 10px)',
        }}></div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 relative z-10">
          Interests & Hobbies
        </h2>

        {/* Row 1 - Life Photos (scroll right) */}
        <ScrollingRow images={lifeImages} direction="right" />

        {/* Row 2 - Hobby/Game Photos (scroll left) */}
        <ScrollingRow images={hobbyImages} direction="left" />
      </section>

      {/* Projects */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Briefcase className="text-blue-400" />
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <ExternalLink className="text-blue-400 group-hover:text-green-400 transition-colors flex-shrink-0" size={20} />
                  </div>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-12 leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about tech!
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a 
              href="mailto:your.email@example.com"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-500/50 transition-all group"
            >
              <Mail className="text-blue-400 group-hover:text-green-400 transition-colors flex-shrink-0" />
              <span className="truncate">Email</span>
            </a>
            
            <a 
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-500/50 transition-all group"
            >
              <Github className="text-blue-400 group-hover:text-green-400 transition-colors flex-shrink-0" />
              <span>GitHub</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-500/50 transition-all group"
            >
              <Linkedin className="text-blue-400 group-hover:text-green-400 transition-colors flex-shrink-0" />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-500/50 transition-all group"
            >
              <Instagram className="text-blue-400 group-hover:text-green-400 transition-colors flex-shrink-0" />
              <span>Instagram</span>
            </a>
            
            <a 
              href="https://x.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-500/50 transition-all group"
            >
              <svg className="w-5 h-5 text-blue-400 group-hover:text-green-400 transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>X (Twitter)</span>
            </a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2025 Peter. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes auroraGlow {
          0%, 100% {
            opacity: 0.15;
            transform: translate(0, 0) scale(1);
          }
          50% {
            opacity: 0.25;
            transform: translate(20px, 20px) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

// Scrolling Row Component
const ScrollingRow = ({ images, direction }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const currentTranslate = useRef(0);

  useEffect(() => {
    if (!scrollRef.current || isPaused) return;

    const scroll = () => {
      const speed = 0.5; // pixels per frame
      const imageWidth = 320 + 24; // 80 * 4 (w-80) + gap-6
      const totalWidth = imageWidth * images.length;

      if (direction === 'right') {
        currentTranslate.current -= speed;
        if (Math.abs(currentTranslate.current) >= totalWidth) {
          currentTranslate.current = 0;
        }
      } else {
        currentTranslate.current += speed;
        if (currentTranslate.current >= 0) {
          currentTranslate.current = -totalWidth;
        }
      }

      scrollRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
      animationRef.current = requestAnimationFrame(scroll);
    };

    // Initialize position for left scrolling
    if (direction === 'left' && currentTranslate.current === 0) {
      const imageWidth = 320 + 24;
      const totalWidth = imageWidth * images.length;
      currentTranslate.current = -totalWidth;
      scrollRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, direction, images.length]);

  return (
    <div 
      className="relative w-full mb-8"
      style={{
        overflow: 'hidden',
        maxWidth: '100vw',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setHoveredId(null);
      }}
    >
      <div 
        ref={scrollRef}
        className="flex gap-6"
        style={{
          width: 'max-content',
          willChange: 'transform',
        }}
      >
        {[...images, ...images, ...images].map((img, idx) => (
          <div
            key={`${img.id}-${idx}`}
            className="flex-shrink-0 w-80 h-60 rounded-lg overflow-hidden cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredId(img.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              opacity: isPaused && hoveredId !== null && hoveredId !== img.id ? 0.3 : 1,
              transform: hoveredId === img.id ? 'scale(1.05)' : 'scale(1)',
            }}
          >
            <img 
              src={img.url} 
              alt={img.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;