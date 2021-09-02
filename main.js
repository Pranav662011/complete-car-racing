canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

car_width=100;
car_height=90;
car_x=100;
car_y=100;
car_image="car.png";

car1_width=100;
car1_height=90;
car1_x=100;
car1_y=40;
car1_image="images.png";
background_image="racing.jpg"

function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;

    car_imgtag=new Image();
    car_imgtag.onload=uploadcar;
    car_imgtag.src=car_image;

    car1_imgtag=new Image();
    car1_imgtag.onload=uploadcar1;
    car1_imgtag.src=car1_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgtag, 0,0, canvas.width ,canvas.height);
}
function uploadcar(){
    ctx.drawImage(car_imgtag, car_x,car_y, car_width ,car_height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgtag, car1_x,car1_y, car1_width ,car1_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed=="38"){
        up();
        console.log("up");

    }

    if(keypressed=="40"){
        down();
        console.log("down");
        
    }

    if(keypressed=="37"){
        left();
        console.log("left");
        
    }

    if(keypressed=="39"){
        right();
        console.log("right");
        
    }

    if(keypressed=="87"){
        up1();
        console.log("w");

    }

    if(keypressed=="65"){
        left1();
        console.log("a");

    }

    if(keypressed=="68"){
        right1();
        console.log("d");

    }

    if(keypressed=="83"){
        down1();
        console.log("s");

    }



}

function up(){
if(car_y>=0){
  
    car_y=car_y-10;
    console.log("when up arrow is pressed, x= "+ car_x+" | y= "+car_y);
    uploadBackground();
    uploadcar();
    uploadcar1();
  }
}

function down(){
    if(car_y<=500)
    {
        car_y=car_y+10;
        console.log("when down arrow is pressed, x= "+car_x+" | y= "+car_y);
        uploadBackground();
        uploadcar();
        uploadcar1();
    }
}

function left(){
    if(car_x>=0)
    {
        car_x=car_x-10;
        console.log("when left arrow is pressed, x= "+car_x+" | y= "+car_y);
        uploadBackground();
        uploadcar();
        uploadcar1();
    }
}

function right(){
    if(car_x<=700)
    {
        car_x=car_x+10;
        console.log("when right arrow is pressed, x= "+car_x+" | y= "+car_y);
        uploadBackground();
        uploadcar();
        uploadcar1();
    }  
}






function up1(){
    if(car1_y>=0){
      
        car1_y=car1_y-10;
        console.log("when W key is pressed, x= "+ car1_x+" | y= "+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar();
    }
}

function down1(){
    if(car1_y<=500)
    {
        car1_y=car1_y+10;
        console.log("when s key is pressed, x= "+car1_x+" | y= "+car1_y);
        uploadBackground();
        uploadcar();
        uploadcar1();
    }
}

function left1(){
    if(car1_x>=0)
    {
        car1_x=car1_x-10;
        console.log("when a key is pressed, x= "+car1_x+" | y= "+car1_y);
        uploadBackground();
        uploadcar();
        uploadcar1();
    }
}

function right1(){
    if(car1_x<=700)
    {
        car1_x=car1_x+10;
        console.log("when d key is pressed, x= "+car1_x+" | y= "+car1_y);
        uploadBackground();
        uploadcar();
        uploadcar1();
    }  
}


    
