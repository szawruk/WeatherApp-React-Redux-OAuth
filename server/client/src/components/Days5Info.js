import React from 'react';
import { connect } from 'react-redux';
import { getIcon } from './ActualWeather';
import RainChart5days from './RainChart5days';
import { FtoC, roundNumber } from './usefulFuncions';

import '../styles/days5Info.scss';
import '../styles/switchDays5Info.scss';

class Days5Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDay: true,
            dayColor: 'goldenrod',
            nightColor: 'black'
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
                    <div className='days5Info_chart'>
                        <RainChart5days isDay={this.state.isDay} obj={obj} />
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
                dayColor: 'black',
                nightColor: 'goldenrod'
            })
        }
        else {
            this.setState({
                isDay: true,
                dayColor: 'goldenrod',
                nightColor: 'black'
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
                    <span><div>{FtoC(day.Temperature[minmax].Value)}<sup>o</sup>C</div></span>
                    <p><div>RealFeel {FtoC(day.RealFeelTemperature[minmax].Value)}<sup>o</sup>C</div></p>
                    <p>Precipitation {day[dayTime].PrecipitationProbability}%</p>
                    <p>Wind {roundNumber(day[dayTime].Wind.Speed.Value * 1.61)}km/h</p>
                    <p>Wind direction{day[dayTime].Wind.Direction.English}</p>
                    <p>Wind ghost {roundNumber(day[dayTime].WindGust.Speed.Value * 1.61)}km/h</p>
                </div>
                <div className='days5Info_data_container_right'>
                    {getIcon(day[dayTime].Icon)}
                    <p>Rain: {day[dayTime].Rain.Value}mm</p>
                    <p>Snow: {day[dayTime].Snow.Value}mm</p>
                    <p>Cloud cover {day[dayTime].CloudCover}%</p>
                    <p>Sun rise: {day.Sun.Rise.substring(11, 16)}</p>
                    <p>Sun set: {day.Sun.Set.substring(11, 16)}</p>

                </div>
            </div>
        )
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