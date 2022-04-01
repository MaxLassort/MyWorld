// import {blackBoxs} from '/variables/variables.js';
// import {blueBoxs} from '/variables/variables.js';
// import {greenBoxsArray} from '/variables/variables.js';
// import {Images_array} from '/variables/variables.js';
// import {tile} from '/variables/variables.js';
// import {scaleCanvas} from '/variables/variables.js';

class Collision {   
    constructor (boxes, ctx, player, color) {
        this.boxes=boxes;
        this.ctx=ctx;
        this.player=player;
        this.color=color;
    };
  
    createBox(){
        for (let box of this.boxes) {
          this.ctx.fillStyle = this.color
          this.ctx.fillRect(box.x, box.y, box.w, box.h)
        }
        return
    };
   
    enterInCollision(){
      
      for (let box of this.boxes) {  
          if(  (this.player.y+this.player.height > box.y && this.player.x+(this.player.width-5) > box.x && (this.player.x+15 ) < box.x+box.w && this.player.y+26 < box.y+box.h) ) {
            // this.ctx.fillStyle = 'yellow'
            // this.ctx.fillRect(box.x, box.y, box.w, box.h)
            if(this.player.frameY===0 ){
                this.player.y-=this.player.speed}
            else if(this.player.frameY===1){
                this.player.x+=this.player.speed 
            } else if (this.player.frameY===2) {
                this.player.x-=this.player.speed
            } else if (this.player.frameY===3){
                this.player.y+=this.player.speed
            }
          }
      }
    }
    
};




