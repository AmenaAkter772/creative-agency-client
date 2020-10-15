import React from 'react';

const AdminServiceListDetails = ({service}) => {
    return (
        <tr style={{ fontWeight:'400',}}>
            <td>{service.name}</td>
            <td>{service.email}</td>
            <td>{service.design}</td>
            <td>{service.project}</td>
        </tr>
    );
};

export default AdminServiceListDetails;