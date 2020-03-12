import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';



const ActualCity = (props) => {
    return (
        <div className='actualCity'>
            <div>
                {props.actualCity}
            </div>
            <div style={{ width: '15px' }}></div>
            {renderAdd(props)}
            {renderDelete(props)}
        </div>
    )
}

function renderAdd(props) {
    if (props.auth !== null && (props.auth !== false)) {
        if (!props.auth.cityList.includes(props.actualCity))
            return (
                <button style={{ outline: 'none', fontSize: '2rem' }} onClick={e => props.addCity()}>
                    add +
                </button>
            )
        else return
    }
}

function renderDelete(props) {
    if (props.auth !== null && (props.auth !== false)) {
        if (props.auth.cityList.includes(props.actualCity))
            return (
                <button style={{ outline: 'none', fontSize: '2rem' }} onClick={e => props.deleteCity()}>
                    delete -
                </button>
            )
        else return
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        actualCity: state.actualCity
    }
}

export default connect(mapStateToProps, actions)(ActualCity);