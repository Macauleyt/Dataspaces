var dist;
var counter = 0;
var song;

function preload() {
    song = loadSound('sounds/a1.mp3'); //Preloading all audio filed before playing the sketch.
    song3 = loadSound('sounds/d1.mp3');
    song5 = loadSound('sounds/b1.mp3');
    song7 = loadSound('sounds/c1.mp3');
    song9 = loadSound('sounds/c1s.mp3');
    song11 = loadSound('sounds/c2.mp3');
    song13 = loadSound('sounds/a1s.mp3');
    song2 = loadSound('sounds/d1s.mp3');
    song4 = loadSound('sounds/f1.mp3');
    song6 = loadSound('sounds/c1.mp3');
    song8 = loadSound('sounds/e1.mp3');
    song10 = loadSound('sounds/g1.mp3');
    song12 = loadSound('sounds/g1s.mp3');
    var url = "https://api.mlab.com/api/1/databases/ultrasoundata/collections/Distances?apiKey=_sj9UpnOyZ1u8V9D7d3Z7Gbk302aKvAx"; //Preloading all data in JSON for use later. 
    data = loadJSON(url);
}

function setup() {
    createCanvas(1000, 800); //drawing a canvas
    background(51); //setting colour
    length = Object.keys(data).length //finding the length of the array value
    frameRate(5); //speed of visualisation
    noStroke(); //setting a no stroke 
}

