function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var outerCircle = canvas.getContext('2d');
        outerCircle.beginPath();
        outerCircle.arc(250, 250, 250, 0, 2 * Math.PI);
        outerCircle.stroke();

        var circleArray = [];

        var ranX = Math.floor((Math.random() * 500) + 1);
        var ranY = Math.floor((Math.random() * 500) + 1);
        var ranRad = Math.floor((Math.random() * 250) + 1);

        var toggle = true;

        var distanceToCenter = Math.sqrt(Math.pow(ranX - 250, 2) + Math.pow(ranY - 250,2));

        for (i = 0; i < 100; i++){
            if (circleArray) {
                if (distanceToCenter < 250 - ranRad) {
                    for (i = 0; i < circleArray.length; i++) {
                        if (Math.sqrt(Math.pow(circleArray[i].positionX - ranX,2 ) + Math.pow(circleArray[i].positionY - ranY,2))){
                            var d = new circle(ranX, ranY, ranRad);
                            circleArray.push(d);
                        }
                    }
                }
            } else {
                if (distanceToCenter < 250 - ranRad) {
                    var c = new circle(ranX, ranY, ranRad);
                    circleArray.push(c);
                }

            }
        }

        for (i = 0; i < circleArray.length; i++) {
            var circle = canvas.getContext('2d');
            circle.beginPath();
            circle.arc(circleArray[i].positionX, circleArray[i].positionY, circleArray[i].radius, 0, 2 * Math.PI);
            circle.stroke();
        }

    }
}

function circle(positionX, positionY, radius) {

        this.positionX = positionX;
        this.positionY = positionY;
        this.radius = radius;
 
}