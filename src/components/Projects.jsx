import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import finder from '../data/finder.png'; 
// Sample projectsData - replace with your actual import
const projectsData = [
  {
    title: 'AI-Powered LinkedIn URL Finder',
    description: 'An AI agent that retrieves the LinkedIn profile URL of a person based on their name.',
    image:  finder,
    techStack: ['LangChain', 'HuggingFace', 'Gemini API', 'Prompt Engineering'],
    link: '#',
    fullDescription: 'A sophisticated AI-powered tool that leverages advanced language models and web scraping techniques to find LinkedIn profiles. Uses natural language processing to match names with profile data, implementing smart search algorithms and data validation to ensure accurate results.',
    features: ['AI-powered search', 'Natural language processing', 'Data validation', 'Batch processing'],
    github: 'https://github.com'
  },
  {
    title: 'Image-Based Classification of Sperm Cells',
    description: 'Applied Random Forest, KNN, and SVM to classify 3000 images of normal sperm, abnormal sperm, and non-sperm cells',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center',
    techStack: ['Numpy', 'Python', 'ScikitLearn'],
    link: '#',
    fullDescription: 'Advanced machine learning project focused on medical image classification. Implemented multiple classification algorithms to analyze and categorize sperm cell images with high accuracy, contributing to automated fertility analysis systems.',
    features: ['Multi-algorithm approach', 'High accuracy classification', 'Medical imaging', 'Data preprocessing'],
    github: 'https://github.com'
  },
  {
    title: 'IcebergAI',
    description: 'Full-stack web application for ML model management and prediction serving.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center',
    techStack: ['Python', 'SQL', 'React', 'Vite', 'Docker'],
    link: '#',
    fullDescription: 'Comprehensive platform for machine learning model lifecycle management. Features model deployment, monitoring, and serving capabilities with a modern React frontend and robust Python backend infrastructure.',
    features: ['Model deployment', 'Real-time monitoring', 'Scalable architecture', 'User management'],
    github: 'https://github.com'
  },
  {
    title: 'SmartLoan',
    description: 'Developed an end-to-end ML system to predict loan approval using toy datasets.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center',
    techStack: ['Pandas', 'Matplotlib', 'Scikit-learn', 'Streamlit', 'Rasa'],
    link: '#',
    fullDescription: 'End-to-end machine learning solution for loan approval prediction. Incorporates data preprocessing, feature engineering, model training, and deployment with an interactive Streamlit interface.',
    features: ['Predictive modeling', 'Interactive dashboard', 'Risk assessment', 'Automated decisions'],
    github: 'https://github.com'
  },
  {
    title: 'PreProx',
    description: 'Automated ML preprocessing with Streamlit: missing values, scaling, and encoding.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center',
    techStack: ['Streamlit', 'Pandas', 'Numpy', 'Scikit-learn'],
    link: '#',
    fullDescription: 'Streamlined data preprocessing tool that automates common machine learning preparation tasks. Handles missing values, feature scaling, encoding, and data transformation with an intuitive web interface.',
    features: ['Automated preprocessing', 'Data visualization', 'Export capabilities', 'Custom transformations'],
    github: 'https://github.com'
  },
  {
    title: 'Recommendation Engine',
    description: 'Movie recommender based on user behavior and collaborative filtering.',
    image: 'https://images.unsplash.com/photo-1489599363203-6eb2bc6d9473?w=400&h=250&fit=crop&crop=center',
    techStack: ['React', 'GraphQL', 'scikit-surprise'],
    link: '#',
    fullDescription: 'Sophisticated recommendation system using collaborative filtering and content-based approaches. Analyzes user preferences and movie characteristics to provide personalized recommendations.',
    features: ['Collaborative filtering', 'Content-based recommendations', 'User profiling', 'Real-time suggestions'],
    github: 'https://github.com'
  }
];

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(projectsData.length / projectsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getCurrentProjects = () => {
    const startIndex = currentSlide * projectsPerSlide;
    return projectsData.slice(startIndex, startIndex + projectsPerSlide);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsAutoPlaying(false);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsAutoPlaying(true);
  };

  return (
    <div className="projects-slider-container">
      <style jsx>{`
        .projects-slider-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 2rem;
          position: relative;
        }

        .slider-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .slider-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          background: linear-gradient(135deg, #f8fafc 0%, #64ffda 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .slider-subtitle {
          color: #94a3b8;
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .slider-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          background: linear-gradient(145deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(100, 255, 218, 0.1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
        }

        .slider-content {
          padding: 2rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          min-height: 600px;
        }

        .project-slide-card {
          background: linear-gradient(145deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8));
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(100, 255, 218, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          backdrop-filter: blur(10px);
          top: 4rem;
        }

        .project-slide-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: #64ffda;
          box-shadow: 0 20px 40px -10px rgba(100, 255, 218, 0.2);
        }

        .project-slide-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(100, 255, 218, 0.05) 0%, 
            transparent 50%, 
            rgba(100, 255, 218, 0.05) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .project-slide-card:hover::before {
          opacity: 1;
        }

        .project-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .project-slide-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-card-content {
          padding: 1.5rem;
          position: relative;
          z-index: 2;
          top: 0.1rem;
        }

        .project-card-title {
          color: #f8fafc;
          font-size: 2.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          transition: color 0.3s ease;
        }

        .project-slide-card:hover .project-card-title {
          color: #64ffda;
        }

        .project-card-description {
          color: #94a3b8;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .project-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: rgba(100, 255, 218, 0.1);
          color: #64ffda;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(100, 255, 218, 0.2);
          transition: all 0.2s ease;
        }

        .tech-tag:hover {
          background: rgba(100, 255, 218, 0.2);
          transform: translateY(-1px);
        }

        .slider-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin-top: 2rem;
          padding: 1rem;
        }

        .control-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid rgba(100, 255, 218, 0.3);
          background: rgba(100, 255, 218, 0.1);
          color: #64ffda;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .control-btn:hover {
          background: rgba(100, 255, 218, 0.2);
          border-color: #64ffda;
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(100, 255, 218, 0.3);
        }

        .slider-dots {
          display: flex;
          gap: 0.5rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(100, 255, 218, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #64ffda;
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
        }

        .autoplay-toggle {
          background: transparent;
          border: 1px solid rgba(100, 255, 218, 0.3);
          color: #64ffda;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-left: 1rem;
        }

        .autoplay-toggle:hover {
          background: rgba(100, 255, 218, 0.1);
          border-color: #64ffda;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
        }

        .modal-content {
          background: linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95));
          border-radius: 20px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          border: 1px solid rgba(100, 255, 218, 0.2);
          backdrop-filter: blur(20px);
        }

        .modal-header {
          position: relative;
          padding: 2rem 2rem 0;
        }

        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(100, 255, 218, 0.1);
          border: 1px solid rgba(100, 255, 218, 0.3);
          color: #64ffda;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1.2rem;
        }

        .close-btn:hover {
          background: rgba(100, 255, 218, 0.2);
          transform: scale(1.1);
          box-shadow: 0 0 15px rgba(100, 255, 218, 0.3);
        }

        .modal-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 1.5rem;
        }

        .modal-body {
          padding: 0 2rem 2rem;
        }

        .modal-title {
          color: #f8fafc;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #f8fafc 0%, #64ffda 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .modal-description {
          color: #94a3b8;
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .modal-section {
          margin-bottom: 2rem;
        }

        .modal-section-title {
          color: #64ffda;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .features-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .feature-item {
          background: rgba(100, 255, 218, 0.05);
          padding: 1rem;
          border-radius: 8px;
          border: 1px solid rgba(100, 255, 218, 0.1);
          color: #f8fafc;
          font-size: 0.95rem;
        }

        .modal-tech-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .modal-tech-tag {
          background: rgba(100, 255, 218, 0.15);
          color: #64ffda;
          padding: 0.6rem 1.2rem;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid rgba(100, 255, 218, 0.3);
        }

        .modal-links {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .modal-link {
          background: transparent;
          border: 2px solid #64ffda;
          color: #64ffda;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .modal-link:hover {
          background: rgba(100, 255, 218, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .slider-controls {
            flex-direction: column;
            gap: 1.5rem;
          }

          .modal-content {
            margin: 1rem;
            max-height: calc(100vh - 2rem);
          }

          .modal-header,
          .modal-body {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="slider-header">
        <motion.h2 
          className="slider-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          className="slider-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore my latest work in AI, machine learning, and web development
        </motion.p>
      </div>

      <div className="slider-wrapper">
        <div className="slider-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="projects-grid"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ 
                duration: 0.5, 
                ease: "easeInOut",
                staggerChildren: 0.1 
              }}
            >
              {getCurrentProjects().map((project, index) => (
                <motion.div
                  key={`${currentSlide}-${index}`}
                  className="project-slide-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => openModal(project)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-card-content">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-description">{project.description}</p>
                    <div className="project-tech-tags">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="tech-tag">+{project.techStack.length - 3}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="slider-controls">
          <button className="control-btn" onClick={prevSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15 18L9 12L15 6V18Z"/>
            </svg>
          </button>

          <div className="slider-dots">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          <button className="control-btn" onClick={nextSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 6L15 12L9 18V6Z"/>
            </svg>
          </button>

          <button 
            className="autoplay-toggle"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          >
            {isAutoPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <button className="close-btn" onClick={closeModal}>
                  ×
                </button>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="modal-image"
                />
              </div>

              <div className="modal-body">
                <h2 className="modal-title">{selectedProject.title}</h2>
                
                <p className="modal-description">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>

                {selectedProject.features && (
                  <div className="modal-section">
                    <h3 className="modal-section-title">
                      <span>🚀</span> Key Features
                    </h3>
                    <div className="features-list">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="modal-section">
                  <h3 className="modal-section-title">
                    <span>⚡</span> Technologies Used
                  </h3>
                  <div className="modal-tech-grid">
                    {selectedProject.techStack.map((tech, index) => (
                      <span key={index} className="modal-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-links">
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="modal-link"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  )}
                  {selectedProject.link && selectedProject.link !== '#' && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="modal-link"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19V6.413L11.207 14.207L9.793 12.793L17.585 5H13V3H21Z"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;