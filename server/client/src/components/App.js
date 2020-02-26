import React from 'react';
import axios from 'axios';

import Header from './Header';
import ActualCity from './ActualCity';
import * as actions from '../actions';
import { connect } from 'react-redux';

class App extends React.Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <Header />
                <ActualCity />
            </div>
        )
    }


}

export default connect(null, actions)(App);