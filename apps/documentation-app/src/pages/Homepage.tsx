import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col lg:flex-row items-center lg:items-start justify-between p-10">
      <div className="lg:w-1/2 text-left">
        <h1 className="text-4xl font-bold text-gray-100 mb-4 hidden">
          Welcome to Marino-UI!
        </h1>
        <h2 className="text-5xl font-bold text-white mb-4 leading-tight text-left">
          <span className="text-cyan-300">Empower</span> your
          <span className="text-green-400"> web development</span> <br />
          with
          <span className="text-yellow-400"> streamlined</span>,<br />
          <span className="text-purple-400"> modern components</span> and a
          <br />
          <span className="text-pink-400"> user-centric </span> design
          <span className="text-cyan-300"> approach</span>.
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Marino-UI is a minimalistic visual library for building high-quality
          web apps and design systems. Boost your web development experience
          with Marino-UI's versatile collection of sleek, modern components.
          Designed for flexibility and efficiency, Marino-UI empowers you to
          transform your creative ideas into polished, user-friendly
          applications effortlessly.
        </p>
        <div className="flex space-x-4">
          <Link to="/docs">
            <button className="px-6 py-2 bg-black text-white border border-white rounded-2xl hover:bg-gray-900 transition">
              Read the Docs
            </button>
          </Link>
          <Link to="/components">
            <button className="px-6 py-2 bg-cyan-300 text-black rounded-2xl hover:bg-cyan-200 transition">
              🚀Get Started!
            </button>
          </Link>
        </div>
      </div>

      <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
        <img
          src="./src/assets/Coding.jpg"
          alt="Hero Image"
          className="max-w-full h-auto rounded-xl shadow-lg mask-image"
          style={{
            maskImage:
              'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)', // Per Safari
          }}
        />
      </div>
    </div>
  );
};

export default Homepage;
