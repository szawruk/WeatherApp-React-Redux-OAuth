import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../styles/inputCity.scss';

class InputCity extends React.Component {
    keyPressed(event) {
        if (event.key === 'Enter') {
            this.props.setCity(event.target.value);
        }
    }
    render() {
        return (
            <input type="text" placeholder="Enter a city..." onKeyPress={e => this.keyPressed(e)} className='inputCity_input' />
        )
    }
}

export default connect(null, actions)(InputCity);