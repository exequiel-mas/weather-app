function farenheitToCelsius(value = 200) {
  return Math.round(((Number(value) - 32) * 5) / 9);
}

function msToMph(value = 4) {
  return Math.round(Number(value) * 2.24 * 10) / 10;
}

function metersToMiles(value = 10000) {
  return Math.round(Number(value) * 0.000621371 * 10) / 10;
}

function getWindPos(number) {
  switch (number) {
    case number < 23 || number >= 337:
      return 'WE';
    case number >= 23 && number < 68:
      return 'WNE';
    case number >= 68 && number < 113:
      return 'WN';
    case number >= 113 && number < 158:
      return 'WNW';
    case number >= 158 && number < 203:
      return 'WW';
    case number >= 203 && number < 248:
      return 'WSW';
    case number >= 248 && number < 293:
      return 'WS';
    case number >= 293 && number < 337:
      return 'WSE';
    default:
      return 'Unknown';
  }
}

export { farenheitToCelsius, msToMph, metersToMiles, getWindPos };
