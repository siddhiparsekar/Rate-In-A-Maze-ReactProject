import React from 'react';

const currentDate = new Date();

const Footer = () => {
    return (
        <div className="footer">
            <small>Copyright © {currentDate.getFullYear()} Siddhi Parsekar</small>
            
        </div>
    );
};

export default Footer;