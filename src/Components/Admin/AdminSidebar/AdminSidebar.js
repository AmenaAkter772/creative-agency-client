import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTaxi, faPlus, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className="sidebarjustify-content-between mt-5" style={{height:"100vh"}}>
            <div>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/addService" className="text-dark">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/adminServiceList" className="text-dark">
                            <FontAwesomeIcon icon={faTaxi} /> <span>Service List</span>
                        </Link>
                    
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-dark">
                            <FontAwesomeIcon icon={faUserFriends} /> <span>Make Admin</span>
                        </Link>
                    
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AdminSidebar;