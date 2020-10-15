import React from 'react';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import headerLogo from '../../../images/logos/logo.png'

const Admin = () => {
    return (
        <div>
            <div className="container row d-flex pt-5 mt-5">
            <div className="col-md-3 ml-5 pl-5">
            <img style={{width:'100px'}} src={headerLogo} alt=""/>
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