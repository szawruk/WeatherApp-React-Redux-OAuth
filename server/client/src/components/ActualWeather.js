import React from 'react';
import { connect } from 'react-redux';

import '../styles/actualWeather.scss';

class ActualWeather extends React.Component {

    renderActualInfo() {
        return (
            <div className='ActualWeather_info'>
                info
            </div>
        )
    }

    render() {
        console.log(this.props.weather12hours);
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


function mapStateToProps(state) {
    return {
        actualCity: state.actualCity,
        weather5days: state.weather5days,
        weather12hours: state.weather12hours
    }
}

export default connect(mapStateToProps)(ActualWeather);