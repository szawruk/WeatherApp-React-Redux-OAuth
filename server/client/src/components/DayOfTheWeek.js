import React from 'react'
import { connect } from 'react-redux';
import { getIcon } from './ActualWeather';
import { setDay } from '../actions/index';

import '../styles/dayOfTheWeek.scss';


class DayOfTheWeek extends React.Component {
    render() {
        return (
            <div className='DayOfTheWeek' onClick={e => this.props.setDay(this.props.day)} style={this.props.day == this.props.actualDay ? { color: 'goldenrod', border: "3px solid goldenrod" } : {}}>
                <div className='DayOfTheWeek_day'>
                    {this.renderDay()}
                </div>
                {this.renderTemperature()}
                {this.renderIcon()}
                {this.renderDescription()}

            </div>
        )
    }

    renderDay() {
        let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
        let date = new Date();
        let dayNumber = date.getDay();
        if (this.props.day === '1') return (
            <div className='DayOfTheWeek_day'>
                {'Today'}
            </div>
        )
        else {
            return (
                <div className='DayOfTheWeek_day'>
                    {weekdays[+dayNumber + +this.props.day - 1]}
                </div>
            )
        }
    }

    renderTemperature() {
        const obj = this.props.weather5days;
        if (obj) {
            let tempd = obj.DailyForecasts[this.props.day - 1].Temperature.Maximum.Value;
            let tempn = obj.DailyForecasts[this.props.day - 1].Temperature.Minimum.Value;
            tempd = Math.round((parseInt(tempd - 32) * 0.55));
            tempn = Math.round((parseInt(tempn - 32) * 0.55));
            return (
                <div className='DayOfTheWeek_temperature'>
                    <span style={{ color: 'white' }}>
                        {tempd} <sup style={{ fontSize: 'x-small', verticalAlign: 'super' }}>O</sup>C
                    </span>
                    <span style={{ color: 'goldenrod' }} > / </span>
                    <span style={{ color: 'black' }}>
                        {tempn}<sup style={{ fontSize: 'x-small', verticalAlign: 'super' }}>O</sup>C
                    </span>
                </div>
            )
        } else return <div className='DayOfTheWeek_temperature'></div>

    }

    renderIcon() {
        const obj = this.props.weather5days;
        if (obj) {
            return (
                <div className='DayOfTheWeek_icone'>
                    {getIcon(obj.DailyForecasts[this.props.day - 1].Day.Icon)}
                </div>

            )
        } else return <div className='DayOfTheWeek_icone'> </div>
    }

    renderDescription() {
        const obj = this.props.weather5days;
        if (obj) {
            return (
                <div className='DayOfTheWeek_description'>
                    {obj.DailyForecasts[this.props.day - 1].Day.ShortPhrase}
                </div>
            )
        } else return <div className='DayOfTheWeek_description'></div>
    }
}

function mapStateToProps(state) {
    return {
        weather5days: state.weather5days,
        actualDay: state.actualDay
    }
}

export default connect(mapStateToProps, { setDay })(DayOfTheWeek);