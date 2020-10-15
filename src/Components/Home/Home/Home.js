import React from 'react';
import Clients from '../Clients/Clients';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainIcon from '../MainIcon/MainIcon';
import Services from '../Services/Services';
import UseCarousel from '../UseCarousel/UseCarousel';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <MainIcon></MainIcon>
            <Services></Services>
            <UseCarousel></UseCarousel>
            <Clients></Clients>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;