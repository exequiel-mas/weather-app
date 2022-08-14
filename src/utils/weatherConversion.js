function kelvintToFarenheit(value) {
  return Math.ceil(Math.round( Number(value) - 273.15) * (9/5) + 32).toString();
}

function kelvinToCelsius(value = 273) {
  return Math.round(value - 273.15).toString();
}

function msToMph(value) {
  return (Math.round(Number(value) * 2.24 * 10) / 10).toString();
}

function metersToMiles(value) {
  return (Math.round(Number(value) * 0.000621371 * 10) / 10).toString();
}

const getDrawDescription = (description) => {
  switch (description) {
    case 'broken clouds':
      return 'HeavyCloud';
    case 'scattered clouds':
      return 'LightCloud';
    case 'overcast clouds':
      return 'HeavyCloud';
    case 'light rain':
      return 'LightRain';
    case 'few clouds':
      return 'LightCloud';
    case 'moderate rain':
      return 'HeavyRain';
    case 'clear sky':
      return 'Clear';
    case 'heavy intensity rain':
      return 'HeavyRain';
    case 'light snow':
      return 'Snow';
    default:
      return 'LightCloud';
  }
}

export { kelvinToCelsius, kelvintToFarenheit, msToMph, metersToMiles, getDrawDescription };
