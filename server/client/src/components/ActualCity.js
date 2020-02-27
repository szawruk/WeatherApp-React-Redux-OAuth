import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../styles/actualCity.scss';

const ActualCity = (props) => {
    return (
        <div className='actualCity'>
            <div>
                {props.actualCity}
            </div>
            <button style={{ outline: 'none', fontSize: '2rem' }} onClick={e => props.addCity()}>
                +
            </button>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        actualCity: state.actualCity
    }
}

export default connect(mapStateToProps, actions)(ActualCity);