import React from 'react';

class Image extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            className: props.className,
            src: props.src,
            alt: props.alt
        };
        this._reloadImage = this._reloadImage.bind(this);
    }

    componentDidMount() {
        this._setTimeout();
    }

    _setTimeout() {
        var timeout = 900000; /** 15 minutes */
        setInterval(this._reloadImage, timeout);
    }

    _reloadImage() {
        this.setState({
            src: 'image.jpg#' + new Date().getTime()
        });
    }

    render() {
        return (
            <div className="row">
                <div className="column column-11">
                    <img {...this.state}/>
                </div>
            </div>
        );
    }
}

Image.propTypes = {
    className: React.PropTypes.string,
    src: React.PropTypes.string,
    alt: React.PropTypes.string,
};

Image.defaultProps = {
    className: 'Image',
    src: 'image.jpg',
    alt: 'Weather Webcam photo from Heptonstall ' +
        'looking south west towards Stoodley Pike Monument.'
};

export default Image
