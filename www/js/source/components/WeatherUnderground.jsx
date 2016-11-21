import React from 'react';

class WeatherUnderground extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="column coulmn-12">
                    <a href={this.props.href + this.props.id}>
                        <img
                            src={this.props.src + this.props.id}
                            height="160" width="160"
                            alt={this.props.alt + this.props.id}/>
                    </a>
                </div>
            </div>
        );
    }
}

WeatherUnderground.propTypes = {
    id: React.PropTypes.string,
    href: React.PropTypes.string,
    src: React.PropTypes.string,
    alt: React.PropTypes.string,
};

WeatherUnderground.defaultProps = {
    id: 'IHEPTONS2',
    href: 'http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=',
    src: 'http://banners.wunderground.com/cgi-bin/banner/ban/wxBanner?bannertype=wxstnsticker_both&weatherstationcount=',
    alt: 'Weather Underground PWS '
};

export default WeatherUnderground
