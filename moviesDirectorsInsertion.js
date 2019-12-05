const fs = require('fs');
const file = fs.readFileSync('moviedata.json');
const readData = JSON.parse(file);

const directorArray = [];
const moviesArray = [];

function moviesReturn() {
    let checkArray=[];
  for (const obj of readData) {
    if (!checkArray.includes(obj.Director)) {
      directorArray.push({ director_name: obj.Director });
      checkArray.push(obj.Director);
    }
    for (const key in obj) {
      if (obj[key] === 'NA') {
        obj[key] = null;
      }
    }
    moviesArray.push({
      rank: obj.Rank,
      title: obj.Title,
      description: obj.Description,
      runtime: obj.Runtime,
      genre: obj.Genre,
      rating: obj.Rating,
      metascore: obj.Metascore,
      votes: obj.Votes,
      gross: obj.Gross_Earning_in_Mil,
      director: obj.Director,
      actor: obj.Actor,
      year: obj.Year,
    });
  }
  return moviesArray;
}

moviesReturn();
module.exports = { moviesArray, directorArray };
