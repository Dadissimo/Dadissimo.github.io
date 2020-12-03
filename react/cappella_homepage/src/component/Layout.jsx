import React from 'react';

const Layout = ({topLeft, topRight, bottomLeft, bottomRight}) => {
    return (
        <div className="wp-100 hp-100">
            <div className="hp-50 d-flex flex-row justify-content-around">
                <div className="bg-secondary wp-50 border border-light d-flex align-items-center justify-content-center" >
                    {topLeft}
                </div>
                <div className="bg-primary wp-50 border border-light d-flex align-items-center justify-content-center text-light"  >
                    {topRight}
                </div>
            </div>
            <div className="hp-50 d-flex flex-row justify-content-around">
                <div className="bg-primary wp-50 border border-light d-flex align-items-center justify-content-center text-light"  >
                    {bottomLeft}
                </div>
                <div className="bg-secondary wp-50 border border-light d-flex align-items-center justify-content-center"  >
                    {bottomRight}
                </div>
            </div>
        </div>
    );
}

export default Layout;
