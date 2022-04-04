import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, NotFound, Reviews, Dashboard, Blog, About } from './pages';

function App() {
  return (
    <>
      <Navbar />

      <main className="container mx-auto flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
