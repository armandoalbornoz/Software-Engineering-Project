import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>BMI Tracker</h1>
            <div className="links">

                <Link to="/">Home</Link>
                <Link to="/Create">Provide Information</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;