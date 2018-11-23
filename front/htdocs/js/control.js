function deliveriesB(){
    View.loadDeliveries();
    $("#loadRounds").removeAttr("disabled");
}

function loadMapB(){
    var x = $(event.relatedTarget).text(); 
    //View.loadMap("");
}

$("#mapSelector").on("show.bs.dropdown", function(event){
    var x = $(event.relatedTarget).text(); // Get the text of the element
    console.log(x);
});

window.onresize = function(event) {
    View.setupCanvas();
    View.update();
};

$("#map").get(0).addEventListener('mousedown',function(evt){
    document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
    View.lastX = evt.offsetX;
    View.lastY = evt.offsetY;
    View.dragged = true;
},false);

$("#map").get(0).addEventListener('mousemove',function(evt){
    console.log("ok");
    let newX = evt.offsetX;
    let newY = evt.offsetY;
    if (View.dragged){
        View.deltaX += newX-View.lastX;
        View.deltaY += newY-View.lastY;
      View.update();
    }
    View.lastX = newX;
    View.lastY = newY;
},false);

$("body").get(0).addEventListener('mouseup',function(evt){
    View.dragged = false;
},false);