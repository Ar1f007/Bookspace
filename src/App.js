import { Routes, Route } from 'react-router-dom';
import { Navbar, Hero, Footer } from './components';

function App() {
  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
