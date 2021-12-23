<style>
  .currentDegrees {
    color:  #fff;
  }
</style>

<script>
import ApiService, { Lang } from "../services/ApiService";
import degreesConversion from "../utils/degreesConversion";
const weather = new ApiService("omsk", Lang.en);

let currentWeather

weather.getCurrentWeather().then(data => currentWeather = degreesConversion(data.data.main.temp))
</script>

<main>
  <p class="currentDegrees">Текущая погода: {currentWeather}</p>
</main>
