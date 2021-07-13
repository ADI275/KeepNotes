import React from 'react';
import "./Footer.css";

const Footer = () => {
    let date=new Date();
    let year=date.getFullYear();
    return (
        <div className="footer">
            Copyright © {year}
        </div>
    );
}
 
export default Footer;