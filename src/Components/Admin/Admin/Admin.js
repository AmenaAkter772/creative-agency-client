import React from 'react';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const Admin = () => {
    return (
        <div>
            <div className="container row d-flex pt-5 mt-5">
            <div className="col-md-3 ml-5 pl-5">
                <h4>Logo Here</h4>
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-7">
                <AdminServiceList></AdminServiceList>
            </div>
            </div>
            
        </div>
    );
};

export default Admin;