<script lang="ts">
  import ApiService, { Lang } from "../services/ApiService";
  import degreesConversion from "../utils/degreesConversion";
  import { WeatherResponseData } from "../types/weatherResponseData";

  const weather = new ApiService("omsk", Lang.en);

  let currentWeather: string;

  weather
    .getCurrentWeather()
    .then((data: WeatherResponseData) => {
      currentWeather = degreesConversion(data.data.main.temp);
    })
    .catch((error) => console.log(error));
</script>

<main>
  <p class="currentDegrees">Текущая погода: {currentWeather}</p>
</main>

<style>
  .currentDegrees {
    color: #fff;
  }
</style>
