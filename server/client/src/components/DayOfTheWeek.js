import React from 'react'
import { connect } from 'react-redux';

import '../styles/dayOfTheWeek.scss';


class DayOfTheWeek extends React.Component {
    render() {
        return (
            <div className='dayOfTheWeek'>
                siema dzien tygodnia
             </div>
        )
    }
}

export default connect(null)(DayOfTheWeek);