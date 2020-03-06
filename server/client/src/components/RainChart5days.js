import React from 'react';
import ChartistGraph from 'react-chartist';

class RainChart5days extends React.Component {

    getLabels() {
        let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
        let date = new Date();
        let dayNumber = date.getDay();
        return weekdays.slice(dayNumber - 1, dayNumber + 5)
    }

    getSeries() {
        let dayTime = '';
        this.props.isDay ? dayTime = "Day" : dayTime = "Night";
        let series = [];
        for (let i = 0; i < 5; i++) {
            series.push(this.props.obj.DailyForecasts[i][dayTime].RainProbability)
        }
        return series;
    }
    render() {
        var data = {
            labels: this.getLabels(),
            series: [
                this.getSeries()
            ]
        };

        var options = {
            low: 0,
            height: '310px'
        };

        var type = 'Bar'

        return (
            <div>
                <ChartistGraph data={data} options={options} type={type} />
            </div>
        )
    }
}



export default RainChart5days;