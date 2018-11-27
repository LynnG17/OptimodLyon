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

function disableButtons(list){
    for(var i=0; i<list.length; i++){
        let el = list[i];
        $(el).attr("disabled", true);
    }
}

function enableButtons(list){
    for(var i=0; i<list.length; i++){
        let el = list[i];
        $(el).removeAttr("disabled");
    }
}

function showMessage(text){
   $("#snoInfoBox").html(text).show(); 
}

window.onresize = function(event) {
    Ctrl.View.setupCanvas();
    Ctrl.View.update();
};