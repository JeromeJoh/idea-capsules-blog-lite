import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1><span>i</span>dea Capsules</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Capsule</Link>
      </div>
    </nav>
  );
}

export default Navbar;