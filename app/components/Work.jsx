import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaGithub } from 'react-icons/fa';

// Separate component for each work card
const WorkCard = ({ project, isMobile, isDarkMode }) => {
  const [overlayVisible, setOverlayVisible] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 w-[280px] h-[350px] mx-auto"
    >
      {/* Background Image */}
      <div
        className="w-full h-44 bg-cover bg-center transition-all duration-300"
        style={{ backgroundImage: `url(${project.bgImage})` }}
      ></div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold dark:text-white">{project.title}</h2>
        <div className="flex flex-wrap mt-2 gap-1">
          {project.techstack.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full dark:bg-gray-700 dark:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-300 mt-2">
          {project.description}
        </p>
      </div>

      {/* Overlay */}
      <motion.div
        // On mobile, animate based on overlayVisible; on desktop, use hover
        initial={{ opacity: 0 }}
        animate={
          isMobile
            ? overlayVisible
              ? { opacity: 1 }
              : { opacity: 0 }
            : {}
        }
        whileHover={!isMobile ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-black bg-opacity-80 opacity-0 flex flex-col items-center justify-center text-white px-4 text-center"
        onClick={(e) => {
          // Prevent the click from bubbling up on mobile
          if (isMobile) {
            e.stopPropagation();
            setOverlayVisible((prev) => !prev);
          }
        }}
      >
        <h2 className="text-lg font-semibold">{project.title}</h2>
        <p className="text-xs text-gray-300 mt-2">{project.description}</p>
        <div className="flex space-x-3 mt-3">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black p-2 rounded-full hover:bg-lime-300 transition"
          >
            <FaEye size={18} />
          </a>
          <a
            href={project.gitubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black p-2 rounded-full hover:bg-lime-300 transition"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Work = ({ isDarkMode }) => {
  // Track if the screen is mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="w-full px-[10%] py-10 scroll-mt-20"
    >
      {/* Heading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo dark:text-gray-300"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-4xl font-Ovo dark:text-white"
      >
        My Latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-xl mx-auto mt-4 mb-10 font-Ovo dark:text-gray-400"
      >
        Explore my projects showcasing my front-end development expertise.
      </motion.p>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-9 max-w-[90%] mx-auto"
      >
        {workData.map((project, index) => (
          <WorkCard
            key={index}
            project={project}
            isMobile={isMobile}
            isDarkMode={isDarkMode}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
