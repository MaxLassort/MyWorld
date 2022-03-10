window.addEventListener('DOMContentLoaded', function() {
    
    const canvas = document.querySelector('canvas');
    const ctx= canvas.getContext('2d');

////////////////////////// AddEvenListener Pour recadrer la taille du canvas à chaque resize de l'écran
function displayCanvas() {
    ctx.canvas.width=window.innerWidth
    ctx.canvas.height=window.innerHeight
    
    
}
    displayCanvas()
window.addEventListener('resize', displayCanvas)
 

const keys = []; 
let collisionRight=false;
let collisionLeft=false;
let collisionDown=false;
let collisionUp=false;
let scale=1.3
let canvasSize= {
    width:3840,
    height:2160,
}


   
   
ctx.imageSmoothingEnabled=false

//  Je créer un tableau key 
const player= {
    x:1500,
    y:1200,
    width: 32,
    height: 32, 
    frameX: 0,
    frameY: 0,
    speed: 15,
    moving: false,
};

// Speed equivaut au nombre de pixel par déplacement

const playerSprite= new Image(); 
playerSprite.src= "img/main_chara.png ";
const background= new Image(); 
background.src="img/background.png";
const office =new Image();
office.src="img/interieur_git.png";
const retraining= new Image();
retraining.src='img/reconversion.png';


    

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH ){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH );
}
//  Je crée une fonction avec des paramètres de façon à pouvoir réutiliser drawImage rapidement

// DrawImage, je définie la position : je multiplie la width  par frameX, si frameX=0, le resultat vaut 0 et drawImage part de 0 sur x, si par 1, il part à la taille de l'image, soit le frame suivant qui se situe à 32px sur l'axe X

//  Pour la frame Y il en est de même si frameY=0


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Gerer lorsque MAJ plus mettre fleches directionnelles!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const up = document.querySelector('.up');
const right = document.querySelector('.right');
const down = document.querySelector('.down');
const left = document.querySelector('.left');

const up = document.querySelector('.up')
const blackBoxs = [
    // Trees
    {
        x:655,
        y:1030,
        width:60,
        height:70,
    },
    {
        x:795,
        y:1000,
        width:60,
        height:70,
    },
    {
        x:515,
        y:1140,
        width:60,
        height:70,
    },
    {
        x:445,
        y:1310,
        width:60,
        height:70,
    },
    {
        x:800,
        y:1325,
        width:60,
        height:70,
    },
    {
        x:2310,
        y:1130,
        width:60,
        height:60,
    },
    {
        x:2370,
        y:1150,
        width:60,
        height:60,
    },
    {
        x:2470,
        y:1200,
        width:150,
        height:60,
    },
    {
        x:2150,
        y:1340,
        width:600,
        height:60,
    },
    {
        x:2010,
        y:1260,
        width:180,
        height:60,
    },
    {
        x:2700,
        y:1200,
        width:150,
        height:500,
    },
    {
        x:1240,
        y:1700,
        width:200,
        height:200,
    },
    // Mountains
    {
        x:410,
        y:1550,
        width:700,
        height:700,
    },
    // fences
    {
        x:900,
        y:1270,
        width:930,
        height:350,
    },
    {
        x:990,
        y:660,
        width:550,
        height:200,
    },
    {
        x:1055,
        y:350,
        width:20,
        height:400,
    },
    {
        x:1655,
        y:350,
        width:20,
        height:300,
    },
    {
        x:1655,
        y:640,
        width:200,
        height:20,
    },
    {
        x:2120,
        y:1600,
        width:30,
        height:500,
    },
    {
        x:1170,
        y:1600,
        width:30,
        height:500,
    },
    {
        x:1490,
        y:1720,
        width:45,
        height:90,
    },
    {
        x:1635,
        y:1720,
        width:45,
        height:90,
    },
    {
        x:1670,
        y:1840,
        width:45,
        height:90,
    },
    {
        x:1480,
        y:1900,
        width:30,
        height:30,
    },
    // bush
    {
        x:890,
        y:1090,
        width:60,
        height:20,
    },
    {
        x:890,
        y:1090,
        width:20,
        height:50,
    },
    {
        x:890,
        y:1240,
        width:20,
        height:50,
    },
    {
        x:1840,
        y:810,
        width:20,
        height:300,
    },
    {
        x:1490,
        y:800,
        width:350,
        height:30,
    },
    {
        x:2260,
        y:670,
        width:600,
        height:200,
    },
    {
        x:1980,
        y:790,
        width:500,
        height:300,
    },
    {
        x:2010,
        y:1130,
        width:60,
        height:60,
    },
    {
        x:1910,
        y:1300,
        width:240,
        height:330,
    },
    // houses
    
    {
        x:950,
        y:1045,
        width:910,
        height:50,
    },
    {
        x:1800,
        y:470,
        width:600,
        height:200,
    },
    {
        x:1980,
        y:1030,
        width:500,
        height:100,
    },
    {
        x:1990,
        y:1900,
        width:60,
        height:60,
    },
    {
        x:2010,
        y:1810,
        width:62,
        height:40,
    },
    {
        x:2050,
        y:1760,
        width:30,
        height:30,
    },

]

