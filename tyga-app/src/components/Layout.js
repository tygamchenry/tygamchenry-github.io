import React from 'react';
import Heading from './Header';
import Footer from './Footer';


const Layout = ({children}) => {
    return (
        <>
        <header>
            <Heading />
        </header>
        <main>{children}</main>
        <footer>
            <Footer />
        </footer>
        </>
    )
}

export default Layout;