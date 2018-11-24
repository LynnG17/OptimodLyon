var selectedMap = "grand";
var selectedDel = "dl-grand-12"
var View;
var addingPoint = false;

function loadDeliveries(){
    View.loadDeliveries(selectedDel);
    $("#loadRounds").removeAttr("disabled");
}

$("#mapSelector").on("show.bs.dropdown", function(event){
    var x = $(event.relatedTarget).text(); // Get the text of the element
    console.log(x);
});

window.onresize = function(event) {
    View.setupCanvas();
    View.update();
};

function changeMap(element){
    switch(element.value){
        case "Big":
            console.log("ok1");
            selectedMap = "grand";
            break;
        case "Average":
            console.log("ok2");
            selectedMap = "moyen";
            break;
        case "Small":
            console.log("ok3");
            selectedMap = "petit";
            break;
        default:
            console.log("ok4");
            selectedMap = "grand";
            break;
    }
}

function changeDel(element){
    selectedDel = selectedMap+"-"+element.value;
}

function loadMap(){
    View = new Viewer();
    View.setupCanvas();
    View.loadMap(selectedMap);

    switch(selectedMap){
        case "petit":
            $("#delSelector").html("<option>6</option><option>3</option>");
            selectedDel = selectedMap+"-6";
            break;
        case "moyen":
            $("#delSelector").html("<option>12</option><option>9</option>");
            selectedDel = selectedMap+"-12";
            break;
        case "grand":
            $("#delSelector").html("<option>20</option><option>15</option><option>12</option>");
            selectedDel = selectedMap+"-20";
            break;
    }
}

function addPoint(){
    if(addingPoint){
        addingPoint = false;
        $("#undo").removeAttr("disabled");
        $("#redo").removeAttr("disabled");
    }else{
        addingPoint = true;
        $("#undo").attr("disabled", true);
        $("#redo").attr("disabled", true);
    }
}

