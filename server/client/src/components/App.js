import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

import Header from './Header';
import Dashboard from './Dashboard';

class App extends React.Component {

    componentDidMount() {
        this.props.fetchUser();
        this.props.setCity();
    }

    render() {
        return (
            <div>
                <Header />
                <Dashboard />
            </div>
        )
    }


}

export default connect(null, actions)(App);