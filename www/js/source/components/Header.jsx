import React from 'react';

import Logo from './Logo';

class Header extends React.Component {

    render() {
        return (
            <div className="row">

                <div className="column column-1">
                    <Logo />
                </div>

                <div className="column column-11">
                    <h1 className="Header">Heptonstall Weather Webcam</h1>
                </div>

            </div>
        );
    }
}

export default Header
