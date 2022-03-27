// import {blackBoxs} from '/variables/variables.js';
// import {blueBoxs} from '/variables/variables.js';
// import {greenBoxsArray} from '/variables/variables.js';
// import {Images_array} from '/variables/variables.js';
// import {tile} from '/variables/variables.js';
// import {scaleCanvas} from '/variables/variables.js';
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
     let tile=32;
     let scaleCanvas=1.1
     const Images_array = [
        playerSprite, background, office, retraining, contact, grangeOne, house, bigHouse
    ];
    
     const blueBoxs = [
        {
            // Git
            x: 38*tile*scaleCanvas,
            y: 31*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
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
            x: 47*tile*scaleCanvas,
            y: 31*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
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
            x: 60*tile*scaleCanvas,
            y: 32*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
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
            x:56*tile*scaleCanvas,
            y:46*tile*scaleCanvas,
            w:2*tile*scaleCanvas,
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
            y:29*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:2*tile*scaleCanvas
        },
        {
            x:19*tile*scaleCanvas,
            y:30*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:2*tile*scaleCanvas
        },
        {
            x:15*tile*scaleCanvas,
            y:33*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:2*tile*scaleCanvas
        },
        {
            x:13*tile*scaleCanvas,
            y:38*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:2*tile*scaleCanvas
        },
        {
            x:23*tile*scaleCanvas,
            y:38*tile*scaleCanvas,
            width:2*tile*scaleCanvas,
            height:2*tile*scaleCanvas
        },
        {
            x:15*tile*scaleCanvas,
            y:42*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:2*tile*scaleCanvas
        },
        {
            x:42*tile*scaleCanvas,
            y:49*tile*scaleCanvas,
            width:2*tile*scaleCanvas,
            height:3*tile*scaleCanvas
        },
        {
            x:46*tile*scaleCanvas,
            y:50*tile*scaleCanvas,
            width:2*tile*scaleCanvas,
            height:2*tile*scaleCanvas
        },
        {
            x:47*tile*scaleCanvas,
            y:52*tile*scaleCanvas,
            width:2*tile*scaleCanvas,
            height:3*tile*scaleCanvas
        },
        {
            x:42*tile*scaleCanvas,
            y:54*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        // Mountains
        {
            x:11*tile*scaleCanvas,
            y:45*tile*scaleCanvas,
            width:20*tile*scaleCanvas,
            height:14*tile*scaleCanvas
        },
        {
            x:64*tile*scaleCanvas,
            y:29*tile*scaleCanvas,
            width:2*tile*scaleCanvas,
            height:3*tile*scaleCanvas
        },
        {
            x:65*tile*scaleCanvas,
            y:31*tile*scaleCanvas,
            width:2*tile*scaleCanvas,
            height:3*tile*scaleCanvas
        },
        {
            x:67*tile*scaleCanvas,
            y:32*tile*scaleCanvas,
            width:3*tile*scaleCanvas,
            height:3*tile*scaleCanvas
        },
        {
            x:77*tile*scaleCanvas,
            y:37*tile*scaleCanvas,
            width:3*tile*scaleCanvas,
            height:3*tile*scaleCanvas
        },
        {
            x:75*tile*scaleCanvas,
            y:38*tile*scaleCanvas,
            width:3*tile*scaleCanvas,
            height:3*tile*scaleCanvas
        },
        {
            x:70*tile*scaleCanvas,
            y:33*tile*scaleCanvas,
            width:2*tile*scaleCanvas,
            height:3*tile*scaleCanvas
        },
        {
            x:73*tile*scaleCanvas,
            y:33*tile*scaleCanvas,
            width:2*tile*scaleCanvas,
            height:3*tile*scaleCanvas
        },
    
       
        // fences
        {
            x:30*tile*scaleCanvas,
            y:10*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:9*tile*scaleCanvas
        },
        {
            x:25*tile*scaleCanvas,
            y:37*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:8*tile*scaleCanvas
        },
        {
            x:30*tile*scaleCanvas,
            y:19*tile*scaleCanvas,
            width:13*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        {
            x:47*tile*scaleCanvas,
            y:10*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:9*tile*scaleCanvas
        },
        {
            x:47*tile*scaleCanvas,
            y:18*tile*scaleCanvas,
            width:4*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        {
            x:60*tile*scaleCanvas,
            y:20*tile*scaleCanvas,
            width:4*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        {
            x:60*tile*scaleCanvas,
            y:39*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:20*tile*scaleCanvas
        },
        {
            x:33*tile*scaleCanvas,
            y:45*tile*scaleCanvas,
            width:12*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        {
            x:33*tile*scaleCanvas,
            y:45*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:14*tile*scaleCanvas
        },
    
    
        // bush 
        {
            x:34*tile*scaleCanvas,
            y:58*tile*scaleCanvas,
            width:26*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        {
            x:25*tile*scaleCanvas,
            y:31*tile*scaleCanvas,
            width:2*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        {
            x:25*tile*scaleCanvas,
            y:32*tile*scaleCanvas,
            width:1*tile,
            height:1*tile
        },
        {
            x:25*tile*scaleCanvas,
            y:35*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:2*tile*scaleCanvas
        },
        {
            x:25*tile*scaleCanvas,
            y:36*tile*scaleCanvas,
            width:27*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        {
            x:51*tile*scaleCanvas,
            y:36*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:11*tile*scaleCanvas
        },
        {
            x:54*tile*scaleCanvas,
            y:37*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:10*tile*scaleCanvas
        },
        {
            x:54*tile*scaleCanvas,
            y:37*tile*scaleCanvas,
            width:4*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        {
            x:57*tile*scaleCanvas,
            y:36*tile*scaleCanvas,
            width:5*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        {
            x:61*tile*scaleCanvas,
            y:36*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:3*tile*scaleCanvas
        },
        {
            x:61*tile*scaleCanvas,
            y:38*tile*scaleCanvas,
            width:14*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        {
            x:57*tile*scaleCanvas,
            y:31*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:3*tile*scaleCanvas
        },
        {
            x:56*tile*scaleCanvas,
            y:23*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:9*tile*scaleCanvas
        },
        
        {
            x:56*tile*scaleCanvas,
            y:23*tile*scaleCanvas,
            width:9*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        {
            x:64*tile*scaleCanvas,
            y:20*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:4*tile*scaleCanvas
        },
        {
            x:52*tile*scaleCanvas,
            y:23*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:9*tile*scaleCanvas
        },
        {
            x:43*tile*scaleCanvas,
            y:23*tile*scaleCanvas,
            width:10*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        {
            x:43*tile*scaleCanvas,
            y:19*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:5*tile*scaleCanvas
        },
        // house
        { 
            // grange
            x:35*tile*scaleCanvas,
            y:48*tile*scaleCanvas,
            width:6*tile*scaleCanvas,
            height:6*tile*scaleCanvas
        },
        {
            // house
            x:45*tile*scaleCanvas,
            y:42*tile*scaleCanvas,
            width:6*tile*scaleCanvas,
            height:4*tile*scaleCanvas
        },
        {
            // house
            x:27*tile*scaleCanvas,
            y:19*tile*scaleCanvas,
            width:6*tile*scaleCanvas,
            height:7*tile*scaleCanvas
        },
        {
            // mainHouse
            x:54*tile*scaleCanvas,
            y:40*tile*scaleCanvas,
            width:6*tile*scaleCanvas,
            height:6*tile*scaleCanvas
        },
        
        {
            // contact
            x:58*tile*scaleCanvas,
            y:28*tile*scaleCanvas,
            width:6*tile*scaleCanvas,
            height:4*tile*scaleCanvas
        },
        {
            // newLide
            x:27*tile*scaleCanvas,
            y:24*tile*scaleCanvas,
            width:25*tile*scaleCanvas,
            height:7*tile*scaleCanvas
        },
        {
            // oldLife
            x:51*tile*scaleCanvas,
            y:13*tile*scaleCanvas,
            width:14*tile*scaleCanvas,
            height:6*tile*scaleCanvas
        },
        {
            // oldLife
            x:51*tile*scaleCanvas,
            y:19*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        {
            // oldLife
            x:58*tile*scaleCanvas,
            y:19*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        {
             // contact letter_box
            x:58*tile*scaleCanvas,
            y:33*tile*scaleCanvas,
            width:2*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        {
             // contact panels
            x:62*tile*scaleCanvas,
            y:33*tile*scaleCanvas,
            width:2*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        
    
        {
            // college panels
            x:56*tile*scaleCanvas,
            y:20*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
    
        {
            // college letterbox
            x:53*tile*scaleCanvas,
            y:20*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        {
            // football pannel
            x:46*tile*scaleCanvas,
            y:18*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:2*tile*scaleCanvas
        },
        {
            // forest pannel
            x:75*tile*scaleCanvas,
            y:34*tile*scaleCanvas,
            width:2*tile*scaleCanvas,
            height:2*tile*scaleCanvas
        },
        {
            // main_house letterbox
            x:55*tile*scaleCanvas,
            y:47*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        {
            // main_house flower
            x:49*tile*scaleCanvas,
            y:47*tile*scaleCanvas,
            width:2*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        {
            // main_house flower
            x:45*tile*scaleCanvas,
            y:47*tile*scaleCanvas,
            width:2*tile*scaleCanvas,
            height:1*tile*scaleCanvas 
        },
        {
            // 
            x:58*tile*scaleCanvas,
            y:50*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:1*tile*scaleCanvas 
        },
        {
            // banc
            x:57*tile*scaleCanvas,
            y:51*tile*scaleCanvas,
            width:2*tile*scaleCanvas,
            height:2*tile*scaleCanvas 
        },
        {
            // banc
            x:58*tile*scaleCanvas,
            y:50*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:1*tile*scaleCanvas 
        },
        {
            // banc
            x:57*tile*scaleCanvas,
            y:54*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:2*tile*scaleCanvas 
        },
        // Various
        {
            x:50*tile*scaleCanvas,
            y:31*tile*scaleCanvas,
            width:2*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
        {
            x:40*tile*scaleCanvas,
            y:31*tile*scaleCanvas,
            width:1*tile*scaleCanvas,
            height:1*tile*scaleCanvas
        },
    
         
         
         
         
    
         
        // {
        //     // contact panels
        //     x: 2175,
        //     y: 1155,
        //     width: 90,
        //     height: 30, 
        // },
        // {
        //     // college panels
        //     x: 1960,
        //     y: 700,
        //     width: 70,
        //     height: 30, 
        // },
    
    
    
    
    
    ];
     let greenBoxsArray=[
        [
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
            h:2*tile*scaleCanvas,
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
            h:3*tile*scaleCanvas,
           },
        ], 
        [
            // Maison 3W
            {
                x: 42*tile*scaleCanvas,
                y: 20*tile*scaleCanvas,
                w:1*tile*scaleCanvas,
                h:12*tile*scaleCanvas,
             },
            {
                x: 42*tile*scaleCanvas,
                y: 20*tile*scaleCanvas,
                w:12*tile*scaleCanvas,
                h:1*tile*scaleCanvas,
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
            x: 33*tile*scaleCanvas,
            y: 44*tile*scaleCanvas,
            w:10*tile*scaleCanvas,
            h:2*tile*scaleCanvas,
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
                x: 45*tile*scaleCanvas,
                y: 39*tile*scaleCanvas,
                w:2*tile*scaleCanvas,
                h:1*tile*scaleCanvas,
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
                h:2*tile*scaleCanvas,
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
            h:4*tile*scaleCanvas,
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
    
  
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    
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
    const action_btnt= document.querySelector(".action_button_img");
 
    let pannelsOpen=false;
    let actionTouch=false
    
    let movingUp=false; 
    let movingDown=false;
    let movingRight=false;
    let movingLeft=false;
    let actionBtn=false

   
       function moveTouch() {
        

        action_btnt.addEventListener('touchstart', function () {
            (actionBtn=true)
        },{ passive: true })
       
        up.addEventListener('touchstart', function () {
            (movingUp=true)
            player.moving = true
        },{ passive: true })
        up.addEventListener('touchend', function () {
            movingUp=false
            player.moving = false
        },)
        right.addEventListener('touchstart', function () {
            (movingRight=true)
            player.moving = true
        },{ passive: true })
        right.addEventListener('touchend', function () {
            movingRight=false
            player.moving = false
        },)
        down.addEventListener('touchstart', function () {
            (movingDown=true)
            player.moving = true
        },{ passive: true })
        down.addEventListener('touchend', function () {
            movingDown=false
            player.moving = false
        },)
        left.addEventListener('touchstart', function () {
            (movingLeft=true)
            player.moving = true
        },{ passive: true })
        left.addEventListener('touchend', function () {
            movingLeft=false
            player.moving = false
        },)
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
    // Pour crée une fonction avec tous les keydown, je crée un tableau, auquel j'atoute la keyCode lorsque keydown et je la delete lorsque keyup. Je peux ensuite crée une fonction en mettant en condition : "si mon array est vrai alors tu peux bouger"

    // Je rajoute la variable player.moving true à chaque if pour actualiser la keydown, car cela peut bug avec le fait qu'on ne relache pas le bouton avant d'appuyer sur un autre bouton (je clique sur 'aller a gauche' avant de relacher 'descendre')
    function movePlayer() {
        if(openPannels===false) {
            if (movingUp===true && player.y > 360) {
                player.y -= player.speed
                player.frameY = 3;
                player.moving = true
            }
            if (movingDown===true && player.y < 2000) {
                player.y += player.speed
                player.frameY = 0;
                player.moving = true
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
    

    let insideRedbox=false
    const landscape= document.querySelector('.landscape') 
    let modal=document.querySelector('.game_boy')
  

    const presentation= document.querySelector('.Presentation');
   
 
    
    let openPannels= false
    let presentationReaded=false;
   

    let close_presentation= document.querySelectorAll('.close_presentation')


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
        close_presentation.forEach(element => {
            element.addEventListener('click',function(){
                presentation.style.display='none'
                landscape.style.display="none"
                presentationReaded=true
                openPannels=false 
                actionBtn=false
            })
        });
        
        if(openPannels===true) {
            modal.style.display='flex'
        } else if (openPannels===false) {
            modal.style.display='none'
        }
          

    }
    createBluebox()   
   
    
    function animate() { 
    ctx.drawImage(Images_array[1], 0, 0, canvasSize.width / 1.1, canvasSize.height / 1.1, 0, 0, canvasSize.width, canvasSize.height);
    enterInHouse()
    drawSprite(Images_array[0], player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width * scale, player.height * scale)
    movePlayer()
    moveTouch()
    handlePlayerFrame()
    ctx.resetTransform();
    ctx.translate(-(player.x - canvas.width / 2), -(player.y - canvas.height / 2));
    collisionRedbox()
    displaGameboy()
    document.addEventListener('contextmenu', event => event.preventDefault());
    window.addEventListener('resize', displayCanvas)
    
    
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

            if (((player.x + 16 >= blueBoxs[i].x && player.x + 16 <= blueBoxs[i].x + blueBoxs[i].w)) && (player.y >= blueBoxs[i].y && player.y <= blueBoxs[i].y + blueBoxs[i].h) && movingUp===true) {
                inHouse = true
                indexBluebox = i
            }
            if (((player.x + 16 >= blueBoxs[i].x && player.x + 16 <= blueBoxs[i].x + blueBoxs[i].w)) && (player.y >= blueBoxs[i].y && player.y <= blueBoxs[i].y + blueBoxs[i].h) && movingDown===true) {
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
        ctx.fillStyle = 'red'
        ctx.fillRect(redBox.x, redBox.y, redBox.width, redBox.height)
       

        if(  ((player.y+player.height) > (redBox.y)) &&
               ((player.y < (redBox.y + redBox.height))) &&
               ((player.x+player.width)> redBox.x) &&
               (player.x < (redBox.x+redBox.width))
           ) {
        insideRedbox= true
        ctx.fillStyle = 'yellow'
        ctx.fillRect(redBox.x, redBox.y, redBox.width, redBox.height)
        
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





  



})

// i added player.x-1600 player.y-1600 at the drawImage to zoom on the character, but the collision box are now not align...