import { Button, ButtonCode } from '@marino-ui/button';
import { Footer, FooterCode } from '@marino-ui/footer';
import { Form, FormCode } from '@marino-ui/form';
import { Grid, GridCode } from '@marino-ui/grid';
import { Header, HeaderCode } from '@marino-ui/header';
import { Searchbar, SearchbarCode } from '@marino-ui/searchbar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const componentsList = [
  { name: 'Button', component: <Button />, code: ButtonCode },
  { name: 'Grid', component: <Grid />, code: GridCode },
  { name: 'Form', component: <Form />, code: FormCode },
  { name: 'Searchbar', component: <Searchbar />, code: SearchbarCode },
  { name: 'Header', component: <Header />, code: HeaderCode },
  { name: 'Footer', component: <Footer />, code: FooterCode },
];

const ComponentsPage = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Components Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {componentsList.map((componentData, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{componentData.name}</h2>
            <div className="mb-4">{componentData.component}</div>
            <button
              className="bg-cyan-300 text-black px-4 py-2 rounded hover:bg-cyan-200 transition"
              onClick={() => handleCopy(componentData.code)}
            >
              {copiedCode === componentData.code ? 'Copied!' : 'Copy Code'}
            </button>
            <pre
              className="bg-gray-800 text-cyan-300 mt-4 p-4 rounded overflow-x-auto max-w-full whitespace-pre-wrap"
              style={{ height: '400px', overflow: 'scroll' }}
            >
              <code>{componentData.code}</code>
            </pre>
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

export default ComponentsPage;
