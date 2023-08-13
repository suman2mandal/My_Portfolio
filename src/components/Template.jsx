import React from 'react';
import Header from './Header';
import {Outlet} from "react-router";

function Template(props) {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default Template;