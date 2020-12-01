import React from 'react';

import Layout from './Layout';

const Main = () => {
    return (
        <Layout 
            topLeft={ <h1>Logo</h1> }
            topRight={ <h1>Contact/Call to action/Timeline</h1> }
            bottomLeft={ <h1>About Us</h1> }
            bottomRight={ <h1>Recordings/Videos</h1> }
        />
    )
}

export default Main