var gifFrames = require('gif-frames');
var fs = require('fs');

gifFrames({url: '../example.gif', frames: '0-2'}, function (err, frameData) {
    if (err) {
        throw err;
    }
    console.log(frameData[0].getImage())
    // frameData.forEach(function (frame) {
    //     frame.getImage().pipe(fs.createWriteStream(
    //         'image-' + frame.frameIndex + '.png'
    //     ));
    // });
});