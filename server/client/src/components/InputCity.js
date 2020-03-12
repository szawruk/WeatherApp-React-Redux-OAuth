import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class InputCity extends React.Component {
    keyPressed(event) {
        if (event.key === 'Enter') {
            if (event.target.value.length > 1) {
                let city = event.target.value[0].toUpperCase() + event.target.value.slice(1);
                this.props.setCity(city);
            }

        }
    }
    render() {
        return (
            <input type="text" placeholder="Enter a city..." onKeyPress={e => this.keyPressed(e)} className='inputCity_input' />
        )
    }
}

function mapStateToProps(state) {
    return {
        actualCity: state.actualCity
    }
}

export default connect(mapStateToProps, actions)(InputCity);