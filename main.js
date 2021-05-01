var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var width = screen.width
new_width = screen.width - 70
new_height = screen.height - 300
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;

if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}


canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    //Addictonal Activity start
    colour = document.getElementById("colour").value;
    widthofline = document.getElementById("widthofline").value;
    //Addictonal Activity ends
    last_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;


}



canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    colour = document.getElementById("colour").value;
    widthofline = document.getElementById("widthofline").value;


    mousevent = "mousedown"
}


canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mousevent = "mouseleave"
}


canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mousevent = "mouseup";
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;



    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();


    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}



function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;


    if (mousevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = widthofline;


        console.log("Last position of x and y coordinates=");
        console.log("x =" + lastpositionX + "y =" + lastpositionY);
        ctx.moveTo(lastpositionX, lastpositionY);











        console.log("Current position of x and y coordinates=");
        console.log("x =" + current_position_of_mouse_x + "y =" + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }


    lastpositionX = current_position_of_mouse_x;
    lastpositionY = current_position_of_mouse_y;

}