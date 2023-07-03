
import project1 from '../../assets/portfolio/bistro-boss.jpg';
import project2 from '../../assets/portfolio/Martial Art.jpg';
import project3 from '../../assets/portfolio/marviToys.jpg'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
      link1: 'https://bistro-project-restaurant.web.app',
      link2: 'https://github.com/MTofayelAhmed/bistro-project-client',
      link3: 'https://github.com/MTofayelAhmed/bistro-projects-server',
      name: "BISTRO RESTAURANT",
      point1: 'Buyer: order, pay with Stripe. User and Admin have separate dashboards. User: control payment history, order item, contact info, delete item pre-payment.',
      point2: 'Admin((email: tofayelahmed324@gmail.com, password:@_1993Tofayel)) can add new item, delete existing item, order cancel based on situation, control over all user.',
      point3: 'Security is maintained through various role verification, JWT verification, secure links, private routes, and others.'
    },
    {
      id: 2,
      src: project2,
      link1: 'https://summer-camp-client-51403.web.app',
      link2: 'https://github.com/MTofayelAhmed/martial-arts-client',
      link3: 'https://github.com/MTofayelAhmed/martial-arts-server',
      name: "ALL STAR MARTIAL ARTS",
      point1: 'Training camp website: students buy, pay via Stripe, access dashboard, and engage in activities.',
      point2: 'Security is maintained through various role verification, JWT verification, secure links, private routes, and others.',
      point3: 'Instructor: add classes, update, and provide feedback. Admin (email: munna@gmail.com, password: @_1993Tofayel): view classes, update user roles, delete and add.'
    },
    {
      id: 3,
      src: project3,
      link1: 'https://assignment11client.web.app',
      link2: 'https://github.com/MTofayelAhmed/Marvi-Toys-client',
      link3: 'https://github.com/MTofayelAhmed/Marvi-Toys-server',
      name: "MARVITOYS",
      point1: 'Toy website: sellers add products, Firebase authenticates, buyers interact.',
      point2: 'Tabular form displays products. Search, sort available products.',
      point3: 'HomePage is fully Responsive. Private route restricts "View Details" button. A seller can update, delete ,add new products and have full control over all the activities'
    }
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work right here.</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 ">
        {portfolios.map((project) => (
          <div key={project.id} className="shadow-md shadow-gray-600 rounded-lg">
            <img src={project.src} alt="" className="rounded-md mb-4 h-[220px] duration-200 hover:scale-105" />
            <div>
              <p className=' ml-4'>{project.name}</p>
              <ul className=' flex flex-col text-sm  ml-5 mt-3'>
                <li className='mb-2'>
                 * {project.point1}
                </li>
                <li  className='mb-2'>
                 * {project.point2}
                </li>
                <li  className='mb-2'>
                 * {project.point3}
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <a href={project.link1} target="_blank" rel="noopener noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
              </a>
              <a href={project.link2} target="_blank" rel="noopener noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Client</button>
              </a>
              <a href={project.link3} target="_blank" rel="noopener noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Server</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
