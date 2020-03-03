import React from 'react'
import { connect } from 'react-redux';

import '../styles/dayOfTheWeek.scss';


class DayOfTheWeek extends React.Component {
    render() {
        return (
            <div className='DayOfTheWeek'>
                <div className='DayOfTheWeek_day'>
                    {this.props.day}
                </div>
                <div className='DayOfTheWeek_temperature'>

                </div>
                <div className='DayOfTheWeek_icone'>

                </div>
                <div className='DayOfTheWeek_description'>

                </div>
            </div>
        )
    }
}

export default connect(null)(DayOfTheWeek);