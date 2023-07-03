
import project1 from '../../assets/portfolio/reactWeather.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
      link1: 'https://bistro-project-restaurant.web.app',
      link2: 'https://github.com/MTofayelAhmed/bistro-project-client',
      link3: 'https://github.com/MTofayelAhmed/bistro-projects-server'
    },
    {
      id: 2,
      src: project1,
      link1: 'https://summer-camp-client-51403.web.app',
      link2: 'https://github.com/MTofayelAhmed/martial-arts-client',
      link3: 'https://github.com/MTofayelAhmed/martial-arts-server'
    },
    {
      id: 3,
      src: project1,
      link1: 'https://assignment11client.web.app',
      link2: 'https://github.com/MTofayelAhmed/Marvi-Toys-client',
      link3: 'https://github.com/MTofayelAhmed/Marvi-Toys-server'
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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20">
        {portfolios.map((project) => (
          <div key={project.id} className="shadow-md shadow-gray-600 rounded-lg">
            <img src={project.src} alt="" className="rounded-md duration-200 hover:scale-105" />
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
