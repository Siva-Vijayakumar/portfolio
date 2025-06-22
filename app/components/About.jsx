import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
  return (
    <motion.div id='about' className='w-full px-6 sm:px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'>
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-4xl sm:text-5xl font-Ovo'>
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex flex-col lg:flex-row items-center gap-10 sm:gap-20 my-10 sm:my-20'>
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-48 sm:w-64 md:w-80 rounded-3xl'>
          <Image src={assets.profile_img} alt='user' className='w-full max-w-full rounded-3xl' />
        </motion.div>

        {/* Description & Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1 text-center sm:text-left'>

          <p className='mb-6 sm:mb-10 max-w-2xl font-Ovo'>
            I'm a passionate full-stack developer currently studying Computer Science. I love learning new technologies and building projects that challenge me. Every day, I work on improving my skills and exploring innovative solutions. My journey is just getting started, and I'm excited to see where it takes me!
          </p>

          {/* Info List */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto sm:mx-0'>
            
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className='border border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                key={index}>
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-6 sm:w-7 mt-2 sm:mt-3 mx-auto sm:mx-0' />
                <h3 className='my-2 sm:my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className='mt-6 sm:mt-10 mb-4 sm:mb-6 text-gray-700 font-Ovo dark:text-white/80'>
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className='flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-5'>
            
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                key={index}>
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>

        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
