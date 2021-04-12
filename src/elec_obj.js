const fs = require('fs');

function csvConverter(){
    fs.readFile('../data/elec.csv', function (err,data) {
        if (err) {
            return console.log(err);
        }
        bufferString = data.toString(); 
        arr = bufferString.split('\n');

        var jsonObj = [];
        var headers = arr[0].split(',');
        for(var i = 1; i < arr.length; i++) {
            var data = arr[i].split(',');
            var obj = {};
                for(var j = 0; j < data.length; j++) {
                    obj[headers[j].trim()] = data[j].trim();
                }
            jsonObj.push(obj);
        }
        return JSON.stringify(jsonObj);
    })
} 

const elecResults = csvConverter();

exports.elecResults = elecResults;
