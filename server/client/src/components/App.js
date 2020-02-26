import React from 'react';
import axios from 'axios';

import Header from './Header';
import ActualCity from './ActualCity';

class App extends React.Component {

    componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        const response = await axios.get('/info');
        console.log(response.data);
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

export default App;