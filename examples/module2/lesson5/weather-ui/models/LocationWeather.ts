export enum WeatherType {
  Sunny = 'sunny',
  Cloudy = 'cloudy',
  Rainy = 'rainy',
  Snowy = 'snowy',
}

export type DailyWeather = {
  averageTemperature: number;
  date: string;
  type: WeatherType;
};

export interface LocationWeather<T> {
  city: string;
  country: string;
  weatherDetails: T[] | { Weather: T[] };
}

export type WeatherResponse = Omit<DailyWeather, 'averageTemperature'> & {
  [key in 'average_temperature' | 'averageTemperature']: number;
};
