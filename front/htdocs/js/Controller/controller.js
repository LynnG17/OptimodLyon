class Controller{
    constructor(){
        this.selectedMap = "moyen";
        this.selectedDel = "dl-grand-12"
        this.View;
        this.addingPoint = false;
        this.removePoint = false;
    }

    loadDeliveries(){
        this.View.loadDeliveries(this.selectedDel);
        $("#loadRounds").removeAttr("disabled");
        $("#addDel").removeAttr("disabled");
        this.enableButtons(["#loadRounds", "#addDel", "#rmvDel"]);
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
            this.enableButtons(["#undo", "#redo", "#loadDel", "#loadRounds", "#loadMap", "#rmvDel", "#mapSelector", "#delSelector"]);
            this.addingPoint = false;
            $("#addDel").html("<i class='fas fa-plus'></i>").addClass("btn-warning").removeClass("btn-success");
        }else{
            this.addingPoint = true;
            this.disableButtons(["#undo", "#redo", "#loadDel", "#loadRounds", "#loadMap", "#rmvDel", "#mapSelector", "#delSelector"]);
            $("#addDel").html("<i class='fas fa-check'></i>").addClass("btn-success").removeClass("btn-warning");
        }
    }

    rmvPoint(){
        if(this.removePoint){
            this.removePoint = false;
            this.enableButtons(["#undo", "#redo", "#loadDel", "#loadRounds", "#loadMap", "#addDel", "#mapSelector", "#delSelector"]);
            $("#rmvDel").html("<i class='fas fa-minus'></i>").addClass("btn-warning").removeClass("btn-success");
        }else{
            this.removePoint = true;
            this.disableButtons(["#undo", "#redo", "#loadDel", "#loadRounds", "#loadMap", "#addDel", "#mapSelector", "#delSelector"]);
            $("#rmvDel").html("<i class='fas fa-check'></i>").addClass("btn-success").removeClass("btn-warning");
        }
    }

    disableButtons(list){
        for(var i=0; i<list.length; i++){
            let el = list[i];
            $(el).attr("disabled", true);
        }
    }

    enableButtons(list){
        for(var i=0; i<list.length; i++){
            let el = list[i];
            $(el).removeAttr("disabled");
        }
    }
}
