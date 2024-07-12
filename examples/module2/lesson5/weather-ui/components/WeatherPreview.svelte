<script lang="ts">
    import { parseWeatcherData } from '../lib/ParseWeatherData';
  import { LocationWeather, WeatherResponse } from '../models/LocationWeather';
  import DailyWeather from './DailyWeather.svelte';

  export let weather: LocationWeather<WeatherResponse>;

</script>

<div>
  <h2 class="text-2xl py-4">
    {weather.city}, {weather.country}
  </h2>
  <ul class="space-y-4">
    {#each parseWeatcherData(weather) as details}
      <DailyWeather dailyWeather={details} country={weather.country} />
    {/each}
  </ul>
</div>
