import React from 'react';

class Logo extends React.Component {

    render() {
        return <img className="Logo" src={this.props.src}/>;
    }
}

Logo.propTypes = {
    src: React.PropTypes.string
};

Logo.defaultProps = {
    src: 'images/logo.png'
};

export default Logo
