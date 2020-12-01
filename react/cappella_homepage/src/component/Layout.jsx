import React from 'react';

const Layout = ({topLeft, topRight, bottomLeft, bottomRight}) => {
    return (
        <div className="wp-100 hp-100">
            <div className="hp-50 d-flex flex-row justify-content-around">
                <div className="wp-50 border border-light d-flex align-items-center justify-content-center" style={{backgroundColor: '#b0cbe8'}}>
                    {topLeft}
                </div>
                <div className="wp-50 border border-light d-flex align-items-center justify-content-center text-light"  style={{backgroundColor: '#04074d'}}>
                    {topRight}
                </div>
            </div>
            <div className="hp-50 d-flex flex-row justify-content-around">
                <div className="wp-50 border border-light d-flex align-items-center justify-content-center text-light"  style={{backgroundColor: '#04074d'}}>
                    {bottomLeft}
                </div>
                <div className="wp-50 border border-light d-flex align-items-center justify-content-center"  style={{backgroundColor: '#b0cbe8'}}>
                    {bottomRight}
                </div>
            </div>
        </div>
    );
}

export default Layout;
