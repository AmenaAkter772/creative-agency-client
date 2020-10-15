import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faTaxi, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className="sidebarjustify-content-between mt-5" style={{height:"100vh"}}>
            <div>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/order" className="text-dark">
                            <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" className="text-dark">
                            <FontAwesomeIcon icon={faTaxi} /> <span>Service list</span> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-dark">
                            <FontAwesomeIcon icon={faFile} /> <span>Review</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;