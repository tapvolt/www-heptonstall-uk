import React from 'react';

import Logo from './Logo';

class Header extends React.Component {

    render() {
        return (
            <div className="Header">
                <Logo />
                <div>
                    <h1>Heptonstall Weather Webcam</h1>
                </div>
            </div>
        );
    }
}

export default Header
