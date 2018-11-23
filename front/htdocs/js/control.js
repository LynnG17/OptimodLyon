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
