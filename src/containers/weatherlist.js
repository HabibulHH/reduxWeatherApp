import React,{Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart'


class WeatherList extends Component{

    
    renderWeather(data)
    {
        const temps=data.list.map(weather=>weather.main.temp);
        const pressure=data.list.map(weather=>weather.main.pressure);
        const humidity=data.list.map(weather=>weather.main.humidity);
        return (
            <tr key={data.city.name}>
                <td>{data.city.name}</td>
                <td><Chart data={temps} color="orange" /></td>
                <td><Chart data={pressure} color="red" /></td>
                <td><Chart data={humidity} color="blue" /></td>
            </tr>
        )
    }
    render()
    {
        return(
            <div className="table-responsive">
            <table className="table table-hover">

          <thead>
            <tr>
                <th>City</th>
                <th> Temperature</th>
                <th>Pressure</th>
                <th>Humidity</th>
            </tr>
            </thead>
            <tbody> 
               {this.props.weather.map(this.renderWeather)}
            </tbody>
            </table>
            </div>
        )
    }

}

function mapStateToProps({weather})
{
   return {weather}
}

export default connect(mapStateToProps)(WeatherList)