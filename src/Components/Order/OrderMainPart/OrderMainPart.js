import React from 'react';
import Order from '../Order/Order';
import Sidebar from '../Sidebar/Sidebar';

const OrderMainPart = () => {
    return (
        <div>
            <div className="container row d-flex pt-5 mt-5">
            <div className="col-md-3 ml-5 pl-5">
                <h4>Logo Here</h4>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-7">
                <h4>Order</h4>
                <Order></Order>
            </div>
            </div>
            
        </div>
    );
};

export default OrderMainPart;