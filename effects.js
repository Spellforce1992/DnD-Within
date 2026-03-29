// ============================================================
// D&D Within — Visual Effects Engine
// Canvas lightning + flame particle management
// ============================================================

// === Lightning Bolt System ===
var LightningSystem = {
    canvas: null,
    ctx: null,
    color: '#22d3ee',
    bolts: [],
    active: false,
    interval: null,
    raf: null,

    init: function(accentColor) {
        this.canvas = document.getElementById('lightning-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.color = accentColor || '#22d3ee';
        this.resize();
        window.addEventListener('resize', this.resize.bind(this));
    },

    resize: function() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },

    start: function(color) {
        if (this.active) return;
        this.active = true;
        this.color = color || this.color;
        this.canvas.style.display = 'block';
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        var self = this;
        // Random strikes
        this.strike(); // immediate first strike
        this.interval = setInterval(function() {
            if (Math.random() < 0.7) self.strike();
        }, 2500 + Math.random() * 2000);

        this.loop();
    },

    stop: function() {
        this.active = false;
        if (this.interval) clearInterval(this.interval);
        if (this.raf) cancelAnimationFrame(this.raf);
        this.bolts = [];
        if (this.canvas) {
            this.canvas.style.display = 'none';
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    },

    // Midpoint displacement algorithm — generates organic forked bolt
    generateBolt: function(x1, y1, x2, y2, displace, depth) {
        if (depth === 0 || displace < 2) {
            return [{ x: x1, y: y1 }, { x: x2, y: y2 }];
        }
        var mx = (x1 + x2) / 2;
        var my = (y1 + y2) / 2;
        var dx = x2 - x1;
        var dy = y2 - y1;
        var len = Math.sqrt(dx * dx + dy * dy);
        if (len === 0) return [{ x: x1, y: y1 }];
        var nx = -dy / len;
        var ny = dx / len;
        var offset = (Math.random() - 0.5) * displace;
        mx += nx * offset;
        my += ny * offset;
        var left = this.generateBolt(x1, y1, mx, my, displace * 0.52, depth - 1);
        var right = this.generateBolt(mx, my, x2, y2, displace * 0.52, depth - 1);
        return left.concat(right.slice(1));
    },

    strike: function() {
        var w = this.canvas.width;
        var h = this.canvas.height;
        // Start from top, random x
        var x1 = w * (0.1 + Math.random() * 0.8);
        var x2 = x1 + (Math.random() - 0.5) * 300;
        var mainPoints = this.generateBolt(x1, 0, x2, h, 120, 7);

        var branches = [];
        for (var i = 0; i < mainPoints.length; i++) {
            if (Math.random() < 0.12 && i > 3) {
                var p = mainPoints[i];
                var bx = p.x + (Math.random() - 0.5) * 250;
                var by = p.y + 60 + Math.random() * 200;
                var branchPts = this.generateBolt(p.x, p.y, bx, by, 50, 4);
                branches.push({ points: branchPts, width: 1.2, alpha: 0.5 });
            }
        }

        this.bolts.push({
            main: { points: mainPoints, width: 2.5, alpha: 1 },
            branches: branches,
            life: 1.0
        });
    },

    drawPath: function(points, width, alpha, life) {
        var ctx = this.ctx;
        if (points.length < 2) return;
        ctx.save();

        // Outer glow
        ctx.globalAlpha = alpha * life * 0.5;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = width + 6;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 30;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (var i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.stroke();

        // Core glow
        ctx.globalAlpha = alpha * life * 0.8;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = width + 2;
        ctx.shadowBlur = 15;
        ctx.stroke();

        // Bright core
        ctx.globalAlpha = alpha * life;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = width * 0.5;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#ffffff';
        ctx.stroke();

        ctx.restore();
    },

    loop: function() {
        if (!this.active) return;
        var ctx = this.ctx;
        var self = this;

        // Fade previous frame
        ctx.fillStyle = 'rgba(0, 0, 0, 0.12)';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        for (var i = this.bolts.length - 1; i >= 0; i--) {
            var bolt = this.bolts[i];
            bolt.life -= 0.025;
            if (bolt.life <= 0) {
                this.bolts.splice(i, 1);
                continue;
            }
            this.drawPath(bolt.main.points, bolt.main.width, bolt.main.alpha, bolt.life);
            for (var j = 0; j < bolt.branches.length; j++) {
                var b = bolt.branches[j];
                this.drawPath(b.points, b.width, b.alpha, bolt.life);
            }
        }

        this.raf = requestAnimationFrame(function() { self.loop(); });
    }
};

// === Flame Particle System (blur+contrast fusion) ===
function createFlameParticles(container, color, count) {
    if (!container) return;
    container.innerHTML = '';
    for (var i = 0; i < (count || 12); i++) {
        var p = document.createElement('div');
        p.className = 'flame-spark';
        var size = 8 + Math.random() * 10;
        var x = (Math.random() - 0.5) * 60;
        var delay = Math.random() * 1.5;
        var dur = 0.8 + Math.random() * 0.8;
        p.style.cssText = 'width:' + size + 'px;height:' + size + 'px;left:calc(50% + ' + x + 'px);animation-delay:' + delay + 's;animation-duration:' + dur + 's;background:' + color + ';';
        container.appendChild(p);
    }
}
