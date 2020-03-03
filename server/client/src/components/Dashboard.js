import React from 'react';
import ActualCity from './ActualCity';
import DayOfTheWeek from './DayOfTheWeek';

import '../styles/dashboard.scss';

const Dashboard = () => {
    return (
        <div>
            <ActualCity />
            <div className='Dashboard_5days'>
                <DayOfTheWeek />
                <DayOfTheWeek />
                <DayOfTheWeek />
                <DayOfTheWeek />
                <DayOfTheWeek />
            </div>
        </div>
    );
};

export default Dashboard;
