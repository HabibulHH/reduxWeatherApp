import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weatherlist'
import Weatherlist from '../containers/weatherlist';

export default class App extends Component {
  render() {
    return (
      <div>
      <SearchBar/>
      <Weatherlist/>
      </div>
    );
  }
}
