"use strict";
/*
Aufgabe: <Ententeich>
Name: <Franciska Egri>
Matrikel: <275578>
Datum: <08.06.24>
Quellen: <Zusammenarbeit mit Alita Maier>
*/
var L10_Ententeich;
(function (L10_Ententeich) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let background;
    let ducks = [];
    function handleLoad(_event) {
        canvas = document.querySelector("canvas");
        L10_Ententeich.crc2 = canvas.getContext("2d");
        canvas.width = 1440;
        canvas.height = 780;
        background = new Background(canvas);
        createDucks();
        drawScene();
    }
    class Movable {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() {
            console.log("draw Movable");
        }
        update() {
            this.draw();
        }
    }
    L10_Ententeich.Movable = Movable;
})(L10_Ententeich || (L10_Ententeich = {}));
class Movable {
    position;
    direction;
    size;
    constructor(_position, _direction, _size) {
        this.position = _position;
        this.direction = _direction;
        this.size = _size;
    }
    move() {
        this.position.add(this.direction);
    }
}
function createDucks() {
    for (let i = 0; i < 3; i++) {
        const startX = canvas.width * 0.25;
        const startY = canvas.height * 0.7 + i * 30;
        const duck = new Ente(startX, startY, 1, 20, 'yellow', canvas, crc2);
        ducks.push(duck);
    }
}
function drawScene() {
    moveClouds();
    drawBackground();
    drawBushes();
    drawDucks();
    requestAnimationFrame(drawScene);
}
function moveClouds() {
    background.clouds.forEach(cloud => {
        cloud.move();
    });
}
function drawBackground() {
    crc2.clearRect(0, 0, canvas.width, canvas.height);
    background.draw();
}
function drawBushes() {
    //Büsche
    drawBush(canvas.width - 100, canvas.height * 0.8, 10, '#556B2F');
    drawBush(canvas.width - 400, canvas.height * 0.7, 10, '#556B2F');
    drawBush(canvas.width - 900, canvas.height * 0.9, 10, '#556B2F');
    drawBush(canvas.width - 600, canvas.height * 0.65, 10, '#556B2F');
    drawBush(canvas.width - 500, canvas.height * 0.85, 10, '#556B2F');
    drawBush(canvas.width - 300, canvas.height * 0.75, 10, '#556B2F');
    drawBush(canvas.width - 300, canvas.height * 0.75, 10, '#556B2F');
    drawBush(canvas.width - 800, canvas.height * 0.75, 10, '#556B2F');
}
function drawBush(x, y, size, color) {
    crc2.fillStyle = color;
    crc2.beginPath();
    crc2.arc(x, y, size, 0, 2 * Math.PI);
    crc2.arc(x + size, y - size, size, 0, 2 * Math.PI);
    crc2.arc(x - size, y - size, size, 0, 2 * Math.PI);
    crc2.arc(x + size, y + size, size, 0, 2 * Math.PI);
    crc2.arc(x - size, y + size, size, 0, 2 * Math.PI);
    crc2.closePath();
    crc2.fill();
}
function drawDucks() {
    ducks.forEach(duck => {
        duck.draw();
        duck.update();
    });
}
class Background {
    canvas;
    crc2;
    clouds = [];
    pondWidth = 150;
    pondHeight = 70;
    constructor(canvas) {
        this.canvas = canvas;
        this.crc2 = canvas.getContext('2d');
        for (let i = 0; i < 6; i++) {
            const cloud = new Wolke(-200 + i * 250, 50 + Math.random() * 50, 100, 40, 'white', 0.5);
            this.clouds.push(cloud);
        }
    }
    draw() {
        this.crc2.fillStyle = '#70B85D';
        this.crc2.fillRect(0, this.canvas.height * 0.6, this.canvas.width, this.canvas.height * 0.4);
        this.crc2.fillStyle = '#87CEEB';
        this.crc2.fillRect(0, 0, this.canvas.width, this.canvas.height * 0.6);
        this.clouds.forEach(cloud => {
            cloud.draw(this.crc2);
        });
        // Berge
        this.drawMountains(100, this.canvas.height * 0.6, 150, '#A9A9A9');
        this.drawMountains(300, this.canvas.height * 0.6, 120, '#A9A9A9');
        // Teich
        this.drawPond(250, this.canvas.height * 0.75, 250, 80, '#4682B4');
    }
    drawMountains(x, y, height, color) {
        this.crc2.fillStyle = color;
        this.crc2.beginPath();
        this.crc2.moveTo(x, y);
        this.crc2.lineTo(x + 75, y - height);
        this.crc2.lineTo(x + 150, y);
        this.crc2.closePath();
        this.crc2.fill();
    }
    drawPond(x, y, width, height, color) {
        this.crc2.fillStyle = color;
        this.crc2.beginPath();
        this.crc2.ellipse(x, y, width, height, 0, 0, Math.PI * 2);
        this.crc2.closePath();
        this.crc2.fill();
    }
}
class Wolke extends Movable {
    cloudColor;
    constructor(_cloudColor, _direction, _position, _size) {
        super(_position, _direction, _size);
        this.cloudColor = _cloudColor;
    }
    draw(crc2) {
        crc2.fillStyle = this.cloudColor;
        crc2.beginPath();
        crc2.arc(this.position.x + 20, this.position.y, 20, 0, Math.PI * 2);
        crc2.arc(this.position.x + 50, this.position.y - 10, 25, 0, Math.PI * 2);
        crc2.arc(this.position.x + 90, this.position.y, 20, 0, Math.PI * 2);
        crc2.arc(this.position.x + 120, this.position.y + 10, 30, 0, Math.PI * 2);
        crc2.fill();
    }
}
class Ente extends Movable {
    color;
    canvas;
    crc2;
    constructor(_size, _color, _canvas, _crc2, _direction, _position) {
        super(_position, randomPosition(), _size);
        this.color = _color;
        this.canvas = _canvas;
        this.crc2 = _crc2;
    }
    draw() {
        //Körper
        this.crc2.beginPath();
        this.crc2.arc(this.position.x, this.position.y, this.size.x * 0.6, 0, Math.PI * 2);
        this.crc2.fillStyle = 'yellow';
        this.crc2.fill();
        //Kopf
        this.crc2.beginPath();
        this.crc2.arc(this.position.x, this.position.y + this.size.x * 0.5, this.size.y * 0.8, 0, Math.PI * 2);
        this.crc2.fillStyle = 'yellow';
        this.crc2.fill();
        // Augen
        this.crc2.fillStyle = 'black';
        this.crc2.beginPath();
        this.crc2.arc(this.position.x - this.size.x * 0.2, this.position.y - this.size.y * 0.1, 2, 0, Math.PI * 2); // linkes Auge
        this.crc2.fill();
        this.crc2.beginPath();
        this.crc2.arc(this.position.x + this.size.x * 0.2, this.position.y - this.size.y * 0.1, 2, 0, Math.PI * 2); // rechtes Auge
        this.crc2.fill();
    }
    update() {
        const grassTopBoundary = this.canvas.height * 0.6;
        const grassBottomBoundary = this.canvas.height;
        const leftBoundary = this.canvas.width * 0.05;
        const rightBoundary = this.canvas.width * 0.3;
        const nextX = this.position.x + Math.cos(this.direction.x) * this.speed;
        const nextY = this.position.y;
        if (nextX >= leftBoundary && nextX <= rightBoundary) {
            this.position.x = nextX;
        }
        else {
            this.direction += Math.PI;
        }
    }
}
function randomPosition() {
    let x = Math.random() * Math.PI * 2;
    let y = Math.random() * Math.PI * 2;
    return new Vector(x, y);
}
//# sourceMappingURL=teich.js.map