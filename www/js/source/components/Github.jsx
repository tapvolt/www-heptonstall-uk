import React from 'react';

class Github extends React.Component{

    render() {
        return(
            <p className="Github">
                This project code can be found on
                <a href={this.props.url}>github.com</a>.
            </p>
        );
    }
}

Github.propTypes = {
    url: React.PropTypes.string
};

Github.defaultProps = {
    url: 'https://github.com/tapvolt/www-heptonstall-info'
};

export default Github
