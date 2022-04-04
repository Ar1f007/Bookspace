import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, NotFound, Reviews, Dashboard, Blog } from './pages';

function App() {
  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
