class Deliveries{
    constructor(){
        this.warehouseDisp = {radius: 15, color: "red"};
        this.nodeDisp = {radius: 10, color: "blue"};
        this.userNodeDisp = {radius: 10, color: "green"};
        this.warehouse = null;
        this.delNodes = [];
        this.userDelNodes = [];
    }

    load(Coord1, delFile1){
        let object = this;
        let Coord = Coord1;
        let delFile = delFile1;
        $.ajax({
            url: "deliveries/dl-"+delFile+".xml",
            type:"GET"
        }).done(function( xmlDoc ) {
            var del = xmlDoc.getElementsByTagName("demandeDeLivraisons")[0].childNodes;
            for(var i = 0; i < del.length; i++){
                let el = del[i];
                if(el.tagName === "entrepot"){
                    object.warehouse = Coord[el.getAttribute("adresse")];;       
                }else if(el.tagName === "livraison"){
                    let node = Coord[el.getAttribute("adresse")];
                    object.delNodes.push(node);  
                }
            }
            Ctrl.View.update();
        }).fail(function(){
            console.log("Delivery file not loaded !");
        });        
    }

    display(ctx, View){
        let node = this.warehouse;
        this.drawCircle(View.norm(node.long, true), View.norm(node.lat, false), this.warehouseDisp.radius, this.warehouseDisp.color, ctx);
        for(var i = 0; i < this.delNodes.length; i++){
            let node = this.delNodes[i];
            this.drawCircle(View.norm(node.long, true), View.norm(node.lat, false), this.nodeDisp.radius, this.nodeDisp.color, ctx);
        }
        for(var i = 0; i < this.userDelNodes.length; i++){
            let node = this.userDelNodes[i];
            this.drawCircle(View.norm(node.long, true), View.norm(node.lat, false), this.userNodeDisp.radius, this.userNodeDisp.color, ctx);
        }
    }

    drawCircle(X, Y, R, color, ctx){
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.stroke();
    }

    addUserNode(node){
        let good = true;
        for(var i=0; i<this.delNodes.length; i++){
            let node1 = this.delNodes[i];
            if(node.lat === node1.lat && node.long === node1.long){
                good=false;
            }
        }
        for(var i=0; i<this.userDelNodes.length; i++){
            let node1 = this.userDelNodes[i];         
            if(node.lat === node1.lat && node.long === node1.long){
                good=false;
            }   
        }
        if(good){
            this.userDelNodes.push(node);
        }else{
            alertBox("Point already on map !");
        }
    }

};