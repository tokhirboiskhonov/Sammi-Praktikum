const seriesDB = {
  count: 0,
  series: {},
  actors: {},
  genres: [],
  private: false,
  startApp() {
    seriesDB.count = +prompt("Nechta serial kordingiz?", "");

    while (
      seriesDB.count == "" ||
      seriesDB.count == null ||
      isNaN(seriesDB.count)
    ) {
      seriesDB.count = +prompt("Nechta serial kordingiz?", "");
    }
  },

  setFavouriteSeries() {
    for (let i = 0; i < seriesDB.count; i++) {
      let lastSerial = prompt(`Oxirgi ko’rgan serialingiz ${i + 1} ?`, "");
      let countSerial = +prompt(`Nechi baxo berasiz? ${i + 1}`, "");

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
  },

  detectingLevel() {
    if (seriesDB.count < 5) {
      console.log("Kam serial ko’ripsiz");
    } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
      console.log("Siz classik tamoshabin ekansiz");
    } else if (seriesDB.count > 10) {
      console.log("Siz serialchi zvezda ekansiz");
    }
  },

  visibleDB() {
    if (seriesDB.private) {
      seriesDB.private = false;
    } else {
      seriesDB.private = true;
    }
  },

  showDB() {
    if (!seriesDB.private) {
      console.log(seriesDB.private);
    } else {
      console.log("Ma'lumot mahfiy saqlanmoqda!");
    }
  },
  writeGenres() {
    let genres = prompt(
      "Yaxshi ko'rgan janringizni vergul yordamida yo'zing!",
      ""
    );

    while (genres == "" || genres == null) {
      genres = prompt(
        "Yaxshi ko'rgan janringizni vergul yordamida yo'zing!",
        ""
      );
    }

    if (genres) {
      seriesDB.genres = genres.split(", ");
      seriesDB.genres.sort();
    }
  },
};
seriesDB.startApp();
seriesDB.setFavouriteSeries();
seriesDB.detectingLevel();
seriesDB.visibleDB();
seriesDB.writeGenres();

console.log(seriesDB);

// let person = {
//   name: "Tokhir",
//   year: 2000,
//   job: "Frontend Developer",
//   hobbies: {
//     sport: "Tennis",
//     games: "UFC",
//   },
// };

// for (let key in person) {
//   if (typeof person[key] === "object") {
//     for (item in person[key]) {
//       console.log(`Property: ${item}, Value: ${person[key][item]}`);
//     }
//   } else {
//     console.log(`Property: ${key}, Values: ${person[key]}`);
//   }
// }

// let objLength = Object.keys(person).length;

// console.log(objLength);

// let person = {
//   name: "Tokhir",
//   year: 2000,
//   job: "Frontend Developer",
//   hobbies: {
//     sport: "Tennis",
//     games: "UFC",
//   },
// };

// const copyObj = (obj) => {
//   let clone = {};

//   for (let key in obj) {
//     clone[key] = obj[key];
//   }

//   return clone;
// };

// let secondPerson = copyObj(person);

// secondPerson.name = "Yusuf";
// secondPerson.year = 1996;
// secondPerson.job = "Backend developer";

// console.log(secondPerson);
// console.log(person);

// const suvCar = {
//   weight: 1000,
//   length: 3,
//   speed() {
//     return "100 km/h";
//   },
// };

// const nexia = {
//   weight: 800,
// };

// nexia.__proto__ = suvCar;

// console.log(nexia.speed());
