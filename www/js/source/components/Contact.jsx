import React from 'react';

class Contact extends React.Component{

    _getContact() {
        return 'mailto:' +  this.props.email +
                '?subject=' + this.props.subject;
    }

    render() {
        var contact = this._getContact();
        return(
            <p className="Contact">
                If you are interested in home security systems
                and would like to know more please contact me via
                <a href={contact}>email</a>.
            </p>
        );
    }
}

Contact.propTypes = {
    email: React.PropTypes.string,
    subject: React.PropTypes.string,
};

Contact.defaultProps = {
    email: 'gareth.jackson@gmail.com',
    subject: 'www.heptonstall.info'
};

export default Contact


