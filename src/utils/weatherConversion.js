function farenheitToCelsius(value = 200) {
  return Math.round(((Number(value) - 32) * 5) / 9);
}

function msToMph(value = 4) {
  return Math.round(Number(value) * 2.24 * 10) / 10;
}

function metersToMiles(value = 10000) {
  return Math.round(Number(value) * 0.000621371 * 10) / 10;
}

export { farenheitToCelsius, msToMph, metersToMiles };
