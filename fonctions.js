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
