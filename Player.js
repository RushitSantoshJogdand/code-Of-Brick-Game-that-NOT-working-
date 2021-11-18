function Player(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.display = function () {
        fill(5);
        stroke("yellow");
        strokeWeight(3);
        rect(this.x, this.y, this.w, this.h);
        // triangle(30, 75, 58, 20, 86, 75);
    }

}