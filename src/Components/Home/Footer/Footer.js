import React from 'react';

const Footer = () => {
    const style={
        backgroundColor: '#FBD062'
    }
    return (
        <div>
            <section style={style} className="contact my-5 py-5">
            <div className="container row d-flex">
                <div className="col-md-4 offset-md-1">
                    <h5>Let us handle your<br/>project,professionally</h5>
                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, aut voluptate. Soluta rem laudantium illum odit doloribus.</p>
                </div>
                <div className="col-md-6 offset-md-1">
                    <form action="">
                    <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Email Address"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder=" Your name / Company's name"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                       </div>
                       <div className="form-group">
                           <button type="button" className="btn btn-brand">Send </button>
                       </div>
                    </form>
                </div>
            </div>
            <div className="copyRight text-center pt-5">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </section>
            
        </div>
    );
};

export default Footer;