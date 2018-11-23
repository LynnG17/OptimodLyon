class Deliveries{
    constructor(){
        this.warehouseDisp = {radius: 15, color: "red"};
        this.nodeDisp = {radius: 10, color: "blue"};
        this.warehouse = null;
        this.delNodes = [];
    }

    load(Coord1){
        let object = this;
        let Coord = Coord1;
        $.ajax({
            url: "deliveries/dl-grand-12.xml",
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
            View.update();
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
    }

    drawCircle(X, Y, R, color, ctx){
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.stroke();
    }
};