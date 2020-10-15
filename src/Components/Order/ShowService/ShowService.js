import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceList from '../ServiceList/ServiceList';
import Sidebar from '../Sidebar/Sidebar';

const ShowService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [workItem, setWorkItem] = useState([])

    useEffect( () => {
        fetch('https://secure-inlet-92417.herokuapp.com/getServiceListByEmail?email='+loggedInUser.email, {
            method:'GET', 
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(res=>res.json())
            .then(result=>{
                setWorkItem(result)
            })
        },[loggedInUser.email])
        console.log(workItem);
        console.log(loggedInUser.email);
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
                    {
                        workItem.map(selectItem => <ServiceList selectItem={selectItem} key={selectItem._id}></ServiceList>)
                    }
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default ShowService;