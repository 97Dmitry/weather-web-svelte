<script lang="ts">
  import ApiService, { LANG, CITIES } from "../services/ApiService";
  import WeatherCard from "../components/WeatherCard/WeatherCard.svelte";

  const weather = new ApiService(CITIES.OMSK, LANG.RU);

  let currentDegrees: number;
  let cityName: string;
  let weatherAbout: string;

  weather
    .getCurrentWeather()
    .then(({ data: { current, location } }) => {
      currentDegrees = current.temp_c;
      cityName = location.name;
      weatherAbout = current.condition.text;
    })
    .catch((error) => console.log(error));
</script>

<WeatherCard cityName="{cityName}" currentDegrees="{currentDegrees}" weatherAbout="{weatherAbout}" />

<style>
</style>
