import React from 'react';
import ChartistGraph from 'react-chartist';
import { FtoC } from './usefulFuncions';

class CurrentChartTemp extends React.Component {

    getLabels() {
        let date = new Date();
        let hour = date.getHours();
        let labels = [];
        for (let i = 0; i < 12; i++) {
            let hourToAdd = hour % 24
            labels.push(hourToAdd);
            hour++;
        }
        return labels;
    }

    getSeries() {
        let series = [];
        for (let i = 0; i < 12; i++) {
            series.push(FtoC(this.props.obj[i].Temperature.Value));
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

        let type = 'Line';

        return (
            <div>
                <ChartistGraph data={data} options={options} type={type} />
            </div>
        )
    }
}



export default CurrentChartTemp;