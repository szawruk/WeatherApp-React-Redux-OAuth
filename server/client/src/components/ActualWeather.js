import React from 'react';

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

export default ActualWeather;