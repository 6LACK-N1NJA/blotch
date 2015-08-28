(function(){
	
	var Blotch = {
		
		init: function(){
			this.canvas = document.getElementById('canvas');
			this.canvasContext = this.canvas.getContext('2d');
			this.width = this.canvas.width;
			this.height = this.canvas.height;
			
			this.canvas.addEventListener('click', function(evt){
				console.log(eventOffset(evt, 'X'), eventOffset(evt, 'Y'));
			}, false);
			
			this.gradCircle(this.width/2, this.height/2, this.canvasContext);
			this.drowText(this.width/2, this.height/2, 'LALKALOL',  this.canvasContext);
			
		},
		
		gradCircle: function(x, y, ctx){
			ctx.restore();
			ctx.save();
			ctx.translate(x, y);
			ctx.scale(2, 1);
			ctx.beginPath();
			ctx.arc(0, 0, 40, 0, 2*Math.PI);
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 1;
			var radGrad = ctx.createRadialGradient(-40, -40, 100, 20, 30, 40);
			radGrad.addColorStop(0, 'blue');
			radGrad.addColorStop(1, 'red');
			ctx.fillStyle = radGrad;
			ctx.fill();
			ctx.stroke();
		},
		
		drowText: function(x, y, text, ctx){
			ctx.restore();
			ctx.save();
			ctx.translate(x, y);
			ctx.rotate(Math.PI/4);
			var textWidth = ctx.measureText(text).width;
			ctx.textAlign = 'center';
			ctx.fillStyle = '#00CCFF';
			ctx.font = 'italic 70px Arial';
			ctx.fillText(text, 0, 0);
		}
		
	};
	
	Blotch.init();
		
})()
