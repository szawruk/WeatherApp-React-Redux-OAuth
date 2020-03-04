import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import '../styles/citiesList.scss';


class CitiesList extends React.Component {

    renderList() {
        const cities = this.props.auth.cityList;
        let key = 0;
        return cities.map(city => {
            return (
                <input className='dropdown_element' onClick={e => {
                    this.props.setCity(e.target.value);
                    //this.props.fetchWeather_12hours();
                    // this.props.fetchWeather_5days();
                }} key={key = key + 1} value={city} readOnly />
            )
        })
    }

    render() {
        return (
            <div className='dropdown'>
                <button>Your cities list</button>
                <div className='dropdown_content'>
                    {this.renderList()}
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, actions)(CitiesList);