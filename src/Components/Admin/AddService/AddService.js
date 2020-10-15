import React, { useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import headerLogo from '../../../images/logos/logo.png'

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null)
    
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
        formData.append('title', info.title);
        formData.append('description', info.description)

        fetch('https://secure-inlet-92417.herokuapp.com/serviceList', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
            <div className="container row d-flex pt-5 mt-5">
            <div className="col-md-3 ml-5 pl-5">
                <img style={{width:'100px'}} src={headerLogo} alt=""/>
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-7">
                <h4>Service List</h4>
                <div>
                <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Service Title</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="title" placeholder="Enter Title" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Description</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="description" placeholder="Enter Description" />
                        </div>
                    <div class="form-group">
                            <label for="exampleInputPassword1">Icon</label>
                            <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="Image" />
                        </div>
                        <button type="submit" className="btn btn-brand mr-auto">Send </button>
                </form>
                </div>
            </div>
            </div>
            
        </div>
            
    );
};

export default AddService;