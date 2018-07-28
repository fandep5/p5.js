var carre;
var Barres = [];
function setup(){
    createCanvas(600,900);
    carre = new carre();
    Barres.push(new barres());
    score = new score();
    perdu = new perdu();
    bonus = new bonus();
}
function draw(){
    background(0);
    for (var i = Barres.length-1; i >= 0; i--){
        Barres[i].show();
        Barres[i].update();
        if(Barres[i].touche(carre)){
            perdu.show();  
        }
        if(Barres[i].dehorsdelecran()){
            Barres.splice(i, 1); 
        }
        
    }
    
    bonus.show();
    bonus.update();
    
    score.show();
    
    carre.update();
    carre.show();
    
    if(frameCount % 50 == 0){
        Barres.push(new barres());   
    }
}
function keyPressed(){
    if(key = 'SPACE'){
        carre.up();
    }
}