import html from '../../assets/portfolio/html.png'
import css from '../../assets/portfolio/css.png'
import javaScript from '../../assets/portfolio/javascript.png'
import react from '../../assets/portfolio/react.png'
import gitHub from '../../assets/portfolio/github.png'
import tailwind from '../../assets/portfolio/tailwind.png'
import mongodb from '../../assets/portfolio/mongodb.png'
import express from '../../assets/portfolio/nodejs-express.png'


const Experience = () => {


  return (
    <div name='technologies' className=' bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl border-b-4 font-bold border-gray-500 inline p-2'>Technologies </p>
          <p className='py-6'>These are the technologies I have work with</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          <div className='shadow-md  hover:scale-105 duration-500 py-2 rounded-lg'>
            <img src={html} alt="" className=' w-20 max-auto' />
            <p className=' mt-4'>HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;