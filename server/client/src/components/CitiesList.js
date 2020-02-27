import React from 'react';
import { connect } from 'react-redux';


class CitiesList extends React.Component {

    renderList() {
        const cities = this.props.auth.cityList;
        return cities.map(city => {
            return (
                <option>
                    {city}
                </option>
            )
        })
    }

    render() {
        return (
            <select>
                {this.renderList()}
            </select>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(CitiesList);