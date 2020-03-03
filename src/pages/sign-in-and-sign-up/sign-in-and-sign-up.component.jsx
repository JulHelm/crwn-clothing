import React from 'react';
import "./sign-in-and-sign-up.style.scss";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

const SignInAndSignUpPage = () => {
    return (
      <div className="sign-in-and-sign-up grid-container" >
       <div><SignIn /></div>
       
       <div><SignUp /></div>
       
      </div>
    )
}

export default SignInAndSignUpPage;
