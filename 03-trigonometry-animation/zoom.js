window.onload = function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;
    
    var centerY = height * .5,
        centerX = width * .5,
        baseRadius = 100,
        offset = 50,
        speed = 0.05,
        angle = 0,
        color = 0,
        colorReverse = false,
        baseAlpha = 0.5;
    
    render();
    
    function render() {
        var radius = baseRadius + Math.sin(angle) * offset;
        var alpha = baseAlpha + Math.sin(angle) * offset;
        
        colorLogic();
        
        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
        context.fill();
        context.fillStyle = createRGB(200, 100, color);
        
        angle += speed;
        
        requestAnimationFrame(render);
    }
    
    function colorLogic() {
        if(!colorReverse) {
            color++;
            if(color === 255) {
               colorReverse = true;
            }
        } else {
            color--;
            if(color === 0) {
               colorReverse = false;
            }
        }
    }
    
    function randomColor(max = 255) {
        return Math.floor((0 + max) + 1);
    }
    
    function createRGB(r = null, g = null, b = null) {
        var red = randomColor(r);
        var green = randomColor(g);
        var blue = randomColor(b);
        
        return `rgb(${red},${green}, ${blue})`;
    }
}