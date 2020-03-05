import React from 'react';
import { connect } from 'react-redux';
import { getIcon } from './ActualWeather';

import '../styles/days5Info.scss';
import '../styles/switchDays5Info.scss';

class Days5Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDay: true,
            dayColor: 'goldenrod',
            nightColor: 'white'
        };
    }
    render() {
        if (this.props.weather5days) {
            const obj = this.props.weather5days;
            return (
                <div className='days5Info'>
                    <div className='days5Info_data'>
                        <div className='days5Info_data_daynight'>
                            {this.renderSwitch()}
                        </div>
                        {this.renderContainerData(obj)}
                    </div>
                    <div className='days5Info_sunmoon'>
                        mamy zachody
                    </div>
                </div>
            )
        } else return "";

    }

    renderSwitch() {
        return (
            <div className="toggle-item" onChange={e => this.toggleClick(e)}>
                <span className="day" style={{ color: this.state.dayColor }}>DAY</span>
                <label className="switch">
                    <input type="checkbox" name="ts" />
                    <span className="slider round"></span>
                </label>
                <span className="night" style={{ color: this.state.nightColor }}>NIGHT</span>
            </div>
        )
    }

    toggleClick(e) {
        if (e.target.checked) {
            this.setState({
                isDay: false,
                dayColor: 'white',
                nightColor: 'goldenrod'
            })
        }
        else {
            this.setState({
                isDay: true,
                dayColor: 'goldenrod',
                nightColor: 'white'
            })
        }
    }

    renderContainerData(obj) {
        let dayTime = ""; let minmax = "";
        this.state.isDay ? dayTime = "Day" : dayTime = "Night";
        this.state.isDay ? minmax = "Maximum" : minmax = "Minimum";
        const day = obj.DailyForecasts[this.props.actualDay - 1];
        return (
            <div className='days5Info_data_container'>
                <div className='days5Info_data_container_left'>
                    <span>{this.FtoC(day.Temperature[minmax].Value)} </span>
                    <p>RealFeel {this.FtoC(day.RealFeelTemperature[minmax].Value)}*C</p>
                    <p>Precipitation {day[dayTime].PrecipitationProbability}%</p>
                    <p>Thunderstorm {day[dayTime].ThunderstormProbability}%</p>
                    <p>Wind {this.roundNumber(day[dayTime].Wind.Speed.Value * 1.61)}km/h</p>
                    <p>Wind direction{day[dayTime].Wind.Direction.English}</p>
                    <p>Wind ghost {this.roundNumber(day[dayTime].WindGust.Speed.Value * 1.61)}km/h</p>
                </div>
                <div className='days5Info_data_container_right'>
                    {getIcon(day[dayTime].Icon)}
                    <p>Rain: {day[dayTime].Rain.Value}mm</p>
                    <p>Hours of rain: {day[dayTime].HoursOfRain}</p>
                    <p>Snow: {day[dayTime].Snow.Value}mm</p>
                    <p>Hours of snow: {day[dayTime].HoursOfSnow}</p>
                    <p>Cloud cover {day[dayTime].CloudCover}%</p>
                </div>
            </div>
        )
    }

    FtoC(temp) {
        return this.roundNumber((parseInt(temp - 32) * 0.55));
    }

    roundNumber(number) {
        return Math.round(number);
    }
}

function mapStateToProps(state) {
    return {
        actualCity: state.actualCity,
        weather5days: state.weather5days,
        weather12hours: state.weather12hours,
        actualDay: state.actualDay
    }
}

export default connect(mapStateToProps)(Days5Info);