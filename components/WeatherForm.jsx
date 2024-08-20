export function WeatherForm ({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Write a City' />
    </form>
  )
}
