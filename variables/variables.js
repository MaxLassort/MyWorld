



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
export let scaleCanvas=1.1
export const Images_array = [
    playerSprite, background, office, retraining, contact, grangeOne, house, bigHouse
];

export const blueBoxs = [
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
export const blackBoxs = [
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
export let greenBoxsArray=[
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

