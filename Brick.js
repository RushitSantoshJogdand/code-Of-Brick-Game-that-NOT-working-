function Brick(x, y) {
    this.x = x
    this.y = y;
    this.xmove = 1;
    this.width = 80;
    this.height = 50;
    this.top = this.y;
    this.bottom = this.y + this.height;
    this.left = this.x;
    this.right = this.x + this.width;
    this.hp = 250;


    this.moveDown = function () {
        this.xmove *= -1;
        this.y += 30;
    }

    this.movement = function () {
        this.x = this.x + this.xmove;
    }

    this.damage = function () {
        this.hp -= 70;
    }

    this.display = function () {
        this.randomColor = color(random(255), random(255), random(255));
        fill(this.randomColor);
        // noStroke();
        stroke(255);
        rect(this.x, this.y, this.width, this.height);
    }
}