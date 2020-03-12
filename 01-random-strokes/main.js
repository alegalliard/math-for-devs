window.onload = function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;
    
    var randomColor = function(max = 255) {
        return Math.floor(Math.random() * (0 + max) + 1);
    }
    
    for(var i = 0; i < 100; i += 1) {
        var red = randomColor(100);
        var green = randomColor();
        var blue = randomColor();
        
        context.beginPath();
        context.moveTo(Math.random() * width, Math.random() * height);
        context.lineTo(Math.random() * width, Math.random() * height);
        context.strokeStyle = `rgb(${red},${green}, ${blue})`;
        context.stroke();
    }
};`