import { Link, NavLink } from 'react-router-dom';
import { useId } from 'react';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'About', path: '/about' },
];

export const Navbar = () => {
  const id = useId();

  return (
    <nav className="container mx-auto navbar bg-base-100 border-b-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navigation.map(({ name, path }) => (
              <li key={`${id}-${name}`}>
                <NavLink to={path}>{name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Bookspace
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {navigation.map(({ name, path }) => (
            <li key={`${id}-${name}`}>
              <NavLink to={path}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/" className="btn btn-">
          Get started
        </Link>
      </div>
    </nav>
  );
};
