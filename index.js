import {blackBoxs} from './variables/variables.js';
import {blueBoxs} from './variables/variables.js';
import {greenBoxsArray} from './variables/variables.js';
import {Images_array} from './variables/variables.js';
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
        speed: 15,
        moving: false,
    };
    let indexBluebox = -1
    ////////////////////////// AddEvenListener Pour recadrer la taille du canvas à chaque resize de l'écran
    function displayCanvas() {
        ctx.canvas.width = canvasSize.width;
        ctx.canvas.height = canvasSize.height


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
        if(pannelsOpen===false) {
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
    function handlePlayerFrame() {
        if (player.frameX < 3 && player.moving === true) {
            player.frameX++
        } else {
            player.frameX = 0
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
    let fpsInterval, startTime, now, then, elapsed;

    function startAnimating(fps) {
        // fpsInterval va etre le temps entre chaque frame, je le met en miliseconde 
        fpsInterval = 1000 / fps;
        // Je calcule combien de temps s'est écoulé entre la derniere frame et maintenant
        then = Date.now();
        startTime = then;
        animate();
    }
    // J'ai rien compris je copie du code betement
    function animate() {
        requestAnimationFrame(animate);
        now = Date.now();
        elapsed = now - then;
        if (elapsed > fpsInterval) {
            then = now - (elapsed % fpsInterval);
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(Images_array[1], 0, 0, canvasSize.width / 1.1, canvasSize.height / 1.1, 0, 0, canvasSize.width, canvasSize.height);
            window.requestAnimationFrame(animate);
            enterInHouse()
            drawSprite(Images_array[0], player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width * scale, player.height * scale)
            movePlayer()
            moveTouch()
            handlePlayerFrame()
            ctx.resetTransform();
            ctx.translate(-(player.x - canvas.width / 2), -(player.y - canvas.height / 2));
            createBluebox()    
            collisionRedbox()
            collision(greyBoxs, 'grey')
            
      
        }
    }
    startAnimating(15)
    // espace colision ///////////////////////////////////////////////////////////////////////////////
     function createBlackBox() {
        for (let object of blackBoxs) {
            // right

            if ((player.x > object.x && player.x < object.x + object.width) && (player.y + player.height > object.y && player.y + player.height < object.y + object.height)) {
                collisionRight = true
                player.moving = false
            }
            // haut gauche vrai
            if ((player.x > object.x && player.x < object.x + object.width) && (player.y > object.y && player.y < object.y + object.height)) {
                collisionRight = true
            }
            if ((player.x > object.x && player.x < object.x + object.width) && (player.y + player.height / 2 > object.y && player.y + player.height / 2 < object.y + object.height)) {
                collisionRight = true
            }
            if (collisionRight === true) {
                player.x += player.speed
                collisionRight = false
            }

            // left
            if ((player.x + player.width+5 > object.x && player.x + player.width+5 < object.x + object.width) && (player.y > object.y && player.y < object.y + object.height)) {
                collisionLeft = true;
            }
            if ((player.x + player.width+5 > object.x && player.x + player.width+5 < object.x + object.width) && (player.y + player.height > object.y && player.y + player.height < object.y + object.height)) {
                collisionLeft = true;
            }
            if ((player.x + player.width+5 > object.x && player.x + player.width+5 < object.x + object.width) && (player.y + player.height / 2 > object.y && player.y + player.height / 2 < object.y + object.height)) {
                collisionLeft = true;
            }
            if (collisionLeft === true) {
                player.x -= player.speed
                collisionLeft = false
            }
            // // bottom
            if ((player.y + player.height+6 > object.y && player.y + player.height+6 < object.y + object.height) && (player.x > object.x && player.x < object.x + object.width)) {
                collisionUp = true;
            }
            if ((player.y + player.height+6 > object.y && player.y + player.height+6 < object.y + object.height) && (player.x + player.width > object.x && player.x + player.width < object.x + object.width)) {
                collisionUp = true;
            }
            if ((player.y + player.height+6 > object.y && player.y + player.height+6 < object.y + object.height) && (player.x + player.width / 2 > object.x && player.x + player.width / 2 < object.x + object.width)) {
                collisionUp = true;
            }
            if (collisionUp === true) {
                player.y -= player.speed
                collisionUp = false
            }
            // // up

            if ((player.y-7 > object.y && player.y-7 < object.y + object.height) && (player.x > object.x && player.x < object.x + object.width)) {
                collisionDown = true;
            }
            if ((player.y-7 > object.y && player.y-7 < object.y + object.height) && (player.x + player.width > object.x && player.x + player.width < object.x + object.width)) {
                collisionDown = true;
            }
            if ((player.y-7 > object.y && player.y-7 < object.y + object.height) && (player.x + player.width / 2 > object.x && player.x + player.width / 2 < object.x + object.width)) {
                collisionDown = true;
            }
            if (collisionDown === true) {
                player.y += player.speed
                collisionDown = false
            }
            // I made a const collisionRight who is false, i made a condition, if player.y> object.y && player.y<object.y+height AND i made an other condition if if player.y+player.height> object.y && player.y +player.height<object.y+height the collisionRight will be true. After if collisionRight is true, so player.x++ and collisionRight cameback false, i'll do the same for the 4 side. 
            // Why do this? bescause the character glitch when player.y theire is only one condition (player.y for example) cause the player.y+height is doesnt announce and the bottom condition (collision for bottom) take effect.  
            // I add the -5 at player.y to avoid that the right or left condition swicth to true and provoke a player.x ++ or --
        }

        // fonction qui loop sur objects, et qui définit des barrières pour bloquer le personnage dans chaque if 

    }

    function createBluebox() {
        for (let blueBox of blueBoxs) {
            ctx.fillStyle = 'blue'
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
                    ctx.strokeStyle = "black"
                    ctx.strokeRect(object.x, object.y, object.width, object.height)
                    
            if ((player.x > object.x && player.x < object.x + object.width) && (player.y + player.height > object.y && player.y + player.height < object.y + object.height)) {
                collisionRight = true
                player.moving = false
            }
            // haut gauche vrai
            if ((player.x > object.x && player.x < object.x + object.width) && (player.y > object.y && player.y < object.y + object.height)) {
                collisionRight = true
            }
            if ((player.x > object.x && player.x < object.x + object.width) && (player.y + player.height / 2 > object.y && player.y + player.height / 2 < object.y + object.height)) {
                collisionRight = true
            }
            if (collisionRight === true) {
                player.x += player.speed
                collisionRight = false
            }

            // left
            if ((player.x + player.width+5 > object.x && player.x + player.width+5 < object.x + object.width) && (player.y > object.y && player.y < object.y + object.height)) {
                collisionLeft = true;
            }
            if ((player.x + player.width+5 > object.x && player.x + player.width+5 < object.x + object.width) && (player.y + player.height > object.y && player.y + player.height < object.y + object.height)) {
                collisionLeft = true;
            }
            if ((player.x + player.width+5 > object.x && player.x + player.width+5 < object.x + object.width) && (player.y + player.height / 2 > object.y && player.y + player.height / 2 < object.y + object.height)) {
                collisionLeft = true;
            }
            if (collisionLeft === true) {
                player.x -= player.speed
                collisionLeft = false
            }
            // // bottom
            if ((player.y + player.height+6 > object.y && player.y + player.height+6 < object.y + object.height) && (player.x > object.x && player.x < object.x + object.width)) {
                collisionUp = true;
            }
            if ((player.y + player.height+6 > object.y && player.y + player.height+6 < object.y + object.height) && (player.x + player.width > object.x && player.x + player.width < object.x + object.width)) {
                collisionUp = true;
            }
            if ((player.y + player.height+6 > object.y && player.y + player.height+6 < object.y + object.height) && (player.x + player.width / 2 > object.x && player.x + player.width / 2 < object.x + object.width)) {
                collisionUp = true;
            }
            if (collisionUp === true) {
                player.y -= player.speed
                collisionUp = false
            }
            // // up

            if ((player.y-7 > object.y && player.y-7 < object.y + object.height) && (player.x > object.x && player.x < object.x + object.width)) {
                collisionDown = true;
            }
            if ((player.y-7 > object.y && player.y-7 < object.y + object.height) && (player.x + player.width > object.x && player.x + player.width < object.x + object.width)) {
                collisionDown = true;
            }
            if ((player.y-7 > object.y && player.y-7 < object.y + object.height) && (player.x + player.width / 2 > object.x && player.x + player.width / 2 < object.x + object.width)) {
                collisionDown = true;
            }
            if (collisionDown === true) {
                player.y += player.speed
                collisionDown = false
            }
                }
            } 
            if (inHouse === true && indexBluebox === i ){   
                for ( let j= 0; j<greenBoxsArray.length; j++) {
                    for (let greenBox of greenBoxsArray[i]) {
                        ctx.fillStyle = 'green'
                        ctx.fillRect(greenBox.x, greenBox.y, greenBox.w, greenBox.h) 
                    }
                for (let greenBox of greenBoxsArray[i]) {
                        // right
                        if ((player.x > greenBox.x && player.x < greenBox.x + greenBox.w) && (player.y + player.h > greenBox.y && player.y + player.height < greenBox.y + greenBox.h)) {
                            collisionRight = true
                            player.moving = false
                        }
                        if ((player.x > greenBox.x && player.x < greenBox.x + greenBox.w) && (player.y > greenBox.y && player.y < greenBox.y + greenBox.h)) {
                            collisionRight = true
                        }
                        if (collisionRight === true) {
                            player.x += player.speed
                            collisionRight = false
                        }
                        // left
                        if (player.x + player.width > greenBox.x && player.x + player.width < greenBox.x + greenBox.w && player.y > greenBox.y && player.y < greenBox.y + greenBox.h) {
                            collisionLeft = true
                        }
                        if (collisionLeft === true) {
                            player.x -= player.speed
                            collisionLeft = false
                        }
                        // // bottom
                        if (player.y + player.height > greenBox.y && player.y + player.height < greenBox.y + greenBox.h && player.x > greenBox.x && player.x < greenBox.x + greenBox.w) {
                            collisionUp = true;
                        }
            
                        if ((player.y + player.height > greenBox.y && player.y + player.height < greenBox.y + greenBox.h) && (player.x + player.width > greenBox.x && player.x + player.width < greenBox.x + greenBox.w)) {
                            collisionUp = true;
                        }
                        // if ((player.y + player.height > greenBox.y && player.y + player.height < greenBox.y + greenBox.h) && (player.x + player.width / 2 > greenBox.x && player.x + player.width / 2 < greenBox.x + greenBox.w)) {
                        //     collisionUp = true;
                        // }
                        if (collisionUp === true) {
                            player.y -= player.speed
                            collisionUp = false
                        }
                        // // up
            
                        if ((player.y > greenBox.y && player.y < greenBox.y + greenBox.h) && (player.x > greenBox.x && player.x < greenBox.x + greenBox.w)) {
                            collisionDown = true;
                        }
                        if ((player.y > greenBox.y && player.y < greenBox.y + greenBox.h) && (player.x + player.with > greenBox.x && player.x + player.width < greenBox.x + greenBox.w)) {
                            collisionDown = true;
                        }
                        if ((player.y > greenBox.y && player.y < greenBox.y + greenBox.h) && (player.x + player.width / 2 > greenBox.x && player.x + player.width / 2 < greenBox.x + greenBox.w)) {
                            collisionDown = true;
                        }
                        if (collisionDown === true) {
                            player.y += player.speed
                            collisionDown = false
                        }
                    }
                }
            }
           
            
            
        }


    } 
let redBoxs=[
    {
        // Contact
        x: 2180,
        y: 1195,
        width: 50,
        height: 50,
        textToShow: document.querySelector('.contact')
    },
    {
        // Formation Dev
        x: 1475,
        y: 1105,
        width: 80,
        height: 50,
        textToShow: document.querySelector('.formationDev')
    },
    {
        x: 2108,
        y: 1088,
        width: 32,
        height: 32,
        textToShow: document.querySelector('.formationDev')
    }
    
   
]




let insideRedbox=false
let modal=document.querySelector('.game_boy')
function collisionRedbox(){
  
    for (let redBox of redBoxs) {
        ctx.fillStyle = 'red'
        ctx.fillRect(redBox.x, redBox.y, redBox.width, redBox.height)
       
        
        if(window.getComputedStyle(modal).display==='flex'){
            pannelsOpen= true
        } else if (window.getComputedStyle(modal).display==='none') {
            pannelsOpen= false
        };

        if(  ((player.y+player.height) > (redBox.y)) &&
               ((player.y < (redBox.y + redBox.height))) &&
               ((player.x+player.width)> redBox.x) &&
               (player.x < (redBox.x+redBox.width))
           ) {
        insideRedbox= true
        if (insideRedbox===true && keys.includes('e') && player.frameY===3) {
            modal.style.display='flex'
            redBox.textToShow.style.display='flex'
        }
        if(keys.includes('t')) {
            modal.style.display='none'
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


// if(window.innerHeight > window.innerWidth){
        
// }
let greyBoxs=[
    {
        // test
        x: 1900,
        y: 1200,
        width: 50,
        height: 50,
        textToShow: document.querySelector('.contact')
    },
    
   
]

    function collision(){
    let collision
    for (let element of greyBoxs) {
        ctx.fillStyle = 'grey'
        ctx.fillRect(element.x, element.y, element.width, element.height)

        if(  (player.y+player.height*scale > element.y && player.x+(player.width-5)*scale>element.x && player.x+5<element.x+element.width && player.y<element.y+element.height) 
           ) {
                collision= true
                player.x-= player.speed
                player.x+=player.speed
            ctx.fillRect(element.x, element.y, element.width, element.height)
           }
           if(collision===true && keys.includes('s') ) {
            player.y-=player.speed
           }
           if(collision===true && keys.includes('z') ) {
            player.y+=player.speed
           } 
           if(collision===true && keys.includes('d') ) {
            player.x-=player.speed
           } 
            
           if(collision===true && keys.includes('q') ) {
            player.x+=player.speed
           } 
        }
    }




})

// i added player.x-1600 player.y-1600 at the drawImage to zoom on the character, but the collision box are now not align...