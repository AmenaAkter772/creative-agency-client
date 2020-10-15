import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Order = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null)
    const history = useHistory();
    
    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email)
        formData.append('design', info.design)
        formData.append('project', info.project)
        formData.append('price', info.price)

        fetch('https://secure-inlet-92417.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                history.push('/services')
            }
        })
        .catch(error => {
            console.error(error)
        })
    }

    


    return (
        <form onSubmit={handleSubmit} className="mt-5">
            <div className="form-group">
                <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder=" Your name / Company's name"/>
            </div>
           <div className="form-group">
                <input onBlur={handleBlur} type="text" className="form-control" name="email" placeholder="Your Email Address"/>
            </div>
            <div className="form-group">
                <input onBlur={handleBlur} type="text" className="form-control" name="design" placeholder=" Graphics Design"/>
            </div>
            <div className="form-group">
                <textarea onBlur={handleBlur} className="form-control" id="" cols="30" rows="4" name="project" placeholder="">Project Details</textarea>
            </div>
            <div className="d-flex">
                <div className="form-group">
                    <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder=" Price"/>
                </div>
                <div className="form-group ml-auto">
                    <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="Image" />
                </div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-brand">Send </button>
            </div>
        </form>
    );
};

export default Order;