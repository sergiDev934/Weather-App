import { useState, useEffect } from 'react'
import { WeatherMainInfo } from './WeatherMainInfo'
import { WeatherForm } from './WeatherForm'
import { LoadingScreen } from './LoadingScreen'
import './WeatherApp.module.css'

export function WeatherApp () {
  const [city, setCity] = useState(null)
  const [weather, setWeather] = useState(false)

  const loadingInfo = async (cityPar = 'London') => {
    const request = await fetch(`${import.meta.env.VITE_URL}&key=${import.meta.env.VITE_KEY}&q=${cityPar}`)
    if (request.ok) {
      const data = await request.json()
      setWeather('loading')
      setTimeout(() => {
        setWeather(data)
      }, 2000)
    } else console.log("The name isn't correct")
  }
  const handleClick = e => {
    e.preventDefault()
    const city = e.target[0].value
    setCity(city)
  }
  useEffect(() => {
    if (city !== null) {
      const cityPar = city
      loadingInfo(cityPar)
    }
  }, [city])

  return (
    <>
      <WeatherForm
        onSubmit={handleClick}
      />
      {
        weather === 'loading'
          ? <LoadingScreen />
          : weather && weather !== 'loading'
            ? <WeatherMainInfo
                city={weather.location.name}
                country={weather.location.country}
                lat={weather.location.lat}
                lon={weather.location.lon}
                icon={weather.current.condition.icon}
                weather={weather.current.condition.text}
                temp={weather.current.temp_c}
              />
            : <div className='result' />
      }
    </>
  )
}
