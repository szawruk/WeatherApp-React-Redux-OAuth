import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import '../styles/app.scss';

import Header from './Header';
import Dashboard from './Dashboard';

class App extends React.Component {

    componentDidMount() {
        this.props.fetchUser();
        this.props.setCity();
        this.props.fetchWeather_5day();
        this.props.fetchWeather_12hours();
    }

    render() {
        return (
            <div className='App_container'>
                <Header />
                <Dashboard />
            </div>
        )
    }


}

export default connect(null, actions)(App);