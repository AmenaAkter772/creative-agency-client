import React from 'react';

const ServiceList = (props) => {
    console.log(props);
    const {image, title, description} = props.selectItem
    return (
        <div>
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

export default ServiceList;