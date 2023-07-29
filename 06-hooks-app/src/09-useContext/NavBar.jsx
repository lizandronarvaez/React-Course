
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        // <>
        //     {/* LINKS QUE SON PARECIDOS A LOS ENLACES A */}
        //     <Link Link to="/" > Home</Link >
        //     <Link to="/about">About</Link>
        //     <Link to="/login">Login</Link>
        //     {/* FIN DE LINKS */}
        // </>
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">useContext</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-4">
                            <NavLink
                                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                                to="/"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                                to="/about"
                            >
                                About
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                                to="/login"
                            >
                                Login
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default NavBar