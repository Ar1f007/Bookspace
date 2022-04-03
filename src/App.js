import { Routes, Route } from 'react-router-dom';
import { Navbar, Hero } from './components';

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
