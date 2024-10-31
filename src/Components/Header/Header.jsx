import { Link, NavLink } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <div>
            <h2>Navabr</h2>
            <nav>
                
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/users">Our Users</Link>
                <NavLink to="/users">Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;