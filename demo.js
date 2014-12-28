(function(){
    var PARTICLE_SIZE = 10;
    var GRAVITY = 1.03;
    var FADE = 0.9;

    var drawParticle = function(p) {
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(p.x, p.y, p.w, p.h);
    };

    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    var Particle = {
        x: 0,
        y: 0,
        w: 10,
        h: 10,
        color: '#FFF'
    };

    var p = Particle;

    p.x = this.canvas.width / 2 - PARTICLE_SIZE / 2;
    p.y = this.canvas.height / 2 - PARTICLE_SIZE / 2;
    p.w = PARTICLE_SIZE;
    p.h = PARTICLE_SIZE;
    p.color = '#FFF';

    var gameLoop = function() {
        this.ctx.clearRect (0 ,0, this.canvas.width, this.canvas.height);
        drawParticle(p);
        p.y -= 5;
        p.y *= GRAVITY;
        p.w *= FADE;
        p.h *= FADE;
    };

    setInterval(gameLoop, 33);

})();
