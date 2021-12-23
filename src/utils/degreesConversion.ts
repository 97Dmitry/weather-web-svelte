export default function(kelvin: string) {
  return (Number(kelvin) - 273.15).toFixed(2)
}
