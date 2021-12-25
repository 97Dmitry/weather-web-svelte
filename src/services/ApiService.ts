import { getCurrentWeather_ApiUrl } from "../utils/getApiUrl";
import axios from "axios";
import CurrentWeatherResponseData from "../types/currentWeatherResponseData";

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY as string;

export enum LANG {
  EN = "en",
  RU = "ru",
}

export enum CITIES {
  OMSK = "Omsk",
}

class ApiService {
  private lang: LANG;
  private cityName: CITIES;

  constructor(cityName: CITIES, lang: LANG) {
    this.lang = lang;
    this.cityName = cityName;
  }

  async getCurrentWeather(): Promise<CurrentWeatherResponseData> {
    return await axios.get(getCurrentWeather_ApiUrl({ cityName: this.cityName, apiKey, lang: this.lang }));
  }
}

export default ApiService;
