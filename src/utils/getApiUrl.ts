import { CITIES, LANG } from "../services/ApiService";

const baseUrl = " https://api.weatherapi.com/v1";

interface getCurrentWeatherProps {
  cityName: CITIES;
  apiKey: string;
  lang: LANG;
}
export const getCurrentWeather_ApiUrl = ({ cityName, apiKey, lang }: getCurrentWeatherProps) => {
  return `${baseUrl}/current.json?q=${cityName}&lang=${lang}&key=${apiKey}`;
};
