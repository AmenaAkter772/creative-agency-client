import React from 'react';
import Sidebar from '../../Order/Sidebar/Sidebar';
import AddService from '../AddService/AddService';

const AdminService = () => {
    return (
        <div>
            <div className="container row d-flex pt-5 mt-5">
            <div className="col-md-3 ml-5 pl-5">
                <h4>Logo Here</h4>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-4">
                <h4>Order</h4>
                <div className="row card shadow-sm d-flex">
                   <AddService></AddService>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default AdminService;