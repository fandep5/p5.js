function carre(){
    this.y = height/2;
    this.x = 64;
    this.taille = 16;
    
    this.gravity = 1;
    this.lift = -20;
    this.velocity = 0;
    
    this.up = function(){
    this.velocity += this.lift;
    }
    
    this.show = function(){
        fill(255);
        rect(this.x, this.y, this.taille, this.taille);
    }
    
    this.update = function(){
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;
        
        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }
}