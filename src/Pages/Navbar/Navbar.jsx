import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navItems = [
    {
      id: 1,
      link: "home",
    },

    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "portfolio",
    },

    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className=" flex justify-between items-center text-white bg-black h-20 w-full  ">
      <div className=" font-signature font-bold text-4xl">
        <h1>Tofayel</h1>
      </div>
      <ul className=" hidden md:flex">
        {navItems.map((item) => (
          <Link
            key={item.id}
            className="px-4  uppercase font-medium
     text-gray-400 hover:scale-105 duration-200 "
          >
            {item.link}
          </Link>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
      >
        {nav ? <FaTimes size={30}> </FaTimes> : <FaBars size={30}></FaBars>}
      </div>
     {
      nav && ( <ul className=" flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black  to-gray-800">
      {navItems.map((item) => (
        <Link
          key={item.id}
          className="px-4 py-6 cursor-pointer uppercase text-4xl text-gray-500 "
        >
          {item.link}
        </Link>
      ))}
    </ul>)
     }
    </div>
  );
};

export default Navbar;
