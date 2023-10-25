import React from 'react';
import Signup_nav from './Signup_navbar';
import Bottom_cards from './bottom_cards';
import Faq from './FAQ';
import './signup.scss';
import Footerup from '../Signup form/Footer_signup';
import Footer from '../sign-in/footer';
function SignupPage(){
    return(
    <div >
    <Signup_nav />
    <Bottom_cards />
    <Faq />
    <Footerup />
    {/* <Footer /> */}
    </div>
    );
}

export default SignupPage;