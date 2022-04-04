import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../assets/not-found.svg';

export const NotFound = () => {
  return (
    <div className="hero bg-base-200 h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src={img} alt="404" className="mb-10" />
          <h3 className="text-4xl font-bold">
            Ohh! <br /> Page not found
          </h3>
          <p className="py-6">We can't seem to find the page you're looking for</p>
          <Link to="/" className="btn btn-primary hover:drop-shadow-lg">
            <FaHome className="mr-2 text-lg" /> Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
