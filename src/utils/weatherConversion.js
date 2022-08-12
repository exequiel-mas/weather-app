// function kelvitToFarenheit() {
//   console.log("pendiente");
// }

function kelvinToCelsius(value = 273) {
  return Math.round(value - 273.15).toString();
}

function msToMph(value) {
  return (Math.round(Number(value) * 2.24 * 10) / 10).toString();
}

function metersToMiles(value) {
  return (Math.round(Number(value) * 0.000621371 * 10) / 10).toString();
}

export { kelvinToCelsius, msToMph, metersToMiles };
