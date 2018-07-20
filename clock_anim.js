var c;

function loop() {
    var d = new Date();
    var sec = d.getSeconds() + d.getUTCMilliseconds() / 1000;

    // Animation:
    var objc = c.translate([Math.sin(sec) * 30, Math.cos(sec) * 30, 0]);

    // Recreating scene
    self.postMessage({
        cmd: 'rendered',
        objects: [
            objc.toCompactBinary()
        ]
    });
    //    setTimeout(function () {loop();}, 10);
}

function main() {
    // Objects initialization:
    c = sphere();
    
    //loop();
    setInterval(loop, 10); // setInterval can be bad on slow pc
    
    // Creating a very small object to avoid warnings
    return cube(0.001);
}
