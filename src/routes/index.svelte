<script lang="ts">
  import ApiService, { LANG, CITIES } from "../services/ApiService";

  const weather = new ApiService(CITIES.OMSK, LANG.RU);

  let currentWeather: number;
  let city: string;
  let weatherAbout: string;

  weather
    .getCurrentWeather()
    .then(({ data: { current, location } }) => {
      currentWeather = current.temp_c;
      city = location.name;
      weatherAbout = current.condition.text;
    })
    .catch((error) => console.log(error));
</script>

<main>
  <p class="currentDegrees">
    Текущая погода в городе {city}: {currentWeather}, {weatherAbout}
  </p>
</main>

<style>
  .currentDegrees {
    color: #fff;
  }
</style>
