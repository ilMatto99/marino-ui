// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Router e Route da React Router
import Homepage from '../pages/Homepage';
import { Navbar } from '../components/Navbar';
import ComponentsPage from '../pages/ComponentsPage';
import Layout from '../components/Layout';
import DocsPage from '../pages/DocsPage';
import { Footer } from '@marino-ui/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/components"
          element={
            <Layout>
              <ComponentsPage />
            </Layout>
          }
        />
        <Route
          path="/docs"
          element={
            <Layout>
              <DocsPage />
            </Layout>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
