import React from 'react';
import stack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'

const MainIcon = () => {
    return (
        <div className=" row d-flex ml-5 my-5 py-5 text-align-center">
        <div className="col-md-2">
            <img className="ml-5 pl-5" style={{width:'150px'}} src={stack} alt=""/>
        </div>
        <div className="col-md-2">
            <img className="ml-5 pl-5" style={{width:'150px'}} src={google} alt=""/>
        </div>
        <div className="col-md-2">
            <img className="ml-5 pl-5" style={{width:'120px'}} src={uber} alt=""/>
        </div>
        <div className="col-md-2">
            <img className="ml-5 pl-5" style={{width:'120px'}} src={netflix} alt=""/>
        </div>
        <div className="col-md-2">
            <img className="ml-5 pl-5" style={{width:'150px'}} src={airbnb} alt=""/>
        </div>
        </div>
    );
};

export default MainIcon;