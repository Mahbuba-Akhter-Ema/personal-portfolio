import React from 'react';
import Banner from '../Banner/Banner';
import FirstSideNav from '../FirstSideNav/FirstSideNav';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div data-aos="fade-up" className="w-full lg:w-2/4 bg-zinc-800 rounded-sm">
                <FirstSideNav></FirstSideNav>
            </div>
            <div className="lg:-ml-[250px]">
                <Banner></Banner>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;