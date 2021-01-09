canvas = new fabric.Canvas('myCanvas')
block_img_width = 30;
block_img_height = 30;
playerX = 10;
playerY = 10;
playerObjects = "";
blockImageObjects = "";

function player_update() {
    fabric.Image.fromURL("iron man.png", function(Img) {
        playerObjects = Img;
        playerObjects.scaleToWidth(150);
        playerObjects.scaleToHeight(140);
        playerObjects.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObjects);
    });
}

function new_IMAGE(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        blockImageObjects = Img;
        blockImageObjects.scaleToWidth(block_img_width);
        blockImageObjects.scaleToHeight(block_img_height);
        blockImageObjects.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockImageObjects);
    });
}