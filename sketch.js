var bricks = [];
var player;
var playerX = 350;
var playerY = 650;
var playerW = 120;
var playerH = 20;
var score = 0;
var life = 3;

var paddle_Hit, wall_Hit, brick_Hit;
// var bottomEdge;
function preload() {
    paddle_Hit = loadSound("paddle_hit.mp3");
    wall_Hit = loadSound("wall.mp3");
    brick_Hit = loadSound("brick_hit.mp3");
}

function setup() {
    createCanvas(800, 700);
    for (i = 0; i < 7; i++) {
        var x = i * 95 + 80;
        var y = 100;
        var b = new Brick(x, y);
        bricks.push(b);
    }
    for (i = 0; i < 7; i++) {
        var x = i * 95 + 80;
        var y = 200;
        var b = new Brick(x, y);
        bricks.push(b);
    }
    for (i = 0; i < 7; i++) {
        var x = i * 95 + 80;
        var y = 300;
        var b = new Brick(x, y);
        bricks.push(b);
    }
    for (z = 0; z < 1; z++) {
        var x = 400;
        var y = 1200;
        var b = new Brick(x, y);
        bricks.push(b);
    }
    ball = new Ball(400, 635);
}

function draw() {
    background(0);
    createEdgeSprites();



    textSize(20);
    fill(255);
    stroke("cyan");
    text("Score : " + score, 680, 30);

    textSize(20);
    fill(255);
    stroke("cyan");
    text("Life : " + life, 80, 30);

    player = new Player(playerX, playerY, playerW, playerH);
    ball.display();
    ball.movement();
    ball.canvasCollision();

    if (ball.playerCollision(playerX, playerY, playerW, playerH)) {
        ball.deflectY();
        ball.y = playerY - 15;
        // paddle_Hit.play();
        if (ball.xspeed > 0) {
            if (ball.x < playerX + 120) {
                ball.deflectX();
            }

        } else if (ball.xspeed < 0) {
            if (ball.x > playerX + 120) {
                ball.deflectX();
            }
        }
    }

    controls();
    var edge = false;

    for (i = 0; i < bricks.length; i++) {
        bricks[i].display();
        bricks[i].movement();
        if (bricks[i].x + bricks[i].width > width || bricks[i].x < 0) {
            edge = true;
        }
        if (ball.brickCollisionU(bricks[i].x, bricks[i].y)) {
            ball.deflectY();
            ball.y = bricks[i].y - 15;
            bricks.splice(i, 1);
            score = score + 1;
            // brick_Hit.play();
        }
        if (ball.brickCollisionD(bricks[i].x, bricks[i].y)) {
            ball.deflectY();
            ball.y = bricks[i].y + 50 + 15;
            bricks.splice(i, 1);
            score = score + 1;
            // brick_Hit.play();
        }
        if (ball.brickCollisionL(bricks[i].x, bricks[i].y)) {
            ball.deflectX();
            ball.x = bricks[i].x - 15;
            bricks.splice(i, 1);
            score = score + 1;
            // brick_Hit.play();
        }
        if (ball.brickCollisionR(bricks[i].x, bricks[i].y)) {
            ball.deflectX();
            ball.x = bricks[i].x + 80 + 15;
            bricks.splice(i, 1);
            score = score + 1;
            // brick_Hit.play();
        }
    }
    if (edge) {
        for (i = 0; i < bricks.length; i++) {
            bricks[i].moveDown();
        }
    }
    if (bricks.length === 1) {
        gameWon();
        ball.xspeed = 0
        ball.yspeed = 0
    }

    if (ball.y > height && bricks.length !== 1) {
        life--;

    }

    gameOver();

    player.display();
}

function controls() {
    if (keyIsDown(LEFT_ARROW)) {
        playerX -= 20;

    }
    if (keyIsDown(RIGHT_ARROW)) {
        playerX += 20;
    }
}

function gameWon() {
    fill("green");
    rect(255, 310, 300, 50);
    fill(0);
    textSize(40);
    text("YOU WIN !", 300, 350);
}

// function gameOver() {
//     if (ball.y > height && bricks.length !== 1) {
//         life--;
//     }
//     if (life === 0) {

//         fill(150, 0, 0);
//         stroke("red")
//         rect(275, 310, 300, 50);
//         fill(255);
//         textSize(40);
//         text("GAME OVER", 300, 350);
//     }

// }

function gameOver() {
    if (life <= 0) {
        fill(150, 0, 0);
        stroke("red")
        rect(275, 310, 300, 50);
        fill(255);
        textSize(40);
        text("GAME OVER", 300, 350);
    }

}

