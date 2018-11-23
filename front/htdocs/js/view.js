class Viewer{
    constructor(){
        this.Map = null;
        this.Deliveries = null;
        this.Round = null;
        this.Canvas = {
            html:null,
            ctx:null,
            width:0,
            height:0,
            range:null
        };
        this.zoomLevel = 1;

        this.deltaX =0;
        this.deltaY=0;
        this.lastX; this.lastY;
        this.dragged = false;
    }

    loadMap(){
        this.Map = new Map();
        this.Map.load();
    }

    loadDeliveries(){
        this.Deliveries = new Deliveries();
        this.Deliveries.load(this.Map.coord);
    }

    loadRound(){
        this.Round = new Round();
        this.Round.load(this.Map.coord);
    }

    update(){
        this.Canvas.ctx.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
        this.Map.display(this.Canvas.ctx, this);
        if(this.Deliveries != null){
            this.Deliveries.display(this.Canvas.ctx, this);
        }
        if(this.Round != null){
            this.Round.display(this.Canvas.ctx, this);
        }
    }

    setupCanvas(){
        let width = $("#mapCol").width();
        let height = $("#mapCol").height();
    
        let ratio = this.getRetinaRatio()
        let scaledWidth = width * ratio
        let scaledHeight = height * ratio
    
        d3.select('#map')
            .attr('width', scaledWidth)
            .attr('id', "map")
            .attr('height', scaledHeight)
            .style('width', width + 'px')
            .style('height', height + 'px')
    
        var canvas = $("#map").get(0);
        this.Canvas.ctx = canvas.getContext("2d");
        this.Canvas.range = [0,canvas.height];
        this.Canvas.width = canvas.width;
        this.Canvas.height = canvas.height;
        this.Canvas.html = canvas;
    
        this.panSetup(canvas);
        this.zoomSetup(canvas);
    }

    getRetinaRatio() {
        var devicePixelRatio = window.devicePixelRatio || 1
        var c = document.createElement('canvas').getContext('2d')
        var backingStoreRatio = [
            c.webkitBackingStorePixelRatio,
            c.mozBackingStorePixelRatio,
            c.msBackingStorePixelRatio,
            c.oBackingStorePixelRatio,
            c.backingStorePixelRatio,
            1
        ].reduce(function(a, b) { return a || b })
    
        return devicePixelRatio / backingStoreRatio
    }

    norm(value, state){
        if(state){
            var temp = (value-this.Map.longRange[0])/(this.Map.longRange[1]-this.Map.longRange[0]);
        }else{
            //vertical
            var temp = (value-this.Map.latRange[0])/(this.Map.latRange[1]-this.Map.latRange[0]);
        }
        var canvas = $("#map").get(0);
        
        temp = this.Canvas.range[0]+(this.Canvas.range[1]-this.Canvas.range[0])*temp;
        temp = this.zoomLevel*temp;
        if(state){
            //horizontal
            return temp+this.deltaX;
        }else{
            //vertical
            return canvas.height-temp+this.deltaY;
        }
    }

    zoom(rate){
        console.log(rate);
        var temp = this.zoomLevel + rate;
        if(temp>0.8 && temp<3){
            console.log("hey");
            this.zoomLevel = temp;
            this.update();
            if(rate>0){
                //this.deltaX += (this.Canvas.range[1]/2)*(rate-1);
            }else{
                
            }
        }
    }

    panSetup(canvas){
        canvas.addEventListener('mousedown',function(evt){
            document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
            View.lastX = evt.offsetX;
            View.lastY = evt.offsetY;
            View.dragged = true;
        },false);
    
        canvas.addEventListener('mousemove',function(evt){
            console.log("ok");
            let newX = evt.offsetX;
            let newY = evt.offsetY;
            if (View.dragged){
                View.deltaX += newX-View.lastX;
                View.deltaY += newY-View.lastY;
              View.update();
            }
            View.lastX = newX;
            View.lastY = newY;
        },false);
    
        $("body").get(0).addEventListener('mouseup',function(evt){
            View.dragged = false;
        },false);
    }

    zoomSetup(canvas){
        var handleScroll = function(evt){
            var delta = evt.wheelDelta ? evt.wheelDelta/40 : evt.detail ? -evt.detail : 0;
            View.zoom(delta/7);
            return evt.preventDefault() && false;
        };

        canvas.addEventListener('DOMMouseScroll',handleScroll,false);
        canvas.addEventListener('mousewheel',handleScroll,false);
    }
}