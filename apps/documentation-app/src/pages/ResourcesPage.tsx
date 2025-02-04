import { Link } from 'react-router-dom';

const Resources = () => {
  const resources = [
    {
      title: "Tailwind CSS Documentation",
      description: "Comprehensive documentation for Tailwind CSS, a utility-first CSS framework for building custom designs without writing CSS from scratch.",
      url: "https://tailwindcss.com/docs"
    },
    {
      title: "React Official Documentation",
      description: "The official documentation for React, a JavaScript library for building user interfaces.",
      url: "https://reactjs.org/docs/getting-started.html"
    },
    {
      title: "Marino-UI Components Overview",
      description: "Explore the modern and streamlined components offered by Marino-UI to supercharge your web development.",
      url: "/components"
    },
    {
      title: "UI/UX Design Principles",
      description: "Best practices and guidelines for creating user-centric and visually appealing designs.",
      url: "https://www.interaction-design.org/literature/topics/ui-design"
    },
    {
      title: "GitHub Marino-UI Repository",
      description: "Access the source code and contribute to the Marino-UI project on GitHub.",
      url: "https://github.com/ilMatto99/marino-ui"
    }
  ];

  return (
    <div className="min-h-screen bg-black p-10 text-white">
      <h1 className="text-4xl font-bold mb-8">Resources</h1>
      <p className="text-lg text-gray-400 mb-4">
        Below is a curated list of resources and documentation that will help you better understand and utilize Marino-UI, as well as related technologies.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((reference, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-700"
          >
            <h2 className="text-xl font-semibold text-cyan-300 mb-2">
              {reference.title}
            </h2>
            <p className="text-gray-400 mb-4">{reference.description}</p>
            <a
              href={reference.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 underline hover:text-cyan-200"
            >
              Visit Resource
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link to="/">
          <button className="px-6 py-2 bg-gray-800 text-cyan-300 rounded-2xl hover:bg-gray-600 transition">
           ⬅️ Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Resources;
