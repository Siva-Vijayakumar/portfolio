import Image from "next/image";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid"; // Importing the close icon
import { assets } from "@/assets/assets";
import {motion} from 'motion/react'

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "Bootstrap & Tailwind", level: 85 },
  { name: "React.js", level: 80 },
  { name: "React Native", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Express.js", level: 75 },
  { name: "Python", level: 80 },
  { name: "MongoDB", level: 70 },
  { name: "Flutter", level: 80 },
  { name: "Git & GitHub", level: 80 },
  { name: "Postman", level: 70 },
  { name: "Sql & Postgresql", level: 80 },


];

const certificates = [
  {
    title: "Full Stack Development",
    image: assets.fullstack,
    description: "Certified by Udemy",
  },
  {
    title: "100 Days of Python Development",
    image: assets.python,
    description: "Certified by Udemy",
  },
  {
    title: "Backend Development",
    image: assets.flutter,
    description: "Certified by Udemy ",
  },
];

const Skills = ({isDarkMode}) => {
  return (
    <div id="skills" className="max-w-6xl mx-auto px-6 py-12 ">
      <motion.h2
       initial={{opacity: 0, y: -20}}
       whileInView={{opacity: 1, y: 0}}
       transition={{duration: 0.5, delay: 0.3}}
       className="text-4xl font-extrabold text-center mb-12 text-gray-800 font-Ovo dark:text-white ">
        Skills
      </motion.h2>
      <motion.div 
      initial={{opacity: 0, scale: 0.9, y: -20}}
      whileInView={{opacity: 1, scale: 1, y: 0}}
      transition={{duration: 0.8, type: "spring", stiffness: 100}}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5, delay: index * 0.13 , type: "spring", stiffness: 100}}
          key={index} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-md font-semibold text-gray-800 font-Outfit dark:text-white">
                {skill.name}
              </span>
              <span className="text-md font-medium text-gray-500 dark:text-gray-200">
                {skill.level}%
              </span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full transition-all duration-1000 shadow-md"
                style={{ width: `${skill.level}% `}}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Certificates = ({isDarkMode}) => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div
    id="certificates"
     className="max-w-4xl mx-auto px-6 py-12">
      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.3}}
      className="text-4xl font-extrabold text-center mb-12 text-gray-800 font-Ovo dark:text-white">
        Certificates
      </motion.h2>
      <motion.ul 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.8, type: "spring", stiffness: 100}}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.li
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: index * 0.13, type: "spring", stiffness: 100}}
            key={index}
            className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-xl dark:hover:bg-darkHover dark:hover:shadow-2xl"
            onClick={() => setSelectedCert(cert)}
          >
            <div className="w-full h-40 relative">
              <Image
                src={cert.image}
                alt={cert.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">
              {cert.title}
            </h3>
            <p className="text-gray-600 text-sm dark:text-gray-200">{cert.description}</p>
          </motion.li>
        ))}
      </motion.ul>

      {selectedCert && (
        <Dialog
          open={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md px-4 "
        >
          <div className="absolute inset-0" onClick={() => setSelectedCert(null)} />
          <div className="relative bg-white rounded-xl p-6 w-[95%] sm:w-[80%] lg:w-[60%] max-w-4xl shadow-xl flex flex-col items-center">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => setSelectedCert(null)}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <h4 className="text-2xl font-bold mb-4 text-gray-800 text-center">
              {selectedCert.title}
            </h4>
            <div className="relative w-full h-[60vh]">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                layout="fill"
                objectFit="contain"
                className="rounded-lg shadow-md"
                priority
              />
            </div>
            <p className="text-sm text-gray-600 mt-4">{selectedCert.description}</p>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export { Skills, Certificates };