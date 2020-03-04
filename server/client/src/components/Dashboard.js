import React from 'react';
import ActualCity from './ActualCity';
import DayOfTheWeek from './DayOfTheWeek';
import ActualWeather from './ActualWeather';

import '../styles/dashboard.scss';

const Dashboard = () => {
    return (
        <div>
            <ActualCity />
            <ActualWeather />
            <div className='Dashboard_5days'>
                <DayOfTheWeek day='test' />
                <DayOfTheWeek />
                <DayOfTheWeek />
                <DayOfTheWeek />
                <DayOfTheWeek />
            </div>
        </div>
    );
};

export default Dashboard;
