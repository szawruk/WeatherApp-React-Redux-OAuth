import React from 'react';
import { connect } from 'react-redux';


import '../styles/actualWeather.scss';

class ActualWeather extends React.Component {

    renderActualInfo() {
        const obj = this.props.weatherCurrent;
        return (
            <div className='ActualWeather_info'>
                <div className='ActualWeather_info_description'>
                    {obj ? obj[0].WeatherText : ""}
                </div>
                <div className='ActualWeather_info_tempAndIcon'>
                    <span>
                        {obj ? obj[0].Temperature.Metric.Value : ''}
                    </span>
                    {obj ? getIcon(obj[0].WeatherIcon) : <i></i>}
                </div>
                {obj ? this.getAdds(obj[0]) : ''}
            </div>
        )
    }



    getAdds(obj) {
        return (
            <div className='ActualWeather_info_adds'>
                <p>RealFeel {obj.RealFeelTemperature.Metric.Value} *C</p>
                <p>Wind direction {obj.Wind.Direction.English}</p>
                <p>Wind speed {obj.Wind.Speed.Metric.Value} km/h</p>
                <p>Cloud cover {obj.CloudCover}%</p>
                <p>Pressure {obj.Pressure.Metric.Value}hPa</p>
            </div>

        )
    }

    render() {
        console.log(this.props.weather5days);
        return (
            <div className='ActualWeather'>
                {this.renderActualInfo()}
                <div className='ActualWeather_chart'>
                    chart
                </div>
            </div>
        )
    }
}

export const getIcon = (number) => {
    if (number === 1 || number === 2 || number === 4 || number === 5) {
        return <i className="typcn typcn-weather-sunny"></i>;
    }
    if (number === 3 || number === 21) {
        return <i className="typcn typcn-weather-partly-sunny"></i>;
    }
    if (number === 6 || number === 7 || number === 8 || number === 11 || number === 38 || number === 44) {
        return <i className="typcn typcn-weather-cloudy"></i>;
    }
    if (number === 12 || number === 13 || number === 14 || number === 18 || number === 29 || number === 39 || number === 40 || number === 25) {
        return <i className="typcn typcn-weather-shower"></i>;
    }
    if (number === 15 || number === 16 || number === 17 || number === 41 || number === 42) {
        return <i className="typcn typcn-weather-stormy"></i>;
    }
    if (number === 19 || number === 20 || number === 22 || number === 24 || number === 26 || number === 29 || number === 43 || number === 44 || number === 23) {
        return <i className="typcn typcn-weather-snow"></i>;
    }
    if (number === 32) {
        return <i className="typcn typcn-weather-windy"></i>;
    }
}

function mapStateToProps(state) {
    return {
        actualCity: state.actualCity,
        weather5days: state.weather5days,
        weather12hours: state.weather12hours,
        weatherCurrent: state.weatherCurrent
    }
}

export default connect(mapStateToProps)(ActualWeather);