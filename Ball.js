function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.xspeed = 5;
    this.yspeed = -5;
    this.display = function () {
        fill(5);
        stroke("yellow");
        strokeWeight(3)
        ellipse(this.x, this.y, 20, 20);
    }

    this.movement = function () {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }

    this.canvasCollision = function () {
        if (this.x <= 0 || this.x + 15 >= width) {
            this.xspeed *= -1;
        }
        if (this.y <= 0) {
            this.yspeed *= -1;
        }
    }

    this.brickCollisionL = function (rx, ry) {
        this.rx = rx;
        this.ry = ry;
        this.rw = 80;
        this.rh = 50;

        if (((this.y + 15 > this.ry && this.y < this.ry + this.rh) ||
            (this.y > this.ry && this.y < this.ry + this.rh)) && (this.x + 15 >=
                this.rx && this.x <= this.rx + this.rw / 2)) {
            return true;
        } else {
            return false;
        }
    }

    this.brickCollisionR = function (rx, ry) {
        this.rx = rx;
        this.ry = ry;
        this.rw = 80;
        this.rh = 50;

        if (((this.y + 15 > this.ry && this.y < this.ry + this.rh) ||
            (this.y > this.ry && this.y + 15 < this.ry + this.rh)) && (this.x <=
                this.rx + this.rw && this.x >= this.rx + this.rw - this.rw / 2)) {
            return true;
        } else {
            return false;
        }
    }

    this.brickCollisionD = function (rx, ry) {
        this.rx = rx;
        this.ry = ry;
        this.rw = 80;
        this.rh = 50;

        if ((this.y <= this.ry + this.rh && this.y >= this.ry +
            this.rh / 2) && ((this.x + 15 > this.rx && this.x < this.rx + this.rw) ||
                (this.x + 15 > this.rx + this.rw && this.x < this.rx + this.rw) ||
                (this.x < this.rx && this.x + 15 > this.rx))) {
            return true;
        } else {
            return false;
        }
    }

    this.brickCollisionU = function (rx, ry) {
        this.rx = rx;
        this.ry = ry;
        this.rw = 80;
        this.rh = 50;

        if ((this.y + 15 >= this.ry && this.y + 15 <= this.ry +
            this.rh / 2) && ((this.x + 15 > this.rx && this.x < this.rx + this.rw) ||
                (this.x + 15 > this.rx + this.rw && this.x < this.rx + this.rw) ||
                (this.x < this.rx && this.x + 15 > this.rx))) {
            return true;
        } else {
            return false;
        }
    }

    this.playerCollision = function (rx, ry, rw, rh) {
        this.rx = rx;
        this.ry = ry;
        this.rw = rw;
        this.rh = rh;

        if ((this.x + 15 > this.rx && this.x < this.rx + this.rw) &&
            (this.y + 15 > this.ry && this.y + 15 < this.ry + this.rh)) {
            return true;
        } else {
            return false;
        }
    }

    this.deflectY = function () {
        if (this.yspeed > 0) {
            if (this.yspeed <= 8) {
                this.yspeed *= -1.5;
            } else if (this.yspeed >= 8) {
                this.yspeed *= -1;
            }
        }
        else if (this.yspeed < 0) {
            if (this.yspeed >= -8) {
                this.yspeed *= -1.5;
            }
            else if (this.yspeed <= -8) {
                this.yspeed *= -1;
            }
        }
    }
    this.deflectX = function () {
        if (this.xspeed > 0) {

            if (this.xspeed <= 8) {
                this.xspeed *= -1.5;
            }
            else if (this.xspeed >= 8) {
                this.xspeed *= -1;
            }
        }
        else if (this.xspeed < 0) {
            if (this.xspeed >= -8) {
                this.xspeed *= -1.5;
            } else if (this.xspeed <= -8) {
                this.xspeed *= -1;
            }
        }
    }
}