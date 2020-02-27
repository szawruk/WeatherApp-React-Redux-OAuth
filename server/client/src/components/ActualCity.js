import React from 'react';
import { connect } from 'react-redux';

import '../styles/actualCity.scss';

const ActualCity = (props) => {
    return (
        <div className='actualCity'>
            {props.actualCity ? props.actualCity : ''}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        actualCity: state.actualCity
    }
}

export default connect(mapStateToProps)(ActualCity);