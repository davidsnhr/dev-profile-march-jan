import './Navbar.css';
import { Link } from 'react-router';

const Navbar = ({ children }) => {
  return (
    <>
      <div className="container-navbar">
        <div className="links">
          <p>
            <Link to="/home">Home</Link>
          </p>
          <p>About Me</p>
          <p>Projects</p>
          <p>Contact Me</p>
        </div>
      </div>
      {children}
    </>
  );
};

export default Navbar;
