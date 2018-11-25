class Controller{
    constructor(){
        this.selectedMap = "grand";
        this.selectedDel = "dl-grand-12"
        this.View;
        this.addingPoint = false;
    }

    loadDeliveries(){
        this.View.loadDeliveries(this.selectedDel);
        $("#loadRounds").removeAttr("disabled");
        $("#addDel").removeAttr("disabled");
    }

    loadRound(){
        this.View.loadRound();
    }

    changeMap(element){
        switch(element.value){
            case "Big":
                console.log("ok1");
                this.selectedMap = "grand";
                break;
            case "Average":
                console.log("ok2");
                this.selectedMap = "moyen";
                break;
            case "Small":
                console.log("ok3");
                this.selectedMap = "petit";
                break;
            default:
                console.log("ok4");
                this.selectedMap = "grand";
                break;
        }
    }

    changeDel(element){
        this.selectedDel = this.selectedMap+"-"+element.value;
    }

    loadMap(){
        this.View = new Viewer();
        this.View.setupCanvas();
        this.View.loadMap(this.selectedMap);

        switch(this.selectedMap){
            case "petit":
                $("#delSelector").html("<option>6</option><option>3</option>");
                this.selectedDel = this.selectedMap + "-6";
                break;
            case "moyen":
                $("#delSelector").html("<option>12</option><option>9</option>");
                this.selectedDel = this.selectedMap + "-12";
                break;
            case "grand":
                $("#delSelector").html("<option>20</option><option>15</option><option>12</option>");
                this.selectedDel = this.selectedMap + "-20";
                break;
        }
    }

    addPoint(){
        if(this.addingPoint){
            this.addingPoint = false;
            $("#undo").removeAttr("disabled");
            $("#redo").removeAttr("disabled");
            $("#loadRounds").removeAttr("disabled");
            $("#loadMap").removeAttr("disabled");
            $("#loadDel").removeAttr("disabled");

            $("#addDel").text("Add delivery stop").addClass("btn-warning").removeClass("btn-success");
        }else{
            this.addingPoint = true;
            $("#undo").attr("disabled", true);
            $("#redo").attr("disabled", true);
            $("#loadDel").attr("disabled", true);
            $("#loadRounds").attr("disabled", true);
            $("#loadMap").attr("disabled", true);

            $("#addDel").text("Valider").addClass("btn-success").removeClass("btn-warning");
        }
    }
}
