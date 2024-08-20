export function WeatherMainInfo () {
  return (
    <section className='result'>
      <h2 className='city'>Mexico City</h2>
      <p className='country'>México</p>
      <div className='info'>
        <img src='https://icons.veryicon.com/png/o/weather/weather-7/sunny-3.png' className='weatherImg' />
        <div className='weatherInfo'>
          <p className='weather'>Partly Cloud</p>
          <span className='temperature'>22º</span>
        </div>
      </div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d-0.43124425!3d51.5286075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx'
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
