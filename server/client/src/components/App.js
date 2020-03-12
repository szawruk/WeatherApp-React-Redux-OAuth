import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

import '../styles/style.scss';

import Header from './Header';
import Dashboard from './Dashboard';

class App extends React.Component {

    componentDidMount() {
        this.props.fetchUser();
        this.props.setDay(1);
        this.setCityFirst();

    }

    render() {

        return (
            <div className='App_container'>
                <Header />
                <Dashboard />
            </div>
        )
    }

    setCityFirst() {
        switch (this.props.auth) {
            case null: {
                this.props.setCity('Warszawa');
                return;
            }

            case false: {
                this.props.setCity('Warszawa');
                return;
            }

            default: {
                if (this.props.auth.cityList.length > 0) {
                    this.props.setCity(this.props.auth.cityList[0]);
                } else this.props.setCity('Warszawa');
                return;
            }
        }
    }


}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, actions)(App);