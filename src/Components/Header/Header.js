import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>Welcome to the <span className="header-color">Software Engineer Hiring Manager</span></h1>
            <h3>Here You Can Hire Software Engineer/Developer According to your Budget</h3>
            <h3>You Can Spend to Hire Everyday: <span  className="header-color">$1000000</span></h3>
        </div>
    );
};

export default Header;