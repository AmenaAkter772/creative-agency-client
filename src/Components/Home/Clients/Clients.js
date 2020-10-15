import React, { useEffect, useState } from 'react';
import Client from '../Client/Client';

const Clients = () => {
    const [client, setClient] = useState([])

    useEffect( () => {
        fetch('https://secure-inlet-92417.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setClient(data))
    }, [])


    return (
        <section className="my-5 py-5">
            <div className="container">
                <div>
                    <h1 className="text-center">Clients <span style={{color:'#7AB259'}}>Feedback</span></h1>
                </div>
                <div className="row card-deck mt-5">
                    {
                        client.map(customar => <Client customar={customar}></Client>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Clients;