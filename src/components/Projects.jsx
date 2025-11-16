import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Breaker project

import finder from '../data/breaker.png'; 
import finder1 from '../data/breaker2.png';
import finder2 from '../data/breaker2.1.png';
import finder3 from '../data/breaker3.png';
import finder4 from '../data/breaker4.png';

// Import images for Cells Project
import cells from '../data/cells.png';
import cell0 from '../data/cell0.jpg';
import cell1 from '../data/cell1.png';
import cell2 from '../data/cell2.png';
import cell3 from '../data/cell3.png';
import cell4 from '../data/cell4.png';
import cell5 from '../data/cell5.jpg';

// Import images for IcebergAI Project
import iceberg from '../data/capita1.png'; 
import iceberg1 from '../data/ic1.png';
import iceberg2 from '../data/ic2.png';
import iceberg3 from '../data/ic3.png'; 
import iceberg4 from '../data/ic4.png';
import iceberg5 from '../data/ic5.png';
import iceberg6 from '../data/ic6.png';


// import images for Smart Loadn Project
import sl1 from '../data/sl1.png';
import sl3 from '../data/sl3.png';
import sl4 from '../data/sl4.png';
import sl6 from '../data/sl6.png';
import sl7 from '../data/sl7.png';
import sl8 from '../data/sl8.png';
import sl9 from '../data/sl9.png';


// import images for Preprox Project
import logo from '../data/preproxx.jpg'
import pre from '../data/preprox.png';
import pre1 from '../data/preprox1.png';
import pre2 from '../data/preprox2.png';
 
import pre4 from '../data/preprox4.png';


// Import images for Chat with Me Project

import chat1 from '../data/chat1.jpeg';
import chat2 from '../data/chat2.jpeg';


