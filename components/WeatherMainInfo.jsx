export function WeatherMainInfo ({ city, country, lat, lon, icon, weather, temp }) {
  return (
    <section className='result'>
      <h2 className='city'>{city}</h2>
      <p className='country'>{country}</p>
      <div className='info'>
        <img src={icon} className='weatherImg' />
        <div className='weatherInfo'>
          <p className='weather'>{weather}</p>
          <span className='temperature'>{temp}º</span>
        </div>
      </div>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${lon}5!3d${lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
        width='100%'
        height='350'
        style={{ border: 0 }}
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </section>
  )
}
