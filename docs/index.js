import {blackBoxs} from '/docs/variables/variables.js';
import {blueBoxs} from '/docs/variables/variables.js';
import {greenBoxsArray} from '/docs/variables/variables.js';
import {Images_array} from '/docs/variables/variables.js';
import {tile} from '/docs/variables/variables.js';
import {scaleCanvas} from '/docs/variables/variables.js';
window.addEventListener('DOMContentLoaded', function () {

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const keys = [];
    let collisionRight = false;
    let collisionLeft = false;
    let collisionDown = false;
    let collisionUp = false;
    let scale = 1.3
    let canvasSize = {
        width: 3800,
        height: 2160,
    }
    let inHouse = false
    
    const player = {
        x: 1700,
        y: 1100,
        width: 32,
        height: 32,
        frameX: 0,
        frameY: 0,
        speed: 4,
        moving: false,
    };
    let indexBluebox = -1
    ////////////////////////// AddEvenListener Pour recadrer la taille du canvas à chaque resize de l'écran
    function displayCanvas() {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight


    }
    displayCanvas()
    window.addEventListener('resize', displayCanvas)
 ctx.imageSmoothingEnabled = false
  function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    //  Je crée une fonction avec des paramètres de façon à pouvoir réutiliser drawImage rapidement

    // DrawImage, je définie la position : je multiplie la width  par frameX, si frameX=0, le resultat vaut 0 et drawImage part de 0 sur x, si par 1, il part à la taille de l'image, soit le frame suivant qui se situe à 32px sur l'axe X

    //  Pour la frame Y il en est de même si frameY=0


    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Gerer lorsque MAJ plus mettre fleches directionnelles!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const right = document.querySelector('.right');
    const down = document.querySelector('.down');
    const left = document.querySelector('.left');
    const up = document.querySelector('.up');
    let pannelsOpen=false
    
       function moveTouch() {
        up.addEventListener('touchstart', function () {
            (keys.push('z'))
        },{ passive: true })
        up.addEventListener('touchend', function () {
            keys.splice(0, 100)
            player.moving = false
        },)
        right.addEventListener('touchstart', function () {
            (keys.push('d'))
        },{ passive: true })
        right.addEventListener('touchend', function () {
            keys.splice(0, 100)
            player.moving = false
        },)
        down.addEventListener('touchstart', function () {
            (keys.push('s'))
        },{ passive: true })
        down.addEventListener('touchend', function () {
            keys.splice(0, 100)
            player.moving = false
        },)
        left.addEventListener('touchstart', function () {
            (keys.push('q'))
        },{ passive: true })
        left.addEventListener('touchend', function () {
            keys.splice(0, 100)
            player.moving = false
        },)
    }
    window.addEventListener('keydown',  function (e) {
        //    Attention à la majuscule 
        keys.push(e.key);
     
        // player.moving=true
    },  )
   
    // keys[e.code]=true ==> une autre façon d'ajouter la valeur a l'array
    window.addEventListener('keyup', function (e) {
        keys.splice(0, 1000)
        player.moving = false
    })
    // Pour crée une fonction avec tous les keydown, je crée un tableau, auquel j'atoute la keyCode lorsque keydown et je la delete lorsque keyup. Je peux ensuite crée une fonction en mettant en condition : "si mon array est vrai alors tu peux bouger"

    // Je rajoute la variable player.moving true à chaque if pour actualiser la keydown, car cela peut bug avec le fait qu'on ne relache pas le bouton avant d'appuyer sur un autre bouton (je clique sur 'aller a gauche' avant de relacher 'descendre')
    function movePlayer() {
        if(openPannels===false) {
            if (keys.includes('z') && player.y > 360) {
                player.y -= player.speed
                player.frameY = 3;
                player.moving = true
            }
            if (keys.includes('s') && player.y < 2000) {
                player.y += player.speed
                player.frameY = 0;
                player.moving = true
            }
            if (keys.includes('d') && player.x < 3000) {
                player.x += player.speed
                player.frameY = 2;
                player.moving = true
            }
            if (keys.includes('q') && player.x > 360) {
                player.x -= player.speed
                player.frameY = 1;
                player.moving = true
            }
        }
     
    }
    // J'incrémente frameX pour animer le sprite en déplacant draw image de gauche à droite 
    // je rajoute la condition player.moving pour définir quand l'animation doit être lancée

    let frameChanging=0
    function handlePlayerFrame() {
        frameChanging++
        
        if(frameChanging===5){
            if (player.frameX < 3 && player.moving === true) {
                player.frameX++
            } else {
                player.frameX = 0
            } 
            frameChanging=0
        }
       
    }
    let redBoxs=[
        {
            // Contact
            x: 62*tile*scaleCanvas,
            y: 34*tile*scaleCanvas,
            width: 1*tile*scaleCanvas,
            height: 1*tile*scaleCanvas,
            textToShow: document.querySelector('.contact')
        },
        {
            // oldlife
            x: 56*tile*scaleCanvas,
            y: 21*tile*scaleCanvas,
            width: 1*tile*scaleCanvas,
            height: 1*tile*scaleCanvas,
            textToShow: document.querySelector('.oldLife')
        },
        {
            // oldlife
            x: 58*tile*scaleCanvas,
            y: 48*tile*scaleCanvas,
            width: 1*tile*scaleCanvas,
            height: 1*tile*scaleCanvas,
            textToShow: document.querySelector('.personalLife')
        },
        {
            // oldlife
            x: 46*tile*scaleCanvas,
            y: 20*tile*scaleCanvas,
            width: 1*tile*scaleCanvas,
            height: 1*tile*scaleCanvas,
            textToShow: document.querySelector('.personalLife')
        },
        {
             // Formation Dev
            x: 42*tile*scaleCanvas,
            y: 31*tile*scaleCanvas,
            width: 2*tile*scaleCanvas,
            height: 2*tile*scaleCanvas,
            textToShow: document.querySelector('.formationDev')
        }
        
       
    ]
    
let greenBoxIn=false;

    let insideRedbox=false
    const landscape= document.querySelector('.landscape') 
    let modal=document.querySelector('.game_boy')
  

    const presentation= document.querySelector('.Presentation');
   
    function landscapeDisplay(){
    
      
    }
    
    let openPannels= false
    let presentationReaded=false;
    let landscapetwo= false
    let close_presentation= document.querySelector('.close_presentation')


    function displaGameboy(){
        if(window.innerHeight > window.innerWidth){
            pannelsOpen=true
            landscape.style.display="block"
        } else if (window.innerHeight < window.innerWidth) {
            landscape.style.display="none"
            pannelsOpen=false
        }

        if(presentationReaded===false) {
            openPannels=true
            presentation.style.display='flex'
            landscape.style.display="none"
        } 
        close_presentation.addEventListener('click',function(){
            presentation.style.display='none'
            landscape.style.display="none"
            presentationReaded=true
            openPannels=false 
        })
        
        
        if(openPannels===true) {
            modal.style.display='flex'
        } else if (openPannels===false) {
            modal.style.display='none'
        }
          

    }



    function animate() { 
    ctx.drawImage(Images_array[1], 0, 0, canvasSize.width / 1.1, canvasSize.height / 1.1, 0, 0, canvasSize.width, canvasSize.height);
    enterInHouse()
    drawSprite(Images_array[0], player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width * scale, player.height * scale)
    movePlayer()
    moveTouch()
    handlePlayerFrame()
    ctx.resetTransform();
    ctx.translate(-(player.x - canvas.width / 2), -(player.y - canvas.height / 2));
    createBluebox()    
    collisionRedbox()
    landscapeDisplay()
    // presentationDisplay()
    displaGameboy()
    window.requestAnimationFrame(animate);
    }
    animate()

    
    // espace colision ///////////////////////////////////////////////////////////////////////////////
  

    function createBluebox() {
        for (let blueBox of blueBoxs) {
            ctx.fillStyle = 'transparent'
            ctx.fillRect(blueBox.x, blueBox.y, blueBox.w, blueBox.h)
        }
    }
    
    function enterInHouse() {
        for (let i = 0; i < blueBoxs.length; i++) {

            if (((player.x + 16 >= blueBoxs[i].x && player.x + 16 <= blueBoxs[i].x + blueBoxs[i].w)) && (player.y >= blueBoxs[i].y && player.y <= blueBoxs[i].y + blueBoxs[i].h) && keys.includes('z')) {
                inHouse = true
                indexBluebox = i
            }
            if (((player.x + 16 >= blueBoxs[i].x && player.x + 16 <= blueBoxs[i].x + blueBoxs[i].w)) && (player.y >= blueBoxs[i].y && player.y <= blueBoxs[i].y + blueBoxs[i].h) && keys.includes('s')) {
                inHouse = false
                indexBluebox = -1
            }
           
            if (inHouse === true && indexBluebox === i) {
                ctx.drawImage(blueBoxs[i].background, blueBoxs[i].dx, blueBoxs[i].dy, blueBoxs[i].dw, blueBoxs[i].dh, blueBoxs[i].dpx, blueBoxs[i].dpy, blueBoxs[i].dpw, blueBoxs[i].dph)
      
            }
            if (inHouse === false) {
                for (let object of blackBoxs) {
                    ctx.strokeStyle = "transparent"
                    ctx.strokeRect(object.x, object.y, object.width, object.height)    
                    
                    if(  (player.y+player.height > object.y && player.x+(player.width-5) > object.x && (player.x+15 ) < object.x+object.width && player.y < object.y+object.height) ) {
                        if(player.frameY===0 ){
                        player.y-=player.speed}
                        else if(player.frameY===1){
                            player.x+=player.speed 
                        } else if (player.frameY===2) {
                            player.x-=player.speed
                        } else if (player.frameY===3){
                            player.y+=player.speed
                        }
                         }
                }
            } 
            if (inHouse === true && indexBluebox === i ){   
                for ( let j= 0; j<greenBoxsArray.length; j++) {
                    for (let greenBox of greenBoxsArray[i]) {
                        ctx.fillStyle = 'transparent'
                        ctx.fillRect(greenBox.x, greenBox.y, greenBox.w, greenBox.h) 
                        if(  (player.y+player.height > greenBox.y && player.x+(player.width-5) > greenBox.x && (player.x+15 ) < greenBox.x+greenBox.w && player.y < greenBox.y+greenBox.h) ) {
                            if(player.frameY===0 ){
                            player.y-=player.speed}
                            else if(player.frameY===1){
                                player.x+=player.speed 
                            } else if (player.frameY===2) {
                                player.x-=player.speed
                            } else if (player.frameY===3){
                                player.y+=player.speed
                            }
                             }
                    }
                }
            }
               
        }


    } 

    function collisionRedbox(){
  
    for (let redBox of redBoxs) {
        ctx.fillStyle = 'transparent'
        ctx.fillRect(redBox.x, redBox.y, redBox.width, redBox.height)
       

        if(  ((player.y+player.height) > (redBox.y)) &&
               ((player.y < (redBox.y + redBox.height))) &&
               ((player.x+player.width)> redBox.x) &&
               (player.x < (redBox.x+redBox.width))
           ) {
        insideRedbox= true
        if (insideRedbox===true && keys.includes('e') && player.frameY===3) {
            openPannels=true
            redBox.textToShow.style.display='block'
        }
        if(keys.includes('t')) {
            openPannels=false
            redBox.textToShow.style.display='none'
            insideRedbox=false
        }
        if(  ((player.y+player.height) < (redBox.y)) &&
               ((player.y > (redBox.y + redBox.height))) &&
               ((player.x+player.width)< redBox.x) &&
               (player.x > (redBox.x+redBox.width))
           ) {
        insideRedbox= false
            }
    }
    }

   
        
}





  



})

// i added player.x-1600 player.y-1600 at the drawImage to zoom on the character, but the collision box are now not align...