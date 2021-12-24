export default function (kelvin: number) {
  return (Number(kelvin) - 273.15).toFixed(2);
}
