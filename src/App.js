import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, NotFound } from './pages';

function App() {
  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
