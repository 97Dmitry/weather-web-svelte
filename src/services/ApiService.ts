import { getCurrentWeather_ApiUrl } from "../utils/getApiUrl";
import axios from "axios";

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY as string;

export enum Lang {
  en = "en",
}

class ApiService {
  private lang: string;
  private cityName: string;

  constructor(cityName: string, lang: Lang = Lang.en) {
    this.lang = lang;
    this.cityName = cityName;
  }

  async getCurrentWeather() {
    return await axios.get(getCurrentWeather_ApiUrl(this.cityName, apiKey));
  }
}

export default ApiService;
