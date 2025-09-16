import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Header_Footer/Navbar';
import Footer from '../Components/Header_Footer/Footer';

const Layout = () => {
    return (
        <div className=''>
            <Navbar />
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Layout;