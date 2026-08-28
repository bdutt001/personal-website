import './nav.css';

import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className='nav'>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/projects" className="nav-item">Projects</Link>
        </div>
    );
}

export default Nav;