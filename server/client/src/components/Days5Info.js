import React from 'react';
import { connect } from 'react-redux';

import '../styles/days5Info.scss';

class Days5Info extends React.Component {
    render() {
        if (this.props.weather5days) {
            const obj = this.props.weather5days;
            return (
                <div className='days5Info'>
                    <div className='days5Info_data'>
                        <div className='days5Info_data_daynight'>
                            suwak
                    </div>
                        <div className='days5Info_data_container'>
                            <div className='days5Info_data_container_left'>
                                infoski
                        </div>
                            <div className='days5Info_data_container_right'>
                                prawa
                        </div>
                        </div>
                    </div>
                    <div className='days5Info_sunmoon'>
                        mamy zachody
                </div>
                </div>
            )
        } else return "";

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

export default connect(mapStateToProps)(Days5Info);