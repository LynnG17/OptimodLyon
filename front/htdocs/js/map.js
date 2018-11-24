class Map{
    constructor() {
        this.coord = new Object();
        this.sections = null;
        this.latRange = 0;
        this.longRange = 0;
    }
    
    load(mapFile1){
        let object = this;
        let mapFile = mapFile1;
        $.ajax({
            url: "maps/"+mapFile+"Plan.xml",
            type:"GET"
        }).done(function( xmlDoc ) {
            var nodes = xmlDoc.getElementsByTagName("noeud");
            object.sections = xmlDoc.getElementsByTagName("troncon");

            //Init variable containing lattitude and longitude range
            let latRange = [Number.MAX_VALUE, Number.MIN_VALUE];
            let longRange = [Number.MAX_VALUE, Number.MIN_VALUE];

            //Filling hash table of nodes and lat/long ranges
            for(var i = 0; i < nodes.length; i++){
                var lat = nodes[i].getAttribute('latitude');
                var long = nodes[i].getAttribute('longitude');
                var id = nodes[i].getAttribute('id');
                var tab = {lat, long};
                object.coord[id] = tab;      
                if(latRange[0]>lat) latRange[0]=lat;
                if(latRange[1]<lat) latRange[1]=lat;
                if(longRange[0]>long) longRange[0]=long;
                if(longRange[1]<long) longRange[1] =long;
            }

            object.latRange = latRange;
            object.longRange = longRange;

            View.update();
        });
    }

    display(ctx, view){
        ctx.beginPath();
        //normalize and draw
        //console.log(view);
        //console.log(this);
        for(var i = 0; i < this.sections.length; i++){
            let start = this.coord[this.sections[i].getAttribute('origine')];
            let end = this.coord[this.sections[i].getAttribute('destination')];
            //var name = sections[i].getAttribute('nomRue');
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            //ctx.fillText("Hello World",end.,50);
            //console.log(this.distance(start, end));

            ctx.moveTo(view.norm(start.long, true),view.norm(start.lat, false));
            ctx.lineTo(view.norm(end.long, true),view.norm(end.lat, false));
        }
        ctx.stroke();
    }

    highlightNode(id, ctx){
        View.update();
        let node = this.coord[id];
        this.drawCircle(View.norm(node.long, true), View.norm(node.lat, false), 15, "yellow", ctx);
    }

    findBestNode(X,Y){
        let bestNode;
        let bestDistance = Number.MAX_VALUE;
        for (var prop in View.Map.coord) {
            let node = this.coord[prop];
            let temp = this.distance(X,Y, View.norm(node.long, true), View.norm(node.lat, false));
            if(temp<bestDistance){
                bestDistance = temp;
                bestNode = prop;
            }
        }
        return bestNode;
    }

    distance(Xa, Ya, Xb, Yb){
        let tempLat = Yb-Ya;
        let tempLong = Xb-Xa;
        let temp = tempLat*tempLat + tempLong*tempLong;
        return Math.sqrt(temp);
    }

    drawCircle(X, Y, R, color, ctx){
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.stroke();
    }
}