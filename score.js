record = 0;
function score(){
    this.score = 0;
    this.show = function(){
        select('#score').html(this.score);
    }
    this.addscore = function(){
        this.score = this.score +  0.25;
        select('#score').html(this.score);
    }
}

function perdu(){
    this.show = function(){
        carre.y = height/2;
        carre.x = 64;
        Barres = [];
        fill(255);
        noStroke();
        rect(width/4, height/3, width/2, height/3);

        textePerdu = createP("Perdu!");
        textePerdu.position(265, 350);  
        textePerdu.class("perdu");
        
        texteScore = createP("Score: " + score.score);
        texteScore.position(275, 410);
        texteScore.class("score");
        
        texte = createP("Rejouer");
        texte.position(250, 450);
        texte.class("rejouer");
        texte.mouseClicked(rafraichir);
    }
}
function rafraichir(){
    location.reload(); 
}