import { motion } from "framer-motion";
import profileImage from '../../assets/portfolio/profile.jpg';
import { MdArrowRightAlt, MdDownload } from 'react-icons/md';
import { Link } from 'react-scroll';

const Introduction = () => {
  const textAnimate = {
    offscreen: { x: -200, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 10
      }
    }
  };

  const imageAnimate = {
    offscreen: { y: -1000, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay: 3
      }
    }
  };

  return (
    <div name='home' className='text-white min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row '>
        <div className='flex flex-col justify-center flex-grow mt-28'>
          <motion.h2 variants={textAnimate} initial="offscreen" animate="onscreen" className='text-4xl sm:text-7xl font-bold text-white'>
            I am a Full Stack Web Developer
          </motion.h2>
          <p className='text-gray-500 max-w-md py-4'>
            Driven by a deep passion for creating interactive websites that foster high growth
            and value for businesses, I am committed to continuous learning and rapid
            adaptation. With a profound understanding of all stages of web development, I am committed to deliver
            exceptional results.
          </p>
          <div className='flex gap-5'>
            <div>
              <Link to='portfolio' smooth duration={400} className='group flex px-6 w-fit py-3 my-2 items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md cursor-pointer'>
                portfolio
                <span className='group-hover:rotate-90 duration-300'><MdArrowRightAlt size={25} /></span>
              </Link>
            </div>
            <div>
              <a href="/Resume.pdf" download>
                <button className='group flex px-6 w-fit py-3 my-2 items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md cursor-pointer'>
                  Resume
                  <span className='group-hover:opacity-0 duration-300'>
                    <MdDownload size={25} />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className='flex justify-center '>
          <motion.img
            src={profileImage}
            alt=''
            className='rounded-2xl w-2/3 md:w-full max-w-md'
            variants={imageAnimate}
            initial="offscreen"
            animate="onscreen"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
``
