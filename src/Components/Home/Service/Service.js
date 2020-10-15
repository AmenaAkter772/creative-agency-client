import React from 'react';

const Service = (props) => {
    
    const {title, image, description} = props.service
    return (
            <div className="card shadow-sm col-md-4">
                <div className="text-center">
                    <img src={`data:image/png;base64,${image.img}`} alt="" width="60" />
                </div>
                <div className="card-body">
                <h5 className="card-text text-center">{title}</h5>
                <p className="card-text text-center">{description}</p>
                </div>
        </div>
    );
};

export default Service;