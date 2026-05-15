import { Link } from "react-router-dom";

export default function NavFunc() {
    return (
        <div className='nav'>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/projects" className="nav-item">Projects</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
        </div>
    );
}