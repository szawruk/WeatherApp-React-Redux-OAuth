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
            <div className='Dashboard_5daysWeather'>
                <DayOfTheWeek day='1' />
                <DayOfTheWeek day='2' />
                <DayOfTheWeek day='3' />
                <DayOfTheWeek day='4' />
                <DayOfTheWeek day='5' />
            </div>
        </div>
    );
};

export default Dashboard;
