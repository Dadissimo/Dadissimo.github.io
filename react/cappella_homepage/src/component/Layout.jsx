import React from 'react';

const Layout = ({topLeft, topRight, bottomLeft, bottomRight}) => {
    return (
        <div className="wp-100 hp-100">
            <div className="hp-50 d-flex flex-row justify-content-around">
                <div className="wp-50 border border-dark d-flex align-items-center justify-content-center" style={{backgroundColor: 'lightgrey'}}>
                    {/* <h1 className="text-center"><img className="logo" src="images/Logo.svg" /></h1> */}
                    {topLeft}
                </div>
                <div className="wp-50 border border-dark d-flex align-items-center justify-content-center text-light"  style={{backgroundColor: 'darkgrey'}}>
                    {/* <h1>Videos/Recordings</h1> */}
                    {topRight}
                </div>
            </div>
            <div className="hp-50 d-flex flex-row justify-content-around">
                <div className="wp-50 border border-dark d-flex align-items-center justify-content-center text-light"  style={{backgroundColor: 'darkgrey'}}>
                    {/* <h1>About Us</h1> */}
                    {bottomLeft}
                </div>
                <div className="wp-50 border border-dark d-flex align-items-center justify-content-center"  style={{backgroundColor: 'lightgrey'}}>
                    {/* <h1 className="text-center">Contact - <a className="fa fa-facebook" href="https://www.facebook.com/cappundella/">acebook</a></h1> */}
                    {bottomRight}
                </div>
            </div>
        </div>
    );
}

export default Layout;
