



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

export const Images_array = [
    playerSprite, background, office, retraining, contact, grangeOne, house, bigHouse
];

export const blueBoxs = [
    {
        // Git
        x: 1340,
        y: 1095,
        w: 65,
        h: 10,
        background: Images_array[2],
        dx: 0,
        dy: 0,
        dw: 384,
        dh: 352,
        dpx: 1200,
        dpy: 725,
        dpw: 400,
        dph: 400,

    },
    {
        // 3W
        x: 1665,
        y: 1095,
        w: 65,
        h: 10,
        background: Images_array[3],
        dx: 0,
        dy: 0,
        dw: 384,
        dh: 384,
        dpx: 1500,
        dpy: 720,
        dpw: 400,
        dph: 400,

    }, 
    {
        // cotact
        x: 2130,
        y: 1140,
        w: 40,
        h: 10,
        background: Images_array[4],
        dx: 0,
        dy: 0,
        dw: 384,
        dh: 384,
        dpx: 1950,
        dpy: 760,
        dpw: 400,
        dph: 400,

    }, 
    {
        // grange
        x: 1300,
        y: 1920,
        w: 80,
        h: 10,
        background: Images_array[5],
        dx: 0,
        dy: 0,
        dw: 384,
        dh: 384,
        dpx: 1170,
        dpy: 1570,
        dpw: 400,
        dph: 400,
       
    },
    
    {
        // litl hous
        x: 1660,
        y: 1650,
        w: 50,
        h: 10,
        background: Images_array[6],
        dx: 0,
        dy: 0,
        dw: 384,
        dh: 384,
        dpx: 1500,
        dpy: 1270,
        dpw: 400,
        dph: 400,  
    },
    {
        // litl house
        x: 1980,
        y: 1650,
        w: 50,
        h: 10,
        background: Images_array[7],
        dx: 0,
        dy: 0,
        dw: 800,
        dh: 800,
        dpx: 1825,
        dpy: 950,
        dpw: 800,
        dph: 800,  
    }
       
]; 
export const blackBoxs = [
    // Trees
    {
        x: 655,
        y: 1030,
        width: 60,
        height: 70,
    },
    {
        x: 795,
        y: 1000,
        width: 60,
        height: 70,
    },
    {
        x: 515,
        y: 1140,
        width: 60,
        height: 70,
    },
    {
        x: 445,
        y: 1310,
        width: 60,
        height: 70,
    },
    {
        x: 800,
        y: 1325,
        width: 60,
        height: 70,
    },
    {
        x: 2310,
        y: 1130,
        width: 60,
        height: 60,
    },
    {
        x: 2370,
        y: 1150,
        width: 60,
        height: 60,
    },
    {
        x: 2470,
        y: 1200,
        width: 150,
        height: 60,
    },
    {
        x: 2150,
        y: 1340,
        width: 600,
        height: 60,
    },
    {
        x: 2010,
        y: 1260,
        width: 180,
        height: 60,
    },
    {
        x: 2700,
        y: 1200,
        width: 150,
        height: 500,
    },
    {
        x: 1240,
        y: 1700,
        width: 200,
        height: 200,
    },
    // Mountains
    {
        x: 410,
        y: 1550,
        width: 700,
        height: 700,
    },
    // fences
    {
        x: 2130,
        y: 650,
        width: 200,
        height: 80,
    },
    {
        x: 900,
        y: 1270,
        width: 930,
        height: 350,
    },
    {
        x: 990,
        y: 660,
        width: 550,
        height: 200,
    },
    {
        x: 1055,
        y: 350,
        width: 20,
        height: 400,
    },
    {
        x: 1655,
        y: 350,
        width: 20,
        height: 300,
    },
    {
        x: 1655,
        y: 640,
        width: 200,
        height: 20,
    },
    {
        x: 2120,
        y: 1600,
        width: 30,
        height: 500,
    },
    {
        x: 1170,
        y: 1600,
        width: 30,
        height: 500,
    },
    {
        x: 1490,
        y: 1720,
        width: 45,
        height: 90,
    },
    {
        x: 1635,
        y: 1720,
        width: 45,
        height: 90,
    },
    {
        x: 1670,
        y: 1840,
        width: 45,
        height: 90,
    },
    {
        x: 1480,
        y: 1900,
        width: 30,
        height: 30,
    },
    // bush
    {
        x: 890,
        y: 1090,
        width: 60,
        height: 20,
    },
    {
        x: 890,
        y: 1090,
        width: 20,
        height: 50,
    },
    {
        x: 890,
        y: 1240,
        width: 20,
        height: 50,
    },
    {
        x: 1840,
        y: 810,
        width: 20,
        height: 300,
    },
    {
        x: 1490,
        y: 800,
        width: 350,
        height: 30,
    },
    {
        x: 2260,
        y: 670,
        width: 600,
        height: 200,
    },
    {
        x: 1980,
        y: 790,
        width: 500,
        height: 300,
    },
    {
        x: 2010,
        y: 1130,
        width: 60,
        height: 60,
    },
    {
        x: 1910,
        y: 1300,
        width: 240,
        height: 330,
    },
    // houses

    {
        x: 950,
        y: 1045,
        width: 910,
        height: 50,
    },
    {
        x: 1800,
        y: 470,
        width: 600,
        height: 200,
    },
    {
        x: 1980,
        y: 1030,
        width: 500,
        height: 100,
    },
    {
        x: 1990,
        y: 1900,
        width: 60,
        height: 60,
    },
    {
        x: 2010,
        y: 1810,
        width: 62,
        height: 40,
    },
    {
        x: 2050,
        y: 1760,
        width: 30,
        height: 30,
    },
    
    {
        // contact letter_box
        x: 2075,
        y: 1155,
        width: 30,
        height: 30, 
    },
    {
        // contact panels
        x: 2175,
        y: 1155,
        width: 90,
        height: 30, 
    },
    {
        // college panels
        x: 1960,
        y: 700,
        width: 70,
        height: 30, 
    },
    {
        // college letterbox
        x: 1865,
        y: 700,
        width: 30,
        height: 30, 
    },
    {
        // football pannel
        x: 1620,
        y: 655,
        width: 40,
        height: 30, 
    },
    {
        // forest pannel
        x: 2645,
        y: 1210,
        width: 40,
        height: 30, 
    },
    {
        // main_house letterbox
        x: 1940,
        y: 1645,
        width: 30,
        height: 30, 
    },
    {
        // main_house flower
        x: 1735,
        y: 1660,
        width: 50,
        height: 30, 
    },
    {
        // main_house flower
        x: 1590,
        y: 1660,
        width: 50,
        height: 30, 
    },
    {
        // mountain
        x: 710,
        y: 1495,
        width: 50,
        height: 30, 
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
            x: 1150,
            y: 700,
            w: 65,
            h: 400,
        },
        {
            x: 1050,
            y: 670,
            w: 550,
            h: 100,
        },
        {
            x: 1580,
            y: 670,
            w: 50,
            h: 450,
        },
        {
            x: 1420,
            y: 1080,
            w: 200,
            h: 50,
        },
        {
            x: 1200,
            y: 1080,
            w: 130,
            h: 50,
        },
        {
            x: 1310,
            y: 890,
            w: 80,
            h: 40,
        },
        {
            x: 1460,
            y: 930,
            w: 70,
            h: 100,
        },
    ], 
    [
        // Maison 3W
        {
            // left wall
            x: 1450,
            y: 700,
            w: 65,
            h: 400,
        },
        // up wall
        {
            x: 1450,
            y: 670,
            w: 480,
            h: 100,
        },
        {
            // right 
            x: 1880,
            y: 670,
            w: 50,
            h: 450,
        },
        {
            // down right
            x: 1720,
            y: 1080,
            w: 200,
            h: 50,
        },
        {
            // down left
            x: 1500,
            y: 1080,
            w: 160,
            h: 50,
        },
        {
            // desk 
            x: 1570,
            y: 870,
            w: 20,
            h: 40,
        },
        {
            // desk 
            x: 1640,
            y: 870,
            w: 20,
            h: 40,
        },
        {
            // desk 
            x: 1710,
            y: 870,
            w: 20,
            h: 40,
        },
        {
            // desk 
            x: 1780,
            y: 870,
            w: 20,
            h: 40,
        },
        {
            // desk 
            x: 1570,
            y: 960,
            w: 20,
            h: 40,
        },
        {
            // desk 
            x: 1640,
            y: 960,
            w: 20,
            h: 40,
        },
        {
            // desk 
            x: 1710,
            y: 960,
            w: 20,
            h: 40,
        },
        {
            // desk 
            x: 1780,
            y: 960,
            w: 20,
            h: 40,
        },
      
    ], 
    [
        // contact
        {
            // left
            x: 1950,
            y: 750,
            w: 20,
            h: 400,
        },
        {
            // up
            x: 1950,
            y: 750,
            w: 400,
            h: 50,
        },
        {
            // right
            x: 2340,
            y: 750,
            w: 20,
            h: 400,
        },
        {
            // down right
            x: 2190,
            y: 1130,
            w: 190,
            h: 20,
        },
        {
            // down left
            x: 1950,
            y: 1130,
            w: 170,
            h: 20,
        },
        
        {
            //table
            x: 2110,
            y: 930,
            w: 110,
            h: 100,
        },
        
    ], [
        {
            //left
            x: 1170,
            y: 1640,
            w: 20,
            h: 300,
        },
        {
            //up
            x: 1170,
            y: 1620,
            w: 340,
            h: 20,
        },
        {
            //left
            x: 1480,
            y: 1640,
            w: 20,
            h: 300,
        },
        {
            //right down
            x: 1380,
            y: 1900,
            w: 200,
            h: 40,
        },
        {
            //left down
            x: 1100,
            y: 1900,
            w: 200,
            h: 40,
        },
        {
            //object
            x: 1200,
            y: 1750,
            w: 80,
            h: 40,
        },
        {
            //object
            x: 1350,
            y: 1640,
            w: 50,
            h: 60,
        },
        {
            //object
            x: 1260,
            y: 1640,
            w: 40,
            h: 60,
        },
        {
            //object
            x: 1370,
            y: 1780,
            w: 60,
            h: 40,
        },
    ], 
    [
        // litl house
        {
            // left
            x: 1490,
            y: 1280,
            w: 20,
            h: 380,   
        },
        {
            // in wall
            x: 1635,
            y: 1280,
            w: 20,
            h: 150,   
        },
        {
            // in wall
            x: 1570,
            y: 1410,
            w: 80,
            h: 25,   
        },
        {
            // in wall
            x: 1570,
            y: 1450,
            w: 60,
            h: 20,   
        },
        {
            // Couch
            x: 1720,
            y: 1400,
            w: 115,
            h: 35,   
        },
        {
            // table
            x: 1770,
            y: 1510,
            w: 50,
            h: 50,   
        },
        {
            // tree
            x: 1640,
            y: 1600,
            w: 20,
            h: 20,   
        },
        {
            // up
            x: 1490,
            y: 1280,
            w: 400,
            h: 50,   
        },
        {
            // down left
            x: 1490,
            y: 1630,
            w: 170,
            h: 20,   
        },
        {
            // down right
            x: 1735,
            y: 1630,
            w: 170,
            h: 20,   
        },
        {
            // right
            x: 1890,
            y: 1280,
            w: 20,
            h: 380,   
        }
    ],
    [
        {
            // wall left
            x: 1830,
            y: 1300,
            w: 20,
            h: 320,   
        },
        {
            // wall right
            x: 2510,
            y: 1300,
            w: 20,
            h: 320,   
        },
        {
            // wall down right
            x: 2050,
            y: 1620,
            w: 485,
            h: 20,   
        },
        {
            // wall room
            x: 2340,
            y: 1430,
            w: 200,
            h: 25,   
        },
        {
            //  dracaufeu
            x: 2100,
            y: 1320,
            w: 300,
            h: 25,   
        },
        {
            //  table
            x: 2090,
            y: 1400,
            w: 50,
            h: 50,   
        },
        {
            //  table
            x: 1890,
            y: 1500,
            w: 50,
            h: 50,   
        },
        {
            //  tree
            x: 2180,
            y: 1565,
            w: 20,
            h: 50,   
        },
        {
            //  down left
            x: 1830,
            y: 1620,
            w: 140,
            h: 20,   
        },
        {
            //  wall room
            x: 2190,
            y: 1300,
            w: 20,
            h: 180,   
        },
        {
            // bed
            x: 2380,
            y: 1320,
            w: 40,
            h: 60,   
        },
        {
            // bed
            x: 2480,
            y: 1450,
            w: 40,
            h: 100,   
        },
        {
            // computeur
            x: 2395,
            y: 1450,
            w: 100,
            h: 45,   
        },
        {
            // wall inside kitchen
            x: 1970,
            y: 1300,
            w: 20,
            h: 100,   
        },
        {
            // wall inside kitchen
            x: 1890,
            y: 1400,
            w: 100,
            h: 20,   
        },
        {
            // wall up
            x: 1830,
            y: 1300,
            w: 700,
            h: 20,   
        }
    ]
];

