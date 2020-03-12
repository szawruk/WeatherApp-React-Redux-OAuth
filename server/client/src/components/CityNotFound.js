import React from 'react';
import { connect } from 'react-redux';


class CityNotFound extends React.Component {

    render() {
        return (
            <div>
                {this.renderWarning()}
            </div>
        )
    }

    renderWarning() {
        if (this.props.isCityFound === 'no') {
            return (
                <div className='city_not_found'>
                    <span>
                        City not found!
                    </span>
                </div>

            )
        } else return

    }
}

function mapStateToProps(state) {
    return {
        isCityFound: state.isCityFound
    }
}

export default connect(mapStateToProps)(CityNotFound);