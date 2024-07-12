import {
  DailyWeather,
  LocationWeather,
  WeatherResponse,
} from '../models/LocationWeather';

export const parseWeatcherData = (
  data: LocationWeather<WeatherResponse>
): DailyWeather[] => {
  if (Array.isArray(data.weatherDetails)) {
    return data.weatherDetails;
  }

  return data.weatherDetails.Weather.map((weather) => ({
    date: weather.date,
    type: weather.type,
    averageTemperature: weather.average_temperature,
  }));
};
