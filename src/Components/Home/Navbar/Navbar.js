import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../../images/logos/logo.png'

const Navbar = () => {
    return (
        <nav style={{cursor:'pointer'}} className="navbar navbar-expand-lg navbar-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <a className="nav-link mr-auto" to="/"><img style={{width:'150px'}} src={headerLogo} alt=""/> </a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/" className="">
                            <a className="nav-link mr-5">Home </a>
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/order" className="">
                            <a className="nav-link mr-5">Our team </a>
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/#" className="">
                            <a className="nav-link mr-5">Our portfolio </a>
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/#" className="">
                            <a className="nav-link mr-5">Contact Us </a>
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/makeAdmin" className="">
                            <a className="nav-link mr-5">Admin </a>
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/login" className="">
                        <button className="nav-link mr-5 btn btn-brand text-white">Login</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;