window.addEventListener('DOMContentLoaded', function () {
    

    

    const playerSprite = new Image();
    playerSprite.src = "img/main_chara.png ";
    const background = new Image();
    background.src = "img/background.png";
        const office = new Image();
    office.src = "img/interieur_git.png";
    const retraining = new Image();
    retraining.src = 'img/reconversion.png';
    const contact = new Image();
    contact.src = 'img/contact_me.png';
    const grangeOne= new Image();
    grangeOne.src = 'img/grange.png'
    const house= new Image();
    house.src = 'img/maison.png'
    const bigHouse= new Image();
    bigHouse.src='img/maison_principale.png'



    const full = document.querySelector('.fullscreen')
    let mydocument= document.documentElement;
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    let scale = 1.3
    let canvasSize = {
        width: 3800,
        height: 2160,
    }
    let inHouse = false
    
    let player = {
        x: 1700,
        y: 1150,
        width: 32,
        height: 32,
        frameX: 0,
        frameY: 0,
        speed: 4,
        moving: false,
    };
    let indexBluebox = -1
    let tile=32;
    let scaleCanvas=1.1
    const Images_array = [
        playerSprite, background, office, retraining, contact, grangeOne, house, bigHouse
    ];
    let index=false
    const blueBoxs = [
       {
           // Git
           open:false,
           x: 37*tile*scaleCanvas,
           y: 31*tile*scaleCanvas,
           w:3*tile*scaleCanvas,
           h:1*tile*scaleCanvas,
           background: Images_array[2],
           dx: 0,
           dy: 0,
           dw: 12*tile,
           dh: 11*tile,
           dpx: 34*tile*scaleCanvas,
           dpy: 21*tile*scaleCanvas,
           dpw: 12*tile*scaleCanvas,
           dph: 11*tile*scaleCanvas,     
       },
       {
           // 3W
           open:false,
           x: 47*tile*scaleCanvas,
           y: 31*tile*scaleCanvas,
           w:3*tile*scaleCanvas,
           h:1*tile*scaleCanvas,
           background: Images_array[3],
           dx: 0,
           dy: 0,
           dw: 12*tile,
           dh: 12*tile,
           dpx: 42*tile*scaleCanvas,
           dpy: 20*tile*scaleCanvas,
           dpw: 12*tile*scaleCanvas,
           dph: 12*tile*scaleCanvas,
   
       }, 
       {
           // contact
           open:false,
           x: 59*tile*scaleCanvas,
           y: 32*tile*scaleCanvas,
           w:3*tile*scaleCanvas,
           h:1*tile*scaleCanvas,
           background: Images_array[4],
           dx: 0,
           dy: 0,
           dw: 12*tile,
           dh: 12*tile,
           dpx: 55*tile*scaleCanvas,
           dpy: 21*tile*scaleCanvas,
           dpw: 12*tile*scaleCanvas,
           dph: 12*tile*scaleCanvas,
       }, 
       {
           // grange
           open:false,
           x: 37*tile*scaleCanvas,
           y: 54*tile*scaleCanvas,
           w:2*tile*scaleCanvas,
           h:1*tile*scaleCanvas,
           background: Images_array[5],
           dx: 0,
           dy: 0,
           dw: 10*tile,
           dh: 11*tile,
           dpx: 33*tile*scaleCanvas,
           dpy: 44*tile*scaleCanvas,
           dpw: 10*tile*scaleCanvas,
           dph: 11*tile*scaleCanvas,
        },
       
       {
           // litl hous
           open:false,
           x: 47*tile*scaleCanvas,
           y: 46*tile*scaleCanvas,
           w:2*tile*scaleCanvas,
           h:1*tile*scaleCanvas,
           background: Images_array[6],
           dx: 0,
           dy: 0,
           dw: 12*tile,
           dh: 12*tile,
           dpx: 42*tile*scaleCanvas,
           dpy: 35*tile*scaleCanvas,
           dpw: 12*tile*scaleCanvas,
           dph: 12*tile*scaleCanvas,
       },
       {
           // main
           open:false,
           x:55*tile*scaleCanvas,
           y:46*tile*scaleCanvas,
           w:3*tile*scaleCanvas,
           h:1*tile*scaleCanvas,
           background: Images_array[7],
           dx: 0,
           dy: 0,
           dw: 22*tile,
           dh: 12*tile,
           dpx: 51*tile*scaleCanvas,
           dpy: 35*tile*scaleCanvas,
           dpw: 22*tile*scaleCanvas,
           dph: 12*tile*scaleCanvas, 
       }
          
    ]; 
    const blackBoxs = [
       // Trees
       {
           x:23*tile*scaleCanvas,
           y:28*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:3*tile*scaleCanvas
       },
       {
           x:19*tile*scaleCanvas,
           y:29*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:3*tile*scaleCanvas
       },
       {
           x:15*tile*scaleCanvas,
           y:32*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:3*tile*scaleCanvas
       },
       {
           x:13*tile*scaleCanvas,
           y:37*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:3*tile*scaleCanvas
       },
       {
           x:22*tile*scaleCanvas,
           y:37*tile*scaleCanvas,
           w:3*tile*scaleCanvas,
           h:3*tile*scaleCanvas
       },
       {
           x:15*tile*scaleCanvas,
           y:41*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:3*tile*scaleCanvas
       },
       {
           x:42*tile*scaleCanvas,
           y:49*tile*scaleCanvas,
           w:2*tile*scaleCanvas,
           h:3*tile*scaleCanvas
       },
       {
           x:46*tile*scaleCanvas,
           y:50*tile*scaleCanvas,
           w:2*tile*scaleCanvas,
           h:2*tile*scaleCanvas
       },
       {
           x:47*tile*scaleCanvas,
           y:52*tile*scaleCanvas,
           w:2*tile*scaleCanvas,
           h:3*tile*scaleCanvas
       },
       {
           x:42*tile*scaleCanvas,
           y:54*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       // Mountains
       {
           x:11*tile*scaleCanvas,
           y:44*tile*scaleCanvas,
           w:20*tile*scaleCanvas,
           h:15*tile*scaleCanvas
       },
       {
           x:64*tile*scaleCanvas,
           y:29*tile*scaleCanvas,
           w:2*tile*scaleCanvas,
           h:3*tile*scaleCanvas
       },
       {
           x:65*tile*scaleCanvas,
           y:31*tile*scaleCanvas,
           w:2*tile*scaleCanvas,
           h:3*tile*scaleCanvas
       },
       {
           x:67*tile*scaleCanvas,
           y:32*tile*scaleCanvas,
           w:3*tile*scaleCanvas,
           h:3*tile*scaleCanvas
       },
       {
           x:77*tile*scaleCanvas,
           y:36*tile*scaleCanvas,
           w:3*tile*scaleCanvas,
           h:3*tile*scaleCanvas
       },
       {
           x:72*tile*scaleCanvas,
           y:32*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       {
           x:75*tile*scaleCanvas,
           y:38*tile*scaleCanvas,
           w:3*tile*scaleCanvas,
           h:3*tile*scaleCanvas
       },
       {
           x:70*tile*scaleCanvas,
           y:33*tile*scaleCanvas,
           w:2*tile*scaleCanvas,
           h:3*tile*scaleCanvas
       },
       {
           x:73*tile*scaleCanvas,
           y:33*tile*scaleCanvas,
           w:2*tile*scaleCanvas,
           h:3*tile*scaleCanvas
       },
   
      
       // fences
       {
           x:30*tile*scaleCanvas,
           y:10*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:9*tile*scaleCanvas
       },
       {
           x:25*tile*scaleCanvas,
           y:37*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:8*tile*scaleCanvas
       },
       {
           x:30*tile*scaleCanvas,
           y:19*tile*scaleCanvas,
           w:13*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       {
           x:47*tile*scaleCanvas,
           y:10*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:9*tile*scaleCanvas
       },
       {
           x:47*tile*scaleCanvas,
           y:18*tile*scaleCanvas,
           w:4*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       {
           x:60*tile*scaleCanvas,
           y:20*tile*scaleCanvas,
           w:4*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       {
           x:60*tile*scaleCanvas,
           y:39*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:20*tile*scaleCanvas
       },
       {
           x:33*tile*scaleCanvas,
           y:45*tile*scaleCanvas,
           w:12*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       {
           x:33*tile*scaleCanvas,
           y:45*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:14*tile*scaleCanvas
       },
   
   
       // bush 
       {
           x:34*tile*scaleCanvas,
           y:58*tile*scaleCanvas,
           w:26*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       {
           x:25*tile*scaleCanvas,
           y:31*tile*scaleCanvas,
           w:4*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       {
           x:25*tile*scaleCanvas,
           y:32*tile*scaleCanvas,
           w:1*tile,
           h:1*tile
       },
       {
           x:25*tile*scaleCanvas,
           y:35*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:2*tile*scaleCanvas
       },
       {
           x:25*tile*scaleCanvas,
           y:36*tile*scaleCanvas,
           w:27*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       {
           x:51*tile*scaleCanvas,
           y:36*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:11*tile*scaleCanvas
       },
       {
           x:54*tile*scaleCanvas,
           y:37*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:10*tile*scaleCanvas
       },
       {
           x:54*tile*scaleCanvas,
           y:37*tile*scaleCanvas,
           w:4*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       {
           x:57*tile*scaleCanvas,
           y:36*tile*scaleCanvas,
           w:5*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       {
           x:61*tile*scaleCanvas,
           y:36*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:3*tile*scaleCanvas
       },
       {
           x:61*tile*scaleCanvas,
           y:38*tile*scaleCanvas,
           w:14*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       {
           x:57*tile*scaleCanvas,
           y:31*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:3*tile*scaleCanvas
       },
       {
           x:56*tile*scaleCanvas,
           y:23*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:9*tile*scaleCanvas
       },
       
       {
           x:56*tile*scaleCanvas,
           y:23*tile*scaleCanvas,
           w:9*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       {
           x:64*tile*scaleCanvas,
           y:20*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:4*tile*scaleCanvas
       },
       {
           x:52*tile*scaleCanvas,
           y:23*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:9*tile*scaleCanvas
       },
       {
           x:43*tile*scaleCanvas,
           y:23*tile*scaleCanvas,
           w:10*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       {
           x:43*tile*scaleCanvas,
           y:19*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:5*tile*scaleCanvas
       },
       // house
       { 
           // grange
           x:35*tile*scaleCanvas,
           y:48*tile*scaleCanvas,
           w:6*tile*scaleCanvas,
           h:6*tile*scaleCanvas
       },
       {
           // house
           x:45*tile*scaleCanvas,
           y:42*tile*scaleCanvas,
           w:6*tile*scaleCanvas,
           h:4*tile*scaleCanvas
       },
       {
           // house
           x:27*tile*scaleCanvas,
           y:19*tile*scaleCanvas,
           w:6*tile*scaleCanvas,
           h:7*tile*scaleCanvas
       },
       {
           // mainHouse
           x:54*tile*scaleCanvas,
           y:40*tile*scaleCanvas,
           w:6*tile*scaleCanvas,
           h:6*tile*scaleCanvas
       },
       
       {
           // contact
           x:58*tile*scaleCanvas,
           y:28*tile*scaleCanvas,
           w:6*tile*scaleCanvas,
           h:4*tile*scaleCanvas
       },
       {
           // newLide
           x:27*tile*scaleCanvas,
           y:24*tile*scaleCanvas,
           w:25*tile*scaleCanvas,
           h:7*tile*scaleCanvas
       },
       {
           // oldLife
           x:51*tile*scaleCanvas,
           y:13*tile*scaleCanvas,
           w:14*tile*scaleCanvas,
           h:6*tile*scaleCanvas
       },
       {
           // oldLife
           x:51*tile*scaleCanvas,
           y:19*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       {
           // oldLife
           x:58*tile*scaleCanvas,
           y:19*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       {
            // contact letter_box
           x:58*tile*scaleCanvas,
           y:32*tile*scaleCanvas,
           w:2*tile*scaleCanvas,
           h:2*tile*scaleCanvas
       },
       {
            // contact panels
           x:62*tile*scaleCanvas,
           y:32*tile*scaleCanvas,
           w:2*tile*scaleCanvas,
           h:2*tile*scaleCanvas
       },
        {
            x:43*tile*scaleCanvas,
            y:31*tile*scaleCanvas,
            w:4*tile*scaleCanvas,
            h:1*tile*scaleCanvas
        },
       
       {
        x:31*tile*scaleCanvas,
        y:31*tile*scaleCanvas,
        w:7*tile*scaleCanvas,
        h:1*tile*scaleCanvas
       },
       {
           // montain panels
           x:20*tile*scaleCanvas,
           y:40*tile*scaleCanvas,
           w:2*tile*scaleCanvas,
           h:2*tile*scaleCanvas
       },
       {
           // college panels
           x:56*tile*scaleCanvas,
           y:20*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
   
       {
           // college letterbox
           x:53*tile*scaleCanvas,
           y:20*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       {
           // football pannel
           x:46*tile*scaleCanvas,
           y:18*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:2*tile*scaleCanvas
       },
       {
           // forest pannel
           x:75*tile*scaleCanvas,
           y:34*tile*scaleCanvas,
           w:2*tile*scaleCanvas,
           h:2*tile*scaleCanvas
       },
       {
           // main_house letterbox
           x:55*tile*scaleCanvas,
           y:46*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:2*tile*scaleCanvas
       },
       {
           // main_house flower
           x:49*tile*scaleCanvas,
           y:46*tile*scaleCanvas,
           w:2*tile*scaleCanvas,
           h:2*tile*scaleCanvas
       },
       {
           // house
           x:58*tile*scaleCanvas,
           y:47*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       {
           // grange
           x:35*tile*scaleCanvas,
           y:54*tile*scaleCanvas,
           w:2*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       {
           // grange
           x:39*tile*scaleCanvas,
           y:54*tile*scaleCanvas,
           w:2*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       {
           // main_house flower
           x:45*tile*scaleCanvas,
           y:46*tile*scaleCanvas,
           w:2*tile*scaleCanvas,
           h:2*tile*scaleCanvas 
       },
       {
           // 
           x:58*tile*scaleCanvas,
           y:50*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:1*tile*scaleCanvas 
       },
       {
           // banc
           x:57*tile*scaleCanvas,
           y:51*tile*scaleCanvas,
           w:2*tile*scaleCanvas,
           h:2*tile*scaleCanvas 
       },
       {
           // banc
           x:58*tile*scaleCanvas,
           y:50*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:1*tile*scaleCanvas 
       },
       {
           // banc
           x:57*tile*scaleCanvas,
           y:54*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:2*tile*scaleCanvas 
       },
       // Various
       {
           x:50*tile*scaleCanvas,
           y:31*tile*scaleCanvas,
           w:2*tile*scaleCanvas,
           h:1*tile*scaleCanvas
       },
       {
           x:49*tile*scaleCanvas,
           y:31*tile*scaleCanvas,
           w:1*tile*scaleCanvas,
           h:2*tile*scaleCanvas
       },
    {
        x:40*tile*scaleCanvas,
        y:31*tile*scaleCanvas,
        w:2*tile*scaleCanvas,
        h:1*tile*scaleCanvas
    },
    {
        x:40*tile*scaleCanvas,
        y:31*tile*scaleCanvas,
        w:1*tile*scaleCanvas,
        h:2*tile*scaleCanvas
    },
    {
        x:53*tile*scaleCanvas,
        y:19*tile*scaleCanvas,
        w:5*tile*scaleCanvas,
        h:1*tile*scaleCanvas
    },
    {
        x:59*tile*scaleCanvas,
        y:19*tile*scaleCanvas,
        w:1*tile*scaleCanvas,
        h:1*tile*scaleCanvas
    },
    {
        x:58*tile*scaleCanvas,
        y:46*tile*scaleCanvas,
        w:2*tile*scaleCanvas,
        h:1*tile*scaleCanvas
    },
   
        
        
        
        
   
      
   
   
   
   
   
    ];
    let greenBoxsArray=[
        [ index=false,
           // Maison Git
            {
            x: 33*tile*scaleCanvas,
            y: 20*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
            h:12*tile*scaleCanvas,
            },
            {
            x: 33*tile*scaleCanvas,
            y: 20*tile*scaleCanvas,
            w:13*tile*scaleCanvas,
            h:3*tile*scaleCanvas,
            },
            {
            x: 43*tile*scaleCanvas,
            y: 23*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 37*tile*scaleCanvas,
            y: 32*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 40*tile*scaleCanvas,
            y: 32*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            
            {
            x: 45*tile*scaleCanvas,
            y: 20*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
            h:12*tile*scaleCanvas,
            },
            {
            x: 40*tile*scaleCanvas,
            y: 31*tile*scaleCanvas,
            w:5*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 33*tile*scaleCanvas,
            y: 31*tile*scaleCanvas,
            w:5*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 37*tile*scaleCanvas,
            y: 25*tile*scaleCanvas,
            w:3*tile*scaleCanvas,
            h:2*tile*scaleCanvas,
            },
            {
            x: 43*tile*scaleCanvas,
            y: 21*tile*scaleCanvas,
            w:3*tile*scaleCanvas,
            h:2*tile*scaleCanvas,
            },
            {
            x: 42*tile*scaleCanvas,
            y: 26*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
            h:4*tile*scaleCanvas,
            },
        ], 
        [
            index=false,
            // Maison 3W
            {
            x: 42*tile*scaleCanvas,
            y: 20*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:12*tile*scaleCanvas,
            },
            {
            x: 46*tile*scaleCanvas,
            y: 32*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 49*tile*scaleCanvas,
            y: 32*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 42*tile*scaleCanvas,
            y: 20*tile*scaleCanvas,
            w:12*tile*scaleCanvas,
            h:3*tile*scaleCanvas,
            },
            {
            x: 53*tile*scaleCanvas,
            y: 20*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:12*tile*scaleCanvas,
            },
            {
            x: 49*tile*scaleCanvas,
            y: 31*tile*scaleCanvas,
            w:5*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 42*tile*scaleCanvas,
            y: 31*tile*scaleCanvas,
            w:5*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 44*tile*scaleCanvas,
            y: 24*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 44*tile*scaleCanvas,
            y: 26*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 46*tile*scaleCanvas,
            y: 24*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 48*tile*scaleCanvas,
            y: 24*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 50*tile*scaleCanvas,
            y: 24*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 46*tile*scaleCanvas,
            y: 26*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 48*tile*scaleCanvas,
            y: 26*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 50*tile*scaleCanvas,
            y: 26*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            
            {
            x: 44*tile*scaleCanvas,
            y: 27*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 46*tile*scaleCanvas,
            y: 27*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 48*tile*scaleCanvas,
            y: 27*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 50*tile*scaleCanvas,
            y: 27*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 44*tile*scaleCanvas,
            y: 29*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 46*tile*scaleCanvas,
            y: 29*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 48*tile*scaleCanvas,
            y: 29*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 50*tile*scaleCanvas,
            y: 29*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
         
        ], 
        [
            // contact
            {
            x: 55*tile*scaleCanvas,
            y: 21*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:12*tile*scaleCanvas,
            },
            {
            x: 55*tile*scaleCanvas,
            y: 32*tile*scaleCanvas,
            w:5*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 62*tile*scaleCanvas,
            y: 32*tile*scaleCanvas,
            w:5*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 60*tile*scaleCanvas,
            y: 26*tile*scaleCanvas,
            w:3*tile*scaleCanvas,
            h:3*tile*scaleCanvas,
            },
            {
            x: 55*tile*scaleCanvas,
            y: 21*tile*scaleCanvas,
            w:12*tile*scaleCanvas,
            h:2*tile*scaleCanvas,
            },
            {
            x: 66*tile*scaleCanvas,
            y: 21*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:12*tile*scaleCanvas,
            },
            {
            x: 65*tile*scaleCanvas,
            y: 23*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:2*tile*scaleCanvas,
            },
            {
            x: 65*tile*scaleCanvas,
            y: 30*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:2*tile*scaleCanvas,
            },
            {
            x: 59*tile*scaleCanvas,
            y: 33*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 62*tile*scaleCanvas,
            y: 33*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            }
        ], 
        [
            
        //    grange
            {
            x: 33*tile*scaleCanvas,
            y: 44*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:11*tile*scaleCanvas,
            },
            {
            x: 36*tile*scaleCanvas,
            y: 55*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 39*tile*scaleCanvas,
            y: 55*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 33*tile*scaleCanvas,
            y: 44*tile*scaleCanvas,
            w:10*tile*scaleCanvas,
            h:3*tile*scaleCanvas,
            },
            {
            x: 42*tile*scaleCanvas,
            y: 44*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:11*tile*scaleCanvas,
            },
            {
            x: 33*tile*scaleCanvas,
            y: 54*tile*scaleCanvas,
            w:4*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 39*tile*scaleCanvas,
            y: 54*tile*scaleCanvas,
            w:4*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
            {
            x: 35*tile*scaleCanvas,
            y: 46*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
            h:2*tile*scaleCanvas,
            },
            {
            x: 34*tile*scaleCanvas,
            y: 49*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
            h:2*tile*scaleCanvas,
            },
            {
            x: 39*tile*scaleCanvas,
            y: 50*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
            h:2*tile*scaleCanvas,
            },
            {
            x: 38*tile*scaleCanvas,
            y: 46*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
            h:2*tile*scaleCanvas,
            },
            {
            x: 40*tile*scaleCanvas,
            y: 46*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            },
        ], 
        [
            // litl house
            {
            x: 46*tile*scaleCanvas,
            y: 47*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            }, 
            {
            x: 49*tile*scaleCanvas,
            y: 47*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            }, 
            {
                x: 42*tile*scaleCanvas,
                y: 35*tile*scaleCanvas,
                w:1*tile*scaleCanvas,
                h:11*tile*scaleCanvas,
            },
            {
                x: 46*tile*scaleCanvas,
                y: 35*tile*scaleCanvas,
                w:1*tile*scaleCanvas,
                h:4*tile*scaleCanvas,
            },
            {
                x: 44*tile*scaleCanvas,
                y: 39*tile*scaleCanvas,
                w:3*tile*scaleCanvas,
                h:3*tile*scaleCanvas,
            },
            {
                x: 44*tile*scaleCanvas,
                y: 39*tile*scaleCanvas,
                w:2*tile*scaleCanvas,
                h:2*tile*scaleCanvas,
            },
            {
                x: 53*tile*scaleCanvas,
                y: 35*tile*scaleCanvas,
                w:1*tile*scaleCanvas,
                h:11*tile*scaleCanvas,
            },
            {
                x: 42*tile*scaleCanvas,
                y: 35*tile*scaleCanvas,
                w:12*tile*scaleCanvas,
                h:3*tile*scaleCanvas,
            },
            {
                x: 48*tile*scaleCanvas,
                y: 39*tile*scaleCanvas,
                w:4*tile*scaleCanvas,
                h:1*tile*scaleCanvas,
            },
            {
                x: 42*tile*scaleCanvas,
                y: 46*tile*scaleCanvas,
                w:5*tile*scaleCanvas,
                h:1*tile*scaleCanvas,
            },
            {
                x: 49*tile*scaleCanvas,
                y: 46*tile*scaleCanvas,
                w:5*tile*scaleCanvas,
                h:1*tile*scaleCanvas,
            },
            {
                x: 50*tile*scaleCanvas,
                y: 42*tile*scaleCanvas,
                w:2*tile*scaleCanvas,
                h:2*tile*scaleCanvas,
            },
            {
                x: 46*tile*scaleCanvas,
                y: 44*tile*scaleCanvas,
                w:1*tile*scaleCanvas,
                h:2*tile*scaleCanvas,
            },
            {
                x: 42*tile*scaleCanvas,
                y: 44*tile*scaleCanvas,
                w:1*tile*scaleCanvas,
                h:2*tile*scaleCanvas,
            },
        ],
        [
            // main house
            {
            x: 51*tile*scaleCanvas,
            y: 35*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:12*tile*scaleCanvas,
            }, 
            {
            x: 51*tile*scaleCanvas,
            y: 37*tile*scaleCanvas,
            w:4*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            }, 
            {
            x: 60*tile*scaleCanvas,
            y: 37*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            }, 
            {
            x: 55*tile*scaleCanvas,
            y: 47*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            }, 
            {
            x: 58*tile*scaleCanvas,
            y: 47*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            }, 
            {
            x: 55*tile*scaleCanvas,
            y: 35*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:5*tile*scaleCanvas,
            }, 
            {
            x: 53*tile*scaleCanvas,
            y: 39*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            }, 
            {
            x: 59*tile*scaleCanvas,
            y: 39*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
            h:2*tile*scaleCanvas,
            }, 
            {
            x: 62*tile*scaleCanvas,
            y: 37*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:5*tile*scaleCanvas,
            }, 
            {
            x: 67*tile*scaleCanvas,
            y: 37*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            }, 
            {
            x: 68*tile*scaleCanvas,
            y: 37*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            }, 
            {
            x: 53*tile*scaleCanvas,
            y: 40*tile*scaleCanvas,
            w:3*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            }, 
            {
            x: 63*tile*scaleCanvas,
            y: 37*tile*scaleCanvas,
            w:3*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            }, 
            {
            x: 68*tile*scaleCanvas,
            y: 38*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            }, 
            {
            x: 69*tile*scaleCanvas,
            y: 42*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            }, 
            {
            x: 71*tile*scaleCanvas,
            y: 44*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            }, 
            {
            x: 67*tile*scaleCanvas,
            y: 40*tile*scaleCanvas,
            w:6*tile*scaleCanvas,
            h:2*tile*scaleCanvas,
            }, 
            {
            x: 53*tile*scaleCanvas,
            y: 42*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
            h:2*tile*scaleCanvas,
            }, 
            {
            x: 73*tile*scaleCanvas,
            y: 35*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:12*tile*scaleCanvas,
            }, 
            {
            x: 62*tile*scaleCanvas,
            y: 44*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:2*tile*scaleCanvas,
            }, 
            {
            x: 51*tile*scaleCanvas,
            y: 45*tile*scaleCanvas,
            w:1*tile*scaleCanvas,
            h:2*tile*scaleCanvas,
            }, 
            {
            x: 71*tile*scaleCanvas,
            y: 38*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
            h:2*tile*scaleCanvas,
            }, 
            {
            x: 71*tile*scaleCanvas,
            y: 42*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
            h:2*tile*scaleCanvas,
            }, 
            {
            x: 50*tile*scaleCanvas,
            y: 35*tile*scaleCanvas,
            w:23*tile*scaleCanvas,
            h:2*tile*scaleCanvas,
            }, 
            {
            x: 50*tile*scaleCanvas,
            y: 46*tile*scaleCanvas,
            w:6*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            }, 
            {
            x: 58*tile*scaleCanvas,
            y: 46*tile*scaleCanvas,
            w:15*tile*scaleCanvas,
            h:1*tile*scaleCanvas,
            }, 
        ]    
    ];
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
        textToShow: document.querySelector('.football')
    },
    {
         // Formation Dev
        x: 42*tile*scaleCanvas,
        y: 31*tile*scaleCanvas,
        width: 2*tile*scaleCanvas,
        height: 2*tile*scaleCanvas,
        textToShow: document.querySelector('.formationDev')
    },
    {
         // Soft Skills
        x: 34*tile*scaleCanvas,
        y: 32*tile*scaleCanvas,
        width: 2*tile*scaleCanvas,
        height: 1*tile*scaleCanvas,
        textToShow: document.querySelector('.competences')
    },
    {
         // mountain
        x: 20*tile*scaleCanvas,
        y: 42*tile*scaleCanvas,
        width: 2*tile*scaleCanvas,
        height: 1*tile*scaleCanvas,
        textToShow: document.querySelector('.friends')
    }
    
]


    const right = document.querySelector('.right');
    const down = document.querySelector('.down');
    const left = document.querySelector('.left');
    const up = document.querySelector('.up');
    const action_btnt= document.querySelector(".action_button_img");
    let insideRedbox=false
    const landscape= document.querySelector('.landscape') 
    let modal=document.querySelector('.game_boy')
    const presentation= document.querySelector('.Presentation');
    let openPannels= false
    let presentationReaded=false;
    let close_presentation= document.querySelectorAll('.close_presentation')
    let createBlackbox= new Collision(blackBoxs, ctx, player, 'black'); 

    let pannelsOpen=false;
    let actionTouch=false
    
    let movingUp=false; 
    let movingDown=false;
    let movingRight=false;
    let movingLeft=false;
    let actionBtn=false

    ctx.imageSmoothingEnabled = false
    let frameChanging=0

 
document.getElementById('body').addEventListener("touchstart", (e)=>{
    e.stopPropagation();
}, { passive: true });
document.addEventListener('contextmenu', event => event.preventDefault());

full.addEventListener("click", function(){
    if (full.textContent==="Plein Ecran"){
        full.textContent= "Quitter Plein Ecran"
        if(mydocument.requestFullscreen){
            mydocument.requestFullscreen();
        }
        else if (mydocument.msRequestFullScreen){
            mydocument.msRequestFullScreen();
        }
        else if (mydocument.mozRequestFullScreen){
            mydocument.mozRequestFullScreen();
        }
        else if(mydocument.webkitRequestFullScreen){
            mydocument.webkitRequestFullScreen();
        }

    }
    else 
    {
        if(document.exitFullscreen){
            document.exitFullscreen();
        }
        else if (document.msexitFullscreen){
            document.msexitFullscreen();
        }
        else if (document.mozexitFullscreen){
            document.exitFullscreen();
        }
        else if (document.webkitexitFullscreen){
            document.webkitexitFullscreen();
        }
        full.textContent="Plein Ecran"
    }
})
        
    function displayCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight
        }

    function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }  
    window.addEventListener('keydown',  function (e) {   
        if(e.key=== "e" || e.key=== "E" ){ 
            actionBtn=true
        }
        if(e.key=== "t" || e.key=== "T" ){ 
            actionBtn=false
        }
        if(e.key=== "s" || e.key=== "S" || e.key==="ArrowDown"  ){ 
            movingDown=true
        }
        if(e.key=== "z" || e.key=== "Z" || e.key==="ArrowUp" ) {
            movingUp=true
        }
        if (e.key=== "d" || e.key=== "D" || e.key==="ArrowRight" ) {
            movingRight=true;
        }
        if (e.key=== "q" || e.key=== "Q" || e.key==="ArrowLeft") {
            movingLeft=true;
        }
        // player.moving=true
    },  )

    window.addEventListener('keyup', function (e) {
        
        player.moving = false
        movingDown=false
        movingUp=false;
        movingRight=false;
        movingLeft=false;
        
    })


    action_btnt.addEventListener('touchstart', function (e) {
        (actionBtn=true)
        e.stopPropagation();
    },{ passive: true })
    up.addEventListener('touchstart', function (e) {
        (movingUp=true)
        player.moving = true
        e.stopPropagation();
    },{ passive: true })
    up.addEventListener('touchend', function () {
        movingUp=false
        player.moving = false
    },{ passive: true })
    right.addEventListener('touchstart', function (e) {
        (movingRight=true)
        player.moving = true
        e.stopPropagation();
    },{ passive: true })
    right.addEventListener('touchend', function () {
        movingRight=false
        player.moving = false
    },{ passive: true })
    down.addEventListener('touchstart', function (e) {
        (movingDown=true)
        player.moving = true
        e.stopPropagation();
    },{ passive: true })
    down.addEventListener('touchend', function () {
        movingDown=false
        player.moving = false
    },{ passive: true })
    left.addEventListener('touchstart', function (e) {
        (movingLeft=true)
        player.moving = true
        e.stopPropagation();
    },{ passive: true })
    left.addEventListener('touchend', function () {
        movingLeft=false
        player.moving = false
    },{ passive: true })


    function movePlayer() {
        if(openPannels===false) {
          if(movingRight===false && movingLeft===false){
            if (movingDown===true && player.y < 2000) {
                player.y += player.speed
                player.frameY = 0;
                player.moving = true
            }
            if (movingUp===true && player.y > 360) {
                player.y -= player.speed
                player.frameY = 3;
                player.moving = true
            }
          }
            if (movingRight===true && player.x < 3000) {
                player.x += player.speed
                player.frameY = 2;
                player.moving = true
            }
            if (movingLeft===true && player.x > 360) {
                player.x -= player.speed
                player.frameY = 1;
                player.moving = true
            }
        }
    }
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


    close_presentation.forEach(element => {
        element.addEventListener('click',function(){
            presentation.style.display='none'
            landscape.style.display="none"
            presentationReaded=true
            openPannels=false 
            actionBtn=false
        })
    });
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
        
        
        if(openPannels===true) {
            modal.style.display='flex'
        } else if (openPannels===false) {
            modal.style.display='none'
        }
    }
    function enterInHouse() {
        for (let i = 0; i < blueBoxs.length; i++) {

            if (((player.x +30 >= blueBoxs[i].x && player.x  <= blueBoxs[i].x + blueBoxs[i].w)) && (player.y >= blueBoxs[i].y && player.y <= blueBoxs[i].y + blueBoxs[i].h) && movingUp===true) {
                inHouse = true
                blueBoxs[i].open=true
                
            }
            if (((player.x +30 >= blueBoxs[i].x && player.x <= blueBoxs[i].x + blueBoxs[i].w)) && (player.y >= blueBoxs[i].y && player.y <= blueBoxs[i].y + blueBoxs[i].h) && movingDown===true) {
                inHouse = false
                blueBoxs[i].open=false
            }  
            if (inHouse === true && blueBoxs[i].open===true ){  
                ctx.drawImage(blueBoxs[i].background, blueBoxs[i].dx, blueBoxs[i].dy, blueBoxs[i].dw, blueBoxs[i].dh, blueBoxs[i].dpx, blueBoxs[i].dpy, blueBoxs[i].dpw, blueBoxs[i].dph) 
                for ( let j= 0; j<greenBoxsArray.length; j++) {
                    let createGreenbox= new Collision(greenBoxsArray[i], ctx, player); 
                    createGreenbox.enterInCollision(greenBoxsArray[i], ctx, player)
                    createGreenbox.createBox()
                    
                }
            }          
        }


    } 
    function collisionRedbox(){

    for (let redBox of redBoxs) {
        // ctx.fillStyle = 'red'
        // ctx.fillRect(redBox.x, redBox.y, redBox.width, redBox.height)
       

        if(  ((player.y+player.height) > (redBox.y)) &&
               ((player.y < (redBox.y + redBox.height))) &&
               ((player.x+player.width)> redBox.x) &&
               (player.x < (redBox.x+redBox.width))
           ) {
        insideRedbox= true
       
        
        if (insideRedbox===true && actionBtn===true  && player.frameY===3) {
            openPannels=true
            redBox.textToShow.style.display='block'
        }
        if(actionBtn===false) {
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
    displayCanvas()
 
    function animate() {    
        ctx.drawImage(Images_array[1], 0, 0, canvasSize.width / 1.1, canvasSize.height / 1.1, 0, 0, canvasSize.width, canvasSize.height); //drawing the background
        enterInHouse()
        drawSprite(Images_array[0], player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width * scale, player.height * scale) // drawing the sprite
        movePlayer() 
        ctx.resetTransform();
        ctx.translate(-(player.x - canvas.width / 2), -(player.y - canvas.height / 2)); //for center the character on the map
        handlePlayerFrame()
        collisionRedbox()
        displaGameboy()
        if (inHouse === false) {
            createBlackbox.enterInCollision(blackBoxs, player)   
            // createBlackbox.createBox() 
    }  
    
    window.requestAnimationFrame(animate); 
}
window.addEventListener('resize', displayCanvas)
    animate()

})