function draw() {
    // This is where I would like to write if statements that read the value of Data but the Data variable for some reason can not be used within the p5 functions.
    setInterval(function () {
        counter = counter + 1; //counter that cycles through the data 
        var modCounter = counter % data.length; // creating a loop that reads data up to the highest array value
        dist = (data[modCounter].distance);
    }, 5);
    if (dist > 0 && dist < 200) {
        console.log(dist);
    }
    if (dist > 170 && dist < 200) { //New parameter which draws different shape and plays different note
        song.play();
        fill(255, 10); // semi-transparent white
        rect(0, 0, width, height);
        var r = (random(0, 255));
        var s = (random(0, 255));
        var t = (random(0, 255));
        var locationX = (random(0, 1000));
        var locationY = (random(0, 800));
        fill(r, s, t);
        ellipse(locationX, locationY, dist * 5.5, dist * 5.5);
    }
    if (dist > 150 && dist < 170) { // New parameter which draws different shape and plays different note
        song2.play();
        fill(255, 10); // semi-transparent white
        rect(0, 0, width, height);
        var r = (random(0, 255));
        var s = (random(0, 255));
        var t = (random(0, 255));
        var locationX = (random(0, 1000));
        var locationY = (random(0, 800));
        fill(r, s, t);
        rect(locationX, locationY, dist * 5, dist * 5);
    }
    if (dist > 130 && dist < 150) { // New parameter which draws different shape and plays different note
        song3.play();
        fill(255, 10); // semi-transparent white
        rect(0, 0, width, height);
        var r = (random(0, 255));
        var s = (random(0, 255));
        var t = (random(0, 255));
        var locationX = (random(0, 1000));
        var locationY = (random(0, 800));
        var locationZ = (random(0, 1000));
        fill(r, s, t);
        triangle(locationZ, locationX, locationY, dist * 5, dist * 5, dist * 5);
    }
    if (dist > 110 && dist < 130) { // New parameter which draws different shape and plays different note
        song4.play();
        fill(255, 10); // semi-transparent white
        rect(0, 0, width, height);
        var r = (random(0, 255));
        var s = (random(0, 255));
        var t = (random(0, 255));
        var locationX = (random(0, 1000));
        var locationY = (random(0, 800));
        fill(r, s, t);
        ellipse(locationX, locationY, dist * 4, dist * 4);
    }
    if (dist > 95 && dist < 110) { // New parameter which draws different shape and plays different note
        song5.play();
        fill(255, 10); // semi-transparent white
        rect(0, 0, width, height);
        var r = (random(0, 255));
        var s = (random(0, 255));
        var t = (random(0, 255));
        var locationX = (random(0, 1000));
        var locationY = (random(0, 800));
        fill(r, s, t);
        rect(locationX, locationY, dist * 4, dist * 4);
    }
    if (dist > 80 && dist < 95) { // New parameter which draws different shape and plays different note
        song7.play();
        fill(255, 10); // semi-transparent white
        rect(0, 0, width, height);
        var r = (random(0, 255));
        var s = (random(0, 255));
        var t = (random(0, 255));
        var locationX = (random(0, 1000));
        var locationY = (random(0, 800));
        fill(r, s, t);
        ellipse(locationX, locationY, dist * 3.5, dist * 3.5);
    }
    if (dist > 70 && dist < 80) { // New parameter which draws different shape and plays different note
        song8.play();
        fill(255, 10); // semi-transparent white
        rect(0, 0, width, height);
        var r = (random(0, 255));
        var s = (random(0, 255));
        var t = (random(0, 255));
        var locationX = (random(0, 1000));
        var locationY = (random(0, 800));
        fill(r, s, t);
        ellipse(locationX, locationY, dist * 3.5, dist * 3.5);
    }
    if (dist > 60 && dist < 70) { // New parameter which draws different shape and plays different note
        song6.play();
        fill(255, 10); // semi-transparent white
        rect(0, 0, width, height);
        var r = (random(0, 255));
        var s = (random(0, 255));
        var t = (random(0, 255));
        var locationX = (random(0, 1000));
        var locationY = (random(0, 800));
        fill(r, s, t);
        rect(locationX, locationY, dist * 3.5, dist * 3.5);
    }
    if (dist > 55 && dist < 60) { // New parameter which draws different shape and plays different note
        song9.play();
        fill(255, 10); // semi-transparent white
        rect(0, 0, width, height);
        var r = (random(0, 255));
        var s = (random(0, 255));
        var t = (random(0, 255));
        var locationX = (random(0, 1000));
        var locationY = (random(0, 800));
        fill(r, s, t);
        ellipse(locationX, locationY, dist * 3.5, dist * 3.5);
    }
    if (dist > 50 && dist < 55) { // New parameter which draws different shape and plays different note
        song10.play();
        fill(255, 10); // semi-transparent white
        rect(0, 0, width, height);
        var r = (random(0, 255));
        var s = (random(0, 255));
        var t = (random(0, 255));
        var locationX = (random(0, 1000));
        var locationY = (random(0, 800));
        var locationZ = (random(0, 1000));
        fill(r, s, t);
        triangle(locationX, locationY, locationZ, dist * 3.5, dist * 3.5, dist * 3.5);
    }
    if (dist > 40 && dist < 50) { // New parameter which draws different shape and plays different note
        song11.play();
        fill(255, 10); // semi-transparent white
        rect(0, 0, width, height);
        var r = (random(0, 255));
        var s = (random(0, 255));
        var t = (random(0, 255));
        var locationX = (random(0, 1000));
        var locationY = (random(0, 800));
        var locationZ = (random(0, 1000));
        fill(r, s, t);
        triangle(locationZ, locationY, locationX, dist * 3.5, dist * 3.5, dist * 3.5);
    }
    if (dist > 20 && dist < 40) { // New parameter which draws different shape and plays different note
        song12.play();
        fill(255, 10); // semi-transparent white
        rect(0, 0, width, height);
        var r = (random(0, 255));
        var s = (random(0, 255));
        var t = (random(0, 255));
        var locationX = (random(0, 1000));
        var locationY = (random(0, 800));
        fill(r, s, t);
        ellipse(locationX, locationY, dist * 2.5, dist * 2.5);
    }
    if (dist > 0 && dist < 20) { // New parameter which draws different shape and plays different note
        song13.play();
        fill(255, 10); // semi-transparent white
        rect(0, 0, width, height);
        var r = (random(0, 255));
        var s = (random(0, 255));
        var t = (random(0, 255));
        var locationX = (random(0, 1000));
        var locationY = (random(0, 800));
        fill(r, s, t);
        rect(locationX, locationY, dist * 2.5, dist * 2.5);
    }
}