function bonus(){
    this.speed = 4;
    this.x = width;
    this.show = function(){
        fill(255, 0, 0);
        rect(this.x+20, height/2, 40, 40);
    }
    this.update = function(){
        this.x -= this.speed;
    }
}