function moveTouch(){
    up.addEventListener('touchstart', function(){
        (keys.push('z'))
    } )
    up.addEventListener('touchend', function() {
        keys.splice(0,100)
        player.moving=false
    })
    right.addEventListener('touchstart', function(){
        (keys.push('d'))
    } )
    right.addEventListener('touchend', function() {
        keys.splice(0,100)
        player.moving=false
    })
    down.addEventListener('touchstart', function(){
        (keys.push('s'))
    } )
    down.addEventListener('touchend', function() {
        keys.splice(0,100)
        player.moving=false
    })
    left.addEventListener('touchstart', function(){
        (keys.push('q'))
    } )
    left.addEventListener('touchend', function() {
        keys.splice(0,100)
        player.moving=false
    })
}




window.addEventListener('keydown', function(e){ 
//    Attention à la majuscule 
    keys.push(e.key)
    
    
    // player.moving=true
})
// keys[e.code]=true ==> une autre façon d'ajouter la valeur a l'array
window.addEventListener('keyup', function(e){
    keys.splice(0,1000)
    player.moving=false
})
// Pour crée une fonction avec tous les keydown, je crée un tableau, auquel j'atoute la keyCode lorsque keydown et je la delete lorsque keyup. Je peux ensuite crée une fonction en mettant en condition : "si mon array est vrai alors tu peux bouger"

// Je rajoute la variable player.moving true à chaque if pour actualiser la keydown, car cela peut bug avec le fait qu'on ne relache pas le bouton avant d'appuyer sur un autre bouton (je clique sur 'aller a gauche' avant de relacher 'descendre')
function movePlayer(){
        if(keys.includes('z') && player.y>360){
            player.y -= player.speed
            player.frameY=3;
            player.moving=true
           
        }
        if(keys.includes('s') && player.y<2000){
            player.y += player.speed
            player.frameY=0;
            player.moving=true
        }
        if(keys.includes('d') && player.x<3000){
            player.x += player.speed
            player.frameY=2;
            player.moving=true
        }
        if(keys.includes('q') && player.x>360){
            player.x -= player.speed
            player.frameY=1;
            player.moving=true
        }   
}
// J'incrémente frameX pour animer le sprite en déplacant draw image de gauche à droite 
// je rajoute la condition player.moving pour définir quand l'animation doit être lancée
function handlePlayerFrame(){
    if(player.frameX<3 && player.moving===true) {
        player.frameX++
    } else {
        player.frameX=0
    }
}

// function animate() {
//     ctx.clearRect(0,0,canvas.width, canvas.height)
//     window.requestAnimationFrame(animate);
//     drawSprite(playerSprite, player.width*player.frameX, player.height*player.frameY, player.width, player.height, player.x, player.y, player.width, player.height )
//     movePlayer()
//     handlePlayerFrame()
// }
// animate()

// Je crée une fonction capable de mofifier la valeur des FPS de requestAnimationFrame
let fps, fpsInterval, startTime, now, then, elapsed; 

function startAnimating(fps) {
    // fpsInterval va etre le temps entre chaque frame, je le met en miliseconde 
    fpsInterval= 1000/fps; 
    // Je calcule combien de temps s'est écoulé entre la derniere frame et maintenant
    then= Date.now();
    startTime= then;
    animate();
}
// J'ai rien compris je copie du code betement
function animate() {
    requestAnimationFrame(animate);
    now=Date.now();
    elapsed= now-then;
    if(elapsed>fpsInterval){
        then=now - (elapsed % fpsInterval);
        ctx.clearRect(0,0,canvas.width, canvas.height)
        ctx.drawImage(background, 0, 0, canvasSize.width/1.1, canvasSize.height/1.1, 0, 0, canvasSize.width, canvasSize.height);
        window.requestAnimationFrame(animate);
        enterInHouse()   
        drawSprite(playerSprite, player.width*player.frameX, player.height*player.frameY, player.width, player.height, player.x, player.y, player.width*scale, player.height*scale )
        movePlayer()
        moveTouch()
        handlePlayerFrame()
        ctx.resetTransform(); 
        ctx.translate(-(player.x-canvas.width / 2), -(player.y-canvas.height / 2));      
        createBluebox()
        rectColiision()
       console.log(indexBluebox)
        
           
    } 
}
startAnimating(15)
// espace colision ///////////////////////////////////////////////////////////////////////////////
  
