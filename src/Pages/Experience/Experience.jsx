import html from '../../assets/portfolio/html.png'
import css from '../../assets/portfolio/css.png'
import javaScript from '../../assets/portfolio/javascript.png'
import react from '../../assets/portfolio/react.png'
import tailwind from '../../assets/portfolio/tailwind.png'
import gitHub from '../../assets/portfolio/github.png'

import mongodb from '../../assets/portfolio/mongodb.png'
import express from '../../assets/portfolio/nodejs-express.png'


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500"
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500"
    },
    {
      id: 3,
      src: javaScript,
      title: "JavaScript",
      style: "shadow-yellow-500"
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600"
    },
    {
      id: 5,
      src: tailwind,
      title: "TailWind",
      style: "shadow-sky-400"
    },
    {
      id: 6,
      src: gitHub,
      title: "GitHub",
      style: "shadow-gray-400"
    },
    {
      id: 7,
      src: mongodb,
      title: "Mongodb",
      style: "shadow-green-400"
    },
    {
      id: 8,
      src: express,
      title: "Nodejs & Express",
      style: "shadow-green-400"
    }

  ]

  return (
    <div name='technologies' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className=' p-4 flex flex-col justify-center w-full h-full  text-white'>
        <div>
          <p className='text-4xl border-b-4 font-bold border-gray-500 inline p-2'>Technologies </p>
          <p className='py-6'>These are the technologies I have work with</p>
        </div>
        <div className='grid grid-cols-2 w-full sm:grid-cols-4 gap-8  py-8 px-12 sm:px-0 '>
          {
            techs.map(({ id, src, title, style }) => (
              <div
                key={id} className={`shadow-md  hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-20 ml-24' />
                <p className=' mt-4 text-center '>{title}</p>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  );
};

export default Experience;