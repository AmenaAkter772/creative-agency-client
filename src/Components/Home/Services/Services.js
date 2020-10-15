import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from '../Service/Service';
import { useHistory } from 'react-router-dom';

const Services = () => {
    const [selectService, setSelectService] = useState([])

    useEffect( () => {
        fetch('https://secure-inlet-92417.herokuapp.com/showServiceList')
        .then(res => res.json())
        .then(data => setSelectService(data))
    }, [])


    const history = useHistory()
    const handleClick = () => {
        history.push("/order")
    }
    
    return (
        <section className="my-5 py-5">
            <div className="container">
                <div>
                    <h1 className="text-center">Provide awesome <span style={{color:'#7AB259'}}>services</span></h1>
                </div>
                <div onClick={handleClick} style={{cursor: 'pointer'}} className="row card-deck mt-5">
                    {
                        selectService.map(service => <Service service={service}></Service>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;