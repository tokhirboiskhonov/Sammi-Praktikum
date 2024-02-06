let numberOfSeries = +prompt("Nechta serial kordingiz?", "");
const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 2; i++) {
  let lastSerial = prompt("Oxirgi ko’rgan serialingiz?", "");
  let countSerial = +prompt("Nechi baxo berasiz?", "");

  if (
    lastSerial !== null &&
    countSerial !== null &&
    lastSerial !== "" &&
    countSerial !== ""
  ) {
    seriesDB.series[lastSerial] = countSerial;
  } else {
    i--;
  }
}

if (seriesDB.count < 5) {
  console.log("Kam serial ko’ripsiz");
} else if (seriesDB.count >= 5 && seriesDB.count < 10) {
  console.log("Siz classik tamoshabin ekansiz");
} else {
  console.log("Siz serialchi zvezda ekansiz");
}
console.log(seriesDB);
