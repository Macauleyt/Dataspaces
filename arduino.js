var five = require("johnny-five"); //referencing johnny five library
var board = new five.Board(); // referencing arduino board
var MongoClient = require('mongodb').MongoClient; //requiring connection to mongodb
var url = "mongodb://Macauleyt:banana23@ds121565.mlab.com:21565/ultrasoundata"; //my personal url for connecting to mlab


board.on("ready", function () { //checking the board is ready
    var proximity = new five.Proximity({
        controller: "HCSR04" //referencing the ultrasonic sensor
        , pin: 13 //digital pin
        , freq: 1000
    });
    proximity.on("data", function () { 
        console.log(this.cm); //giving value in cm to nearest obstacle
        console.log("-----------------");
        var test = this.cm
        console.log("test " + test);
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var myobj = { //storing value as object to be placed in collection
                distance: test
            };
            if (test<400){ //limiting data upload to database
            
            db.collection("Distances").insertOne(myobj, function (err, res) {
                if (err) throw err;
                console.log("1 Document Created!"); //testing connection has been made and data has been uploaded.
                console.log(test);
                db.close();
            });
            }
            console.log(test);

            
        });
    });
});