// Sample projectsData - replace with your actual import
const projectsData = [


  {
    title: 'Chat with Me – Interactive CV Assistant',
    description: "An AI-powered conversational CV that lets recruiters and collaborators ask questions and receive instant tailored answers based on your professional profile.",
    image: chat1,
    screenshots: [chat1, chat2], // Replace with actual screenshots
    techStack: [
    "LangChain",
    "Gemini 2.5 Flash",
    "Google Embeddings",
    "Retrieval-Augmented Generation (RAG)",
    "Python",
    "Custom HTML & CSS"
    ],
    link: 'https://github.com/OweenCesar/Chat-with-me-OweenBot',
    fullDescription:  "Traditional CVs require readers to scroll and manually search for information. 'Chat with Me' transforms your CV into an interactive chatbot that answers questions in real time using your personal data. Built using LangChain and Gemini 2.5 Flash, the system embeds your CV information using Google Embeddings and performs retrieval-augmented generation (RAG) to ensure precise, context-aware responses. The clean frontend, crafted in HTML and CSS, offers an intuitive conversational interface for seamless interactions.",
    features: [
    "Conversational UI for CV-like interactions",
    "RAG-based personalized answers using your real profile data",
    "Fast Gemini-powered query responses",
    "Embeddings-based retrieval using Google Embeddings",
    "Simple and clean frontend built with HTML & CSS",
    "Ideal for recruiters, collaborators, or networking"
    ],
    github: 'https://github.com/OweenCesar/Chat-with-me-OweenBot'
  },  


  {
    title: 'AI-Powered LinkedIn URL Finder',
    description: "Give a name → get the most likely LinkedIn URL plus a concise, structured summary with two interesting facts.",
    image: finder,
    screenshots: [finder1, finder2, finder3, finder4], // Replace with actual screenshots
    techStack: [
    "LangChain (Agents & Tools)",
    "Gemini 2.5 Flash",
    "Tavily Search API",
    "Python",
    "Prompt Engineering",
    ".env config"
    ],
    link: '#',
    fullDescription:  "An agentic workflow that resolves a person’s LinkedIn profile from a name and generates a clean, structured brief. The agent first uses Tavily to locate the most likely LinkedIn URL, then a lightweight scraper collects publicly visible fields. A prompt-engineered chain with Gemini 2.5 Flash produces a JSON-typed summary (short bio + two noteworthy facts). Built with LangChain tools and output parsing, plus environment-based configuration for API keys.",
    features: [
    "Name → LinkedIn URL resolution (Tavily + disambiguation)",
    "LLM-generated profile summary + 2 facts",
    "Structured JSON output & validation",
    "Agent/tool architecture (LangChain)",
    "Optional photo URL extraction",
    "Batch mode & simple retries"
    ],
    github: 'https://github.com/OweenCesar/Breaker'
  },
  {
    title: 'Machine Learning Image-Based Classification of Sperm Cells',
    description: 'Applied Random Forest, KNN, and SVM to classify 3000 images of normal sperm, abnormal sperm, and non-sperm cells',
    image: cells,
    screenshots: [cell0, cell1, cell2, cell3, cell4, cell5], // Replace with actual screenshots
    techStack: ['Numpy', 'Python', 'ScikitLearn'],
    link: '#',
    fullDescription: 'Machine Learning lecture project on medical image classification. Performed data exploration and preprocessing on 3000 images, applied feature extraction, and trained models using Random Forest, SVM, and KNN with hyperparameter tuning. The models were compared to evaluate performance on sperm cell image classification, and our final results and methodology were presented in class (some slides shown below).',
    features: ['Feature Extraction', 'Hyperparameter tuning', 'Medical imaging', 'Data preprocessing', 'Data exploration'],
    github: 'https://github.com/OweenCesar/Sperm-Classification'
  },
  {
    title: 'IcebergAI',
    description: 'Web application developed in the Software Engineering lecture to showcase a Titanic survival prediction tool and promote AI-related courses.',
    image:  iceberg,
    screenshots: [ iceberg1, iceberg2, iceberg3, iceberg4, iceberg5, iceberg6 ],  
    techStack: ['React', 'Vite', 'CSS', 'Python', ' Docker', 'PostgreSQL', 'FastAPI', 'Postgresql'],
    link: '#',
    fullDescription: 'As part of the Software Engineering lecture, our team built a web platform that lets users test different machine learning models to predict whether they would have survived the Titanic disaster, while also featuring a course promotion section. The project was structured across multiple repositories (frontend, backend, model backend, Docker Compose, and project management). I led the frontend development, creating a modern interface with React + Vite and polished CSS design. Additionally, I acted as project manager, organizing meetings and coordinating the team using Scrum with three sprints to ensure smooth progress and delivery.',   
    features: ['Data Bases',
  'Course promotion section',
  'Modern React + Vite frontend', 'Backend connection', 
  'Team coordination with Scrum (3 sprints) on Gitlab',
  'Docker-based architecture' ],
    github: 'https://mygit.th-deg.de/schober-teaching/student-projects/ain-23-software-engineering/ss-25/IcebergAI'
  },
  {
    title: 'SmartLoan: Machine Learning for Loan Approval Prediction',
    description: 'SmartLoan: AI-powered web app for predicting loan approval, built during the Assistance Systems lecture.',    image:  sl8,
    screenshots: [ sl1, sl3, sl4, sl6, sl7, sl8, sl9], // Replace with actual screenshots
    techStack: ['Pandas', 'Matplotlib', 'Scikit-learn', 'Streamlit', 'Rasa'],
    link: '#',
    fullDescription: 'SmartLoan is a Python-based web application developed as part of the Assistance Systems lecture. The system leverages data preprocessing, feature engineering, and regression-based machine learning algorithms to estimate the likelihood of loan approval. Built with libraries such as pandas, NumPy, scikit-learn, and Streamlit, the app not only provides predictive modeling but also offers interactive dashboards and visualizations for exploring the used dataset. A key feature is LoanBot, a Rasa-powered chatbot that assists users with financial terminology and loan requirements, making the platform more accessible. The complete system architecture and design are documented in the project’s GitLab repository.',  
    features: [
  'Loan approval prediction using regression models',
  'Interactive Streamlit dashboard with data visualizations',
  'Rasa-powered LoanBot chatbot for user assistance',
  'User-friendly financial risk assessment tool',
  'Documented system design and implementation on GitLab'
],
    github: 'https://mygit.th-deg.de/ob26013/recommendation-project'
  },
  {
    title: 'PreProx: Preprocessing & Exploration',
    description: 'Automated ML preprocessing with Streamlit: missing values, scaling, and encoding.',
    image:    logo,
    screenshots: [
     pre,  pre1, pre2 , pre4
    ],  
    techStack: ['Streamlit', 'Pandas', 'Numpy', 'Scikit-learn'],
    link: '#',
    fullDescription: 'Built as a time-saving solution during busy university days, this web app streamlines the data preprocessing phase of machine learning projects. With an intuitive interface, users can quickly apply transformations such as handling missing values, feature scaling, encoding, and custom data adjustments. The app outputs a clean, well-structured dataset, ready for modeling. Developed with Streamlit, Python, NumPy, and scikit-learn. ',
    features: ['Automated preprocessing', 'Data visualization' , 'Built with Python, NumPy, and scikit-learn'],
    github: 'https://github.com/OweenCesar/preprox'
  },
  {
    title: 'New Entry - Comming soon',
    description: 'Coming soon',
    image: 'https://images.unsplash.com/photo-1489599363203-6eb2bc6d9473?w=400&h=250&fit=crop&crop=center',
    screenshots: [
      'https://images.unsplash.com/photo-1489599363203-6eb2bc6d9473?w=400&h=250&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1489599363203-6eb2bc6d9473?w=400&h=250&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1489599363203-6eb2bc6d9473?w=400&h=250&fit=crop&crop=center'
    ], // Replace with actual screenshots
    techStack: ['Coming soon' ],
    link: '#',
    fullDescription: ' Coming soon',
    features: ['Coming soon'],
    github: 'https://github.com'
  }
];

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedScreenshot, setSelectedScreenshot] = useState(0);
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
    setSelectedScreenshot(0);
    setIsAutoPlaying(false);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedScreenshot(0);
    setIsAutoPlaying(true);
  };

  return (
    <div className="projects-slider-container">
      <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
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
          max-width: 1000px;
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
          z-index: 10;
        }

        .close-btn:hover {
          background: rgba(100, 255, 218, 0.2);
          transform: scale(1.1);
          box-shadow: 0 0 15px rgba(100, 255, 218, 0.3);
        }

        /* Screenshots Gallery Styles */
        .screenshots-section {
          margin-bottom: 2rem;
        }

        .screenshot-gallery {
          position: relative;
        }

        .main-screenshot {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .screenshot-thumbnails {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .screenshot-thumbnail {
          width: 100px;
          height: 60px;
          object-fit: cover;
          border-radius: 8px;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          opacity: 0.7;
        }

        .screenshot-thumbnail:hover {
          opacity: 1;
          border-color: rgba(100, 255, 218, 0.5);
          transform: scale(1.05);
        }

        .screenshot-thumbnail.active {
          opacity: 1;
          border-color: #64ffda;
          box-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
        }

        .screenshot-counter {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.7);
          color: #64ffda;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.9rem;
          backdrop-filter: blur(10px);
        }

        .modal-image {
          display: none; /* Hide the original main image since we're using screenshots */
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
          font-family: 'Inter', sans-serif;
          color: #cbd5e1;
          color: #94a3b8;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          letter-spacing: 0.3px
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
          justify-content: center;
          gap: 1.5rem;
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
            max-width: calc(100vw - 2rem);
          }

          .modal-header,
          .modal-body {
            padding: 1.5rem;
          }

          .main-screenshot {
            height: 250px;
          }

          .screenshot-thumbnails {
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .screenshot-thumbnail {
            width: 80px;
            height: 50px;
          }

          .modal-links {
            flex-direction: column;
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
              </div>

              <div className="modal-body">
                <h2 className="modal-title">{selectedProject.title}</h2>
                
                <p className="modal-description">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>

                {/* Screenshots Gallery */}
                <div className="screenshots-section">
                  <div className="screenshot-gallery">
                    <div className="screenshot-counter">
                      {selectedScreenshot + 1} / {selectedProject.screenshots.length}
                    </div>
                    <motion.img 
                      key={selectedScreenshot}
                      src={selectedProject.screenshots[selectedScreenshot]} 
                      alt={`${selectedProject.title} - Screenshot ${selectedScreenshot + 1}`}
                      className="main-screenshot"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="screenshot-thumbnails">
                      {selectedProject.screenshots.map((screenshot, index) => (
                        <motion.img
                          key={index}
                          src={screenshot}
                          alt={`Thumbnail ${index + 1}`}
                          className={`screenshot-thumbnail ${index === selectedScreenshot ? 'active' : ''}`}
                          onClick={() => setSelectedScreenshot(index)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

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
                      View Code on Github
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