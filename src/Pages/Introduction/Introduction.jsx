
import profileImage from '../../assets/portfolio/heroImage.png';
import { MdArrowRightAlt, MdDownload } from 'react-icons/md';

const Introduction = () => {
  return (
    <div name='home' className='text-white min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row '>
        <div className='flex flex-col justify-center flex-grow mt-28'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a Full Stack Developer</h2>
          <p className='text-gray-500 max-w-md py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam error,
            repellendus, provident cupiditate voluptate magni cum molestiae possimus
            quas reiciendis magnam incidunt laborum omnis odit dolore enim quos.
            Quod fuga neque nobis ducimus ad quis voluptatibus animi provident?
            Quos, unde?
          </p>
         <div className=' flex  gap-5'>
         <div>
            <button className='group flex px-6 w-fit py-3 my-2 items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md cursor-pointer'>
              portfolio
              <span className='group-hover:rotate-90 duration-300'><MdArrowRightAlt size={25} /></span>
            </button>
          </div>
          <div>
            <a href="/resume.pdf" download>
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
          <img src={profileImage} alt='' className='rounded-2xl w-2/3 md:w-full max-w-md' />
        </div>
      </div>

    </div>
  );
};

export default Introduction;