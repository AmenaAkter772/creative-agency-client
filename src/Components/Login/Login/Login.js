import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../../images/icons/google.png'
import headerLogo from '../../../images/logos/logo.png'

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then( res => {
          const {displayName, email} = res.user;
          const userSignIn = {
            name: displayName,
            email: email
          }
          setLoggedInUser(userSignIn);
          history.replace(from);
          console.log(res);
        })
        .catch(error => console.log(error))
      }

      const loginStyle={
          marginLeft: "350px",
        width:"600px",
        height:"300px",
        borderRadius:"15px",
        border:"1px solid gray",
      }
      const style ={
        border: '1px solid gray',
        width:'500px',
        borderRadius: '50px',
        cursor: 'pointer',
      }

    return (
        <div className="text-center">
            <img className="mt-5 pt-5" style={{width:'150px'}} src={headerLogo} alt=""/>
            <div style={loginStyle} className="mt-5 pt-5">
            <h2 className="text-center ml-4 pt-3 pb-4">Login With</h2>
            <div onClick={handleSignIn} className="d-flex text-center ml-5 pl-5" style={style}>
                <div>
                  <img src={logo} alt="" style={{width:'35px'}}/>
                </div>
                <div>
                  <h4 className="ml-5 pl-5">Continue with google</h4>
                </div>
            </div>
            <h6 className="text-center mt-4">Don't have an account?<span style={{color:'blue'}}>Create an account</span></h6>
          </div>
        </div>
    );
};

export default Login;