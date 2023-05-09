import { gql, useQuery } from '@apollo/client';

const fetchWeatherQuery = gql`
  query MyQuery  (
    $current_weather: String
    $daily: String = "apparent_temperature_max,apparent_temperature_min,precipitation_probability_max,precipitation_sum,shortwave_radiation_sum,sunrise,sunset,temperature_2m_max,temperature_2m_min,time,windspeed_10m_max"
    $hourly: String = "apparent_temperature,precipitation_probability,rain,relativehumidity_2m,temperature_2m,time"
    $latitude: String!
    $longitude: String!
    $timezone: String!

  )   {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        precipitation_probability_max
        precipitation_sum
        shortwave_radiation_sum
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        windspeed_10m_max
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        precipitation_probability_max
        precipitation_sum
        shortwave_radiation_sum
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        windspeed_10m_max
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        precipitation_probability
        rain
        relativehumidity_2m
        temperature_2m
        time
      }
      hourly_units {
        apparent_temperature
        precipitation_probability
        rain
        relativehumidity_2m
        temperature_2m
        time
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`;


