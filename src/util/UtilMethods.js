export function getParsedTemp() {
  var preciseTemp = temp.toFixed(1);
  return preciseTemp;
}

export function capitalizedText(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
