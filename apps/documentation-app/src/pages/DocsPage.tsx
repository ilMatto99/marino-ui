import { Button } from '@marino-ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const DocsPage = () => {
  const [activeSection, setActiveSection] = useState('getting-started');

  const sections = [
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'components', title: 'Components' },
    { id: 'styling', title: 'Styling' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
            <p className="text-gray-300">Install the library by running:</p>
            <pre className="bg-gray-900 text-cyan-300 p-4 rounded mt-2">
              <code>npm install @marino-ui/core</code>
            </pre>
            <p className="text-gray-300 mt-4">Then import components as needed:</p>
            <pre className="bg-gray-900 text-cyan-300 p-4 rounded mt-2">
              <code>import  Button  from '@marino-ui/core;</code>
            </pre>
          </div>
        );
      case 'components':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Components</h2>
            <p className="text-gray-300">
              Our library offers a wide range of customizable components like Buttons, Forms, and more.
            </p>
            <Link to="/components">
              <a className="text-cyan-300 underline mt-4 block">View all components</a>
            </Link>
          </div>
        );
      case 'styling':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Styling</h2>
            <p className="text-gray-300">
              Customize components using Tailwind CSS utility classes or extend default styles.
            </p>
            <pre className="bg-gray-900 text-cyan-300 p-4 rounded mt-2">
              <code>className="bg-blue-500 hover:bg-blue-700 text-white"</code>
            </pre>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Documentation</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <nav className="bg-gray-900 p-4 rounded-xl shadow-lg">
          <ul className="space-y-4">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left p-2 rounded ${
                    activeSection === section.id
                      ? 'bg-cyan-500 text-black'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3 bg-gray-800 p-6 rounded-xl shadow-lg">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default DocsPage;