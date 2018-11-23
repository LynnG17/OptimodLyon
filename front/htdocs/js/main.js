var View = new Viewer();

$( document ).ready(function() {
    console.log( "ready!" );
    View.setupCanvas();
    View.loadMap();
    //View.loadDeliveries();
});
