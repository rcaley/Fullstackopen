import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'


const App = () => {
  const [countries, setCountries] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [filtered, setFiltered] = useState([])
  const [countryData, setCountryData] = useState({languages: []})
  const [weatherIcon, setWeatherIcon] = useState()
  const openweather_api_key = import.meta.env.VITE_OPENWEATHER_API

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
          .then(response => {
            const gottenCountries = response.data.map(row => row.name.common)
            setCountries(gottenCountries)
          })
  }, [])

  useEffect(() => {
    const filteredCountries = countries.filter(c => {
      return c.toLowerCase().includes(inputValue.toLowerCase())
  })
    setFiltered(filteredCountries)
  }, [inputValue])

  useEffect(() => {
    if (filtered.length === 1) {
      axios
        .get(
          `https://studies.cs.helsinki.fi/restcountries/api/name/${filtered}`,
        )
        .then((response) => {
          const extractedData = {
            name: response.data.name.common,
            capital: response.data.capital[0],
            area: response.data.area,
            languages: response.data.languages,
            flag: response.data.flag,
            capitalLat: response.data.capitalInfo.latlng[0],
            capitalLon: response.data.capitalInfo.latlng[1]
          };
          // setCountryData(extractedData);
          return extractedData
        })
        .then(extractedData => {
          const weatherParams = new URLSearchParams({
            lat: extractedData.capitalLat,
            lon: extractedData.capitalLon,
            units: 'metric',
            lang: 'en',
            appid: openweather_api_key
          })
          axios
          .get(`https://api.openweathermap.org/data/2.5/weather?${weatherParams}`)
          .then(response => {
            const weatherIcon = response.data.weather[0].icon
            const extractedWeatherData = {
              tempCapital: response.data.main.temp,
              windSpeedCapital: response.data.wind.speed,
              weatherURL: `https://openweathermap.org/payload/api/media/file/` +
                          `${weatherIcon}.png`
            }
            setCountryData({...extractedData, ...extractedWeatherData})
          })
        });
    }
  }, [filtered]);

  return (
    <>
      <div>
        find countries {" "}
        <input value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)} />
        <Countries 
          filtered = {filtered} 
          countryData = {countryData}
          onShow = {setFiltered}/>
      </div>
    </>
  )
}

export default App