let inHouse=false
let greenBoxs = [
    {
        x:1150,
        y:700,
        w:65,
        h:400,
},
    {
        x:1050,
        y:670,
        w:550,
        h:100,
},
    {
        x:1580,
        y:670,
        w:50,
        h:450,
},
    {
        x:1420,
        y:1080,
        w:200,
        h:50,
},
    {
        x:1200,
        y:1080,
        w:130,
        h:50,
},
    {
        x:1310,
        y:890,
        w:80,
        h:40,
},
    {
        x:1460,
        y:930,
        w:70,
        h:100,
},
]

function rectColiision() {
    if(inHouse===false) {
        for( let object of blackBoxs){
            ctx.fillStyle="transparent"
            ctx.fillRect(object.x, object.y, object.width, object.height)
            createBlackBox()
        }
    } else {
        for(let greenBox of greenBoxs ) {
            ctx.fillStyle='transparent'
            ctx.fillRect(greenBox.x, greenBox.y, greenBox.w, greenBox.h)
            greenHitBox()
        }
    }
}

// Je dois faire apparaitre la maison lorsque je rentre dans le carré bleu
// je dois enlever les collisions extérieurs pour mettre les colisions intérieurs
// Je dois faire disparaitre l'intérieur de la maison lorsque je sors et réactiver la collision extérieur


    function createBlackBox(){
    for (let object of blackBoxs){
        // right
        
        if((player.x>object.x && player.x<object.x+object.width) &&  (player.y+player.height> object.y && player.y+player.height< object.y + object.height) )  {
            collisionRight=true
            player.moving=false
        }  
        if((player.x>object.x && player.x<object.x+object.width) &&  (player.y> object.y && player.y< object.y + object.height) )  {
            collisionRight=true
        }  
        if((player.x>object.x && player.x<object.x+object.width) &&  (player.y+player.height/2> object.y && player.y+player.height/2< object.y + object.height) )  {
            collisionRight=true
        }  
        if( collisionRight===true) {
            player.x+=player.speed
            collisionRight=false
        }
        
        // left
        if ((player.x+player.width>object.x && player.x+player.width<object.x+object.width) &&  (player.y> object.y && player.y< object.y + object.height)) {
            collisionLeft=true;
        } 
         if ((player.x+player.width>object.x && player.x+player.width<object.x+object.width) &&  (player.y+player.height> object.y && player.y+player.height< object.y + object.height)) {
            collisionLeft=true;         
        } 
         if ((player.x+player.width>object.x && player.x+player.width<object.x+object.width) &&  (player.y+player.height/2> object.y && player.y+player.height/2< object.y + object.height)) {
            collisionLeft=true;         
        } 
        if(collisionLeft===true){
            player.x-=player.speed  
            collisionLeft=false
        }
        // // bottom
        if ((player.y + player.height>object.y && player.y + player.height < object.y+object.height) && (player.x>object.x && player.x<object.x+object.width) ) {  
            collisionUp=true;
        } 
        if ((player.y + player.height>object.y && player.y + player.height < object.y+object.height) && (player.x+player.width>object.x && player.x+player.width<object.x+object.width) ) {
            collisionUp=true;
        } 
         if ((player.y + player.height>object.y && player.y + player.height < object.y+object.height) && (player.x+player.width/2>object.x && player.x+player.width/2<object.x+object.width) ) {
            collisionUp=true;
        } 
        if(collisionUp===true) {
            player.y-=player.speed
            collisionUp=false
        }
        // // up
        
        if((player.y>object.y && player.y< object.y+object.height) && (player.x>object.x && player.x<object.x+object.width) )
        {
            collisionDown=true;   
        }     
        if((player.y >object.y && player.y < object.y+object.height) && (player.x+player.width>object.x && player.x+player.width<object.x+object.width) )
        {
            collisionDown=true;
        }   
        if((player.y >object.y && player.y < object.y+object.height) && (player.x+player.width/2>object.x && player.x+player.width/2<object.x+object.width) )
        {
            collisionDown=true;
        }   
        if(collisionDown===true) {
            player.y+=player.speed
            collisionDown=false
        }  
        // I made a const collisionRight who is false, i made a condition, if player.y> object.y && player.y<object.y+height AND i made an other condition if if player.y+player.height> object.y && player.y +player.height<object.y+height the collisionRight will be true. After if collisionRight is true, so player.x++ and collisionRight cameback false, i'll do the same for the 4 side. 
        // Why do this? bescause the character glitch when player.y theire is only one condition (player.y for example) cause the player.y+height is doesnt announce and the bottom condition (collision for bottom) take effect.  
        // I add the -5 at player.y to avoid that the right or left condition swicth to true and provoke a player.x ++ or --
    }
    
// fonction qui loop sur objects, et qui définit des barrières pour bloquer le personnage dans chaque if 

}

