import { combineReducers } from 'redux';
import WeatherReducers from './weather_reducers';

const rootReducer = combineReducers({
  weather:WeatherReducers
});

export default rootReducer;
