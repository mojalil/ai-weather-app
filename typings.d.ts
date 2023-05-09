
interface CurrentWeather {
    is_day: number
    temperature: number
    time: Date
    weathercode: number
    winddirection: number
    windspeed: number
}

interface Daily {
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
    precipitation_probability_max: number[];
    precipitation_sum: number[];
    shortwave_radiation_sum: number[];
    sunrise: Date[];
    sunset: Date[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    time: Date[];
    windspeed_10m_max: number[];
}

interface DailyUnits {
    apparent_temperature_max: string;
    apparent_temperature_min: string;
    precipitation_probability_max: string;
    precipitation_sum: string;
    shortwave_radiation_sum: string;
    sunrise: string;
    sunset: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    time: string;
    windspeed_10m_max: string;
}


interface Hourly {
    apparent_temperature: number[];
    precipitation_probability: number[];
    rain: number[];
    relativehumidity_2m: number[];
    temperature_2m: number[];
    time: Date[];
}

interface HourlyUnits {
    apparent_temperature: string;
    precipitation_probability: string;
    rain: string;
    relativehumidity_2m: string;
    temperature_2m: string;
    time: string;
}

interface Root {
    current_weather: CurrentWeather;
    daily: Daily;
    daily_units: DailyUnits;
    elevation: number;
    generationtime_ms: number;
    hourly: Hourly;
    hourly_units: HourlyUnits;
    latitude: number;
    longitude: number;
    timezone: string;
    timezone_abbreviation: number;
    utc_offset_seconds: number;
}

