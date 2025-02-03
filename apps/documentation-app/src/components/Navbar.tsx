import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center h-20">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="./src/assets/Logo Marino-UI.png"
            alt="Logo Marino-UI"
            className="h-16 max-h-16 w-auto object-contain ml-5"
          />
        </Link>
      </div>
      <div className="space-x-6">
        <Link to="/docs" className="hover:underline">
          Docs
        </Link>
        <Link to="/components" className="hover:underline">
          Components
        </Link>
        <Link to="/resources" className="hover:underline">
          Resources
        </Link>
      </div>
    </nav>
  );
};
