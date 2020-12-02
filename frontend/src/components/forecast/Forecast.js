import React, {Component} from 'react';
import axios from 'axios';
const API = "http://api.hgbrasil.com/weather?woeid=455822&format=json-cors"

class Forecast extends Component{
    state = {
        city:'',
        forecast:[]
    }

    componentDidMount() {
        axios.get(API)
            .then(({data}) => {
                console.log(data)
                this.setState({
                    city : data.results.city,
                    forecast : data.results.forecast
                });
            });
    }

    render(){
        return(
            <div className="ui container">
                <h2> {this.state.city} </h2>
                <table className="ui striped table">
                    <thead>
                    <tr>
                        <th>Data</th>
                        <th>Min.</th>
                        <th>Max.</th>
                        <th>Previsão</th>
                        <th>img</th>
                    </tr>

                    </thead>
                    <tbody>

                    {this.state.forecast.map(
                        (day, index) =>{
                            return (
                                <tr key={index}>
                                    <td>{day.date}</td>
                                    <td>{day.min}</td>
                                    <td>{day.max}</td>
                                    <td>{day.description}</td>
                                    <td><img
                                        src={`/weather-icons/${day.condition}.svg`}
                                        alt={day.description}
                                        height='30px'/>
                                    </td>
                                </tr>
                            )
                        }
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Forecast;
