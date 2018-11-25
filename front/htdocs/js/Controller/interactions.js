function handleScroll(evt){
    let delta = evt.wheelDelta ? evt.wheelDelta/40 : evt.detail ? -evt.detail : 0;
    Ctrl.View.zoom(delta/7);
    return evt.preventDefault() && false;
};

function handleMouseDown(evt){
    let View = Ctrl.View;
    
    let ratio = View.Canvas.ratio;

    document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
    View.lastX = ratio*evt.offsetX;
    View.lastY = ratio*evt.offsetY;
    View.clicked = true;      
}

function handleMouseMove(evt){
    let View = Ctrl.View;
    let ratio = View.Canvas.ratio;

    if(View.clicked){
        View.dragged=true;
    }else{
        View.dragged=false;
    }

    
    if (View.dragged){
        let newX = ratio*evt.offsetX;
        let newY = ratio*evt.offsetY;
        View.deltaX += newX-View.lastX;
        View.deltaY += newY-View.lastY;
        View.update();
        View.lastX = newX;
        View.lastY = newY;
    }
    

    if(Ctrl.addingPoint){
        let nodeId = View.Map.findBestNode(ratio*(evt.offsetX-View.Canvas.html.offsetTop), ratio*(evt.offsetY-View.Canvas.html.offsetLeft));
        View.Map.highlightNode(nodeId, View.Canvas.ctx);
    }
}

function handleMouseUp(evt){
    //console.log(this.tagName);
    let View = Ctrl.View;
    View.clicked=false;
    if(View.dragged){
        View.dragged = false;
    }else{
        if(Ctrl.addingPoint && this.tagName==="CANVAS"){
            let ratio = View.Canvas.ratio;
            var node = View.Map.findBestNode(ratio*(evt.offsetX-View.Canvas.html.offsetTop), ratio*(evt.offsetY-View.Canvas.html.offsetLeft));
            View.Deliveries.addUserNode(View.Map.coord[node]);
            View.update();
        } 
    }
}

window.onresize = function(event) {
    Ctrl.View.setupCanvas();
    Ctrl.View.update();
};

function alertBox(message){
    $("#snoAlertBox").text(message);
    $("#snoAlertBox").fadeIn();
    closeSnoAlertBox();
}

function closeSnoAlertBox(){
    window.setTimeout(function () {
      $("#snoAlertBox").fadeOut(300)
    }, 3000);
} 