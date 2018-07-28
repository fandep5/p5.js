function barres(){
    
    this.parametreVariance = 110;
    
    this.top = random(400,450);
    this.bottom = this.top -32;
    this.x = width;
    this.speed = 4;
    this.w = 20;
    this.highlight = false;

    
    this.show = function(){
        fill(255);
        if(this.highlight){
            fill(255, 0, 0);
            rect(this.x, 0, this.w, this.top);
            rect(this.x, height-this.bottom, this.w, this.bottom);
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);
    }
    
    this.update = function(){
        this.x -= this.speed;
    }
    this.touche = function(carre){
        if(carre.y-carre.taille-5 < this.top || carre.y-carre.taille-5 > height - this.bottom || carre.y-carre.taille-5 <=0 || carre.y-carre.taille-5 >= height){
            if(carre.x>this.x && carre.x< this.x + this.w){
                this.highlight = true;
                fill(255,0,0);
                rect(this.x, 0, this.w+5, this.top);
                rect(this.x, height-this.bottom, this.w+5   , this.bottom);
                return true;
            }
        }else{
            if(carre.x>this.x && carre.x< this.x + this.w){
                score.addscore(); 
        }
        return false;
    }
    }
    this.dehorsdelecran = function(){
        if(this.x< -this.w){
            return true;
        }else{
            return false;
        }
    }
}