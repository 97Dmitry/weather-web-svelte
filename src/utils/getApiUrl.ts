const baseUrl = "https://api.openweathermap.org/data/2.5/weather"

export const getCurrentWeather_ApiUrl = (cityName: string, apiKey: string) => {
  return `${baseUrl}?q=${cityName}&appid=${apiKey}`;
}
