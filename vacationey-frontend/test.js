var fs = require('fs');





let data = fs.readFileSync('countries.json');
let countriesList = JSON.parse(data);

for(let i = 0 ; i < countriesList.length ; )
