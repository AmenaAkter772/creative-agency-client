import React from 'react';

const Client = (props) => {
    const {design, project, image, name} = props.customar
    return (
        <div className="card shadow-sm col-md-4  ">
            <div className="d-flex">
            <div className="text-center">
              <img style={{borderRadius:'50%'}} src={`data:image/png;base64,${image.img}`} alt="" width="60" />
            </div>
            <div className="card-body">
               <h4 className="card-text text-center">{name}</h4>
               <h6 className="card-text text-center">{design}</h6>
            </div>
            </div>
              <p className="card-text text-center">{project}</p>
        </div>
    );
};

export default Client;