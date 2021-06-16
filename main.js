var canvas= new fabric.Canvas("myCanvas");
blockwidth= 30;
blockheight= 30;
playerx= 10;
playery= 10;
var playerobject= "";

function player_update(){
    fabric.Image.fromURL("player.png",function(img)
    {
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: playery,
            left:playerx
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.image.fromURL(get_image,function(img)
   {
       block_image_object= Img;
       block_image_object.scaleToWidth(blockwidth);
        block_image_object.scaleToHeight(blockheight);
        block_image_object.set({
            top: playery,
            left:playerx
        });
        canvas.add(block_image_object);
    });
   }