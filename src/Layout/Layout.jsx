import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Header_Footer/Navbar';

const Layout = () => {
    return (
        <div className=''>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;