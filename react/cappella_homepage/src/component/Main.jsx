import React from 'react';

import Layout from './Layout';
import Logo from './Logo';
import Contact from './Contact';
import AboutUs from './AboutUs';
import Recordings from './Recordings';

const Main = () => {
    return (
        <Layout 
            topLeft={ <Logo/> }
            topRight={ <Contact/> }
            bottomLeft={ <AboutUs/> }
            bottomRight={ <Recordings/> }
        />
    )
}

export default Main