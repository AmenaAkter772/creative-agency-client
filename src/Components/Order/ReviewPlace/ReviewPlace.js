import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ReviewPlace = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const name= document.getElementById('name').value
        const company = document.getElementById('company').value;
        const description = document.getElementById('description').value;
        const data = {name, company, description}

        fetch('https://secure-inlet-92417.herokuapp.com/selectService', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
                alert('appointment created successful')
        })
        
    }
    return (
        <div>
            <div className="container row d-flex pt-5 mt-5">
            <div className="col-md-3 ml-5 pl-5">
                <h4>Logo Here</h4>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-7">
                <h4>Order</h4>
                <div>
                    <form onSubmit={handleSubmit} className="mt-5">
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" placeholder=" Your name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="company" placeholder="Company's name Designation"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="description" placeholder=" Description"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-brand">Send </button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default ReviewPlace;