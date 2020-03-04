import React from 'react';
import { connect } from 'react-redux';

import '../styles/actualWeather.scss';

class ActualWeather extends React.Component {
    render() {
        return (
            <div className='ActualWeather'>
                <div className='ActualWeather_info'>
                    info
                </div>
                <div className='ActualWeather_chart'>
                    chart
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(ActualWeather);