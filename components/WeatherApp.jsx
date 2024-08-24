import { useState, useEffect } from 'react'
import { WeatherMainInfo } from './WeatherMainInfo'
import { WeatherForm } from './WeatherForm'
import { LoadingScreen } from './LoadingScreen'
import './WeatherApp.module.css'

export function WeatherApp () {
  const [city, setCity] = useState(null)
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState()

  const loadingInfo = async (cityPar = 'London') => {
    setLoading(true)
    const request = await fetch(`${import.meta.env.VITE_URL}&key=${import.meta.env.VITE_KEY}&q=${cityPar}`)
    const data = await request.json()
    setTimeout(() => setLoading(false), 2000)
    return data
  }
  const returnData = async () => {
    const cityPar = city
    const data = await loadingInfo(cityPar)
    console.log(data)
  }
  const handleClick = e => {
    e.preventDefault()
    const city = e.target[0].value
    setCity(city)
  }
  useEffect(() => {
    if (city !== null) {
      returnData()
    }
  }, [city])

  return (
    <>
      <WeatherForm
        onSubmit={handleClick}
      />
      {loading ? <LoadingScreen /> : <WeatherMainInfo />}
    </>
  )
}
//  src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather.location.lon}5!3d${weather.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
