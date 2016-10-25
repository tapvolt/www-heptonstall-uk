import React from 'react';

class Image extends React.Component{

    render() {
        return <img className="Image" src="image.jpg" alt={this.props.alt}/>;
    }
}

Image.propTypes = {
    alt: React.PropTypes.string,
};

Image.defaultProps = {
    alt: 'Weather Webcam photo from Heptonstall ' +
        'looking south west towards Stoodley Pike Monument.'
};

export default Image
