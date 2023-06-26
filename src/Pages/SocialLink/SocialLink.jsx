import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const SocialLink = () => {
  return (
    <div className=" flex flex-col top-[35%]  left-0 fixed">
     <ul>
      <li className=" ml-[-110px] hover:ml-[-20px] hover:rounded-md duration-300  flex justify-between items-center  w-40 h-14 px-4 bg-gray-500">
        <Link to='https://www.youtube.com/watch?v=LpZrAjU6Hhk&t=2412s' className=" flex justify-between items-center w-full  text-white" href="">
          <> 
          LinkedIn <FaLinkedin size={30}></FaLinkedin>
           </>
        </Link>
      </li>
      <li className=" ml-[-110px] hover:ml-[-20px] hover:rounded-md duration-300  flex justify-between items-center  w-40 h-14 px-4 bg-gray-500">
        <Link to='https://github.com/MTofayelAhmed' className=" flex justify-between items-center w-full  text-white" href="">
          <> 
          LinkedIn <FaGithub size={30}></FaGithub>
           </>
        </Link>
      </li>
      <li className=" ml-[-110px] hover:ml-[-20px] hover:rounded-md duration-300  flex justify-between items-center  w-40 h-14 px-4 bg-gray-500">
        <Link to='https://www.youtube.com/watch?v=LpZrAjU6Hhk&t=2412s' className=" flex justify-between items-center w-full  text-white" href="">
          <> 
          LinkedIn <FaLinkedin size={30}></FaLinkedin>
           </>
        </Link>
      </li>
      <li className=" ml-[-110px] hover:ml-[-20px] hover:rounded-md duration-300  flex justify-between items-center  w-40 h-14 px-4 bg-gray-500">
        <Link to='https://www.youtube.com/watch?v=LpZrAjU6Hhk&t=2412s' className=" flex justify-between items-center w-full  text-white" href="">
          <> 
          LinkedIn <FaLinkedin size={30}></FaLinkedin>
           </>
        </Link>
      </li>
     </ul>
    </div>
  );
};

export default SocialLink;