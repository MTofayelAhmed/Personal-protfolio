

const Contact = () => {
  return (
    <div name='contact' className=" w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white ">
      <div className=" flex flex-col p-4 justify-center  mx-auto h-full max-w-screen-lg">
        <div>
          <p className=" text-4xl border-b-4 font-bold border-gray-400  inline text-white">Contact</p>
          <p className="my-6 ">Submit the form below to get in touch with me </p>
        </div>
        <div className=" flex justify-center items-center">
          <form action="https://getform.io/f/565640a1-5915-4a19-a8d0-55e5d84a8052" method="POST" className=" flex flex-col md:w-1/2">
            <input type="text" name="name" placeholder=" Enter your name" className="p-2 bg-transparent rounded-md  border-2 text-white focus:outline-none" />
            <input type="email" name="email" placeholder=" Enter your email" className="p-2 bg-transparent rounded-md  my-4 border-2 text-white focus:outline-none" />
            <textarea name="message" placeholder="Enter Your Message" className="p-2 bg-transparent rounded-md  border-2 text-white focus:outline-none mb-6" rows="10" ></textarea>
            <button className="bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-2  mx-auto flex items-center rounded-md hover:scale-110 duration-300  ">Let,s Talk</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;