function createBluebox(){
    for(let blueBox of blueBoxs ) {
        ctx.fillStyle='blue'
        ctx.fillRect(blueBox.x, blueBox.y, blueBox.w, blueBox.h)
    } 
}
const blueBoxs=[
    {
        x:1340,
        y:1095,
        w:65,
        h:10,
        background: office, 
        dx: 0,
        dy:0, 
        dw:384,
        dh:352,
        dpx:1200,
        dpy: 725,
        dpw: 400,
        dph: 400,

    }, 
    {
        x:1665,
        y:1095,
        w:65,
        h:10,
        background: retraining, 
        dx: 0,
        dy:0, 
        dw:384,
        dh:384,
        dpx:1500,
        dpy: 720,
        dpw: 400,
        dph: 400,

    }, 
    {
        x:1765,
        y:1095,
        w:65,
        h:10,
    },    
]

let indexBluebox= -1
function enterInHouse() {
    for (let i=0; i< blueBoxs.length; i++) {

        if(((player.x+16>= blueBoxs[i].x && player.x+16<=  blueBoxs[i].x+ blueBoxs[i].w) ) &&(player.y>= blueBoxs[i].y && player.y<= blueBoxs[i].y+ blueBoxs[i].h) && keys.includes('z')){
                    inHouse=!inHouse
                    indexBluebox= i
                 }
        if(((player.x+16>= blueBoxs[i].x && player.x+16<=  blueBoxs[i].x+ blueBoxs[i].w) ) &&(player.y>= blueBoxs[i].y && player.y<= blueBoxs[i].y+ blueBoxs[i].h) && keys.includes('s')){
                    inHouse=!inHouse
                    indexBluebox= -1
                 } 
        if(inHouse===true && indexBluebox=== i) {          
            ctx.drawImage(blueBoxs[i].background, blueBoxs[i].dx, blueBoxs[i].dy, blueBoxs[i].dw, blueBoxs[i].dh, blueBoxs[i].dpx, blueBoxs[i].dpy, blueBoxs[i].dpw, blueBoxs[i].dph )
                }       
    }
//   
   
        
}

function greenHitBox(){
    for (let greenBox of greenBoxs){
        // right
        if((player.x>greenBox.x && player.x<greenBox.x+greenBox.w) &&  (player.y+player.h> greenBox.y && player.y+player.height< greenBox.y + greenBox.h) )  {
            collisionRight=true
            player.moving=false
        }  
        if((player.x>greenBox.x && player.x<greenBox.x+greenBox.w) &&  (player.y> greenBox.y && player.y< greenBox.y + greenBox.h) )  {
            collisionRight=true
        }  
        if( collisionRight===true) {
            player.x+=player.speed
            collisionRight=false
        }
        
         
       
        // left

        if(player.x+player.width>greenBox.x && player.x+player.width<greenBox.x+greenBox.w && player.y>greenBox.y && player.y<greenBox.y+greenBox.h) {
            collisionLeft=true
        }
        if(collisionLeft===true) {
            player.x-=player.speed 
            collisionLeft=false 
        }

        // // bottom
        if(player.y+player.height+5>greenBox.y && player.y+player.height+5<greenBox.y+greenBox.h && player.x>greenBox.x && player.x<greenBox.x+greenBox.w) {
            collisionUp=true;
        }
        
        if ((player.y + player.height+5>greenBox.y && player.y + player.height+5 < greenBox.y+greenBox.h) && (player.x+player.width>greenBox.x && player.x+player.width<greenBox.x+greenBox.w) ) {
            collisionUp=true;
        } 
         if ((player.y + player.height>greenBox.y && player.y + player.height < greenBox.y+greenBox.h) && (player.x+player.width/2>greenBox.x && player.x+player.width/2<greenBox.x+greenBox.w) ) {
            collisionUp=true;
        } 
        if(collisionUp===true) {
            player.y-=player.speed
            collisionUp=false
        }
        // // up
        
        if((player.y>greenBox.y && player.y< greenBox.y+greenBox.h) && (player.x>greenBox.x && player.x<greenBox.x+greenBox.w) )
        {
            collisionDown=true;   
        }     
        if((player.y >greenBox.y && player.y < greenBox.y+greenBox.h) && (player.x+player.with>greenBox.x && player.x+player.width<greenBox.x+greenBox.w) )
        {
            collisionDown=true;
        }   
        if((player.y >greenBox.y && player.y < greenBox.y+greenBox.h) && (player.x+player.width/2>greenBox.x && player.x+player.width/2<greenBox.x+greenBox.w) )
        {
            collisionDown=true;
        }   
        if(collisionDown===true) {
            player.y+=player.speed
            collisionDown=false
        }  
       
    }
    


}































    






})

// i added player.x-1600 player.y-1600 at the drawImage to zoom on the character, but the collision box are now not align...