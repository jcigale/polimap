// import fs from 'fs';

// function csvConverter(){
//     fs.readFile('../data/elec.csv', function (err,data) {
//         if (err) {
//             return console.log(err);
//         }
//         bufferString = data.toString(); 
//         arr = bufferString.split('\n');

//         var jsonObj = [];
//         var headers = arr[0].split(',');
//         for(var i = 1; i < arr.length; i++) {
//             var data = arr[i].split(',');
//             var obj = {};
//                 for(var j = 0; j < data.length; j++) {
//                     obj[headers[j].trim()] = data[j].trim();
//                 }
//             jsonObj.push(obj);
//         }
//         return JSON.stringify(jsonObj);
//     })
// } 
import * as data from '../data/elec.csv'

function csvJSON(csv){

  var lines=csv.split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

	  var obj = {};
	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  result.push(obj);

  }

  return JSON.stringify(result); 
}

const elecResults = csvJSON(data);

const _elecResults = elecResults;
export { _elecResults as elecResults };
