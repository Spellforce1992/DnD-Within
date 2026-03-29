// ============================================================
// D&D Within — Visual Effects Engine
// ============================================================

// === Lightning System (Level 20) ===
var LightningSystem = {
    canvas: null, ctx: null, color: '#22d3ee',
    bolts: [], active: false, interval: null, raf: null,

    init: function(color) {
        this.canvas = document.getElementById('lightning-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.color = color || '#22d3ee';
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
        var self = this;
        // Less frequent: every 4-8 seconds
        this.interval = setInterval(function() {
            if (Math.random() < 0.5) self.strike();
        }, 4000 + Math.random() * 4000);
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

    generateBolt: function(x1, y1, x2, y2, displace, depth) {
        if (depth === 0 || displace < 2) return [{ x: x1, y: y1 }, { x: x2, y: y2 }];
        var mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
        var dx = x2 - x1, dy = y2 - y1;
        var len = Math.sqrt(dx * dx + dy * dy);
        if (len === 0) return [{ x: x1, y: y1 }];
        var nx = -dy / len, ny = dx / len;
        mx += nx * (Math.random() - 0.5) * displace;
        my += ny * (Math.random() - 0.5) * displace;
        var left = this.generateBolt(x1, y1, mx, my, displace * 0.5, depth - 1);
        var right = this.generateBolt(mx, my, x2, y2, displace * 0.5, depth - 1);
        return left.concat(right.slice(1));
    },

    strike: function() {
        var w = this.canvas.width, h = this.canvas.height;
        // More horizontal bolts — start and end at different sides
        var horizontal = Math.random() < 0.6;
        var x1, y1, x2, y2;
        if (horizontal) {
            // Side to side, shorter
            var side = Math.random() < 0.5;
            x1 = side ? 0 : w;
            y1 = h * (0.1 + Math.random() * 0.6);
            x2 = side ? w * (0.3 + Math.random() * 0.4) : w * (0.3 + Math.random() * 0.3);
            y2 = y1 + (Math.random() - 0.5) * h * 0.3;
        } else {
            x1 = w * (0.15 + Math.random() * 0.7);
            y1 = 0;
            x2 = x1 + (Math.random() - 0.5) * 200;
            y2 = h * (0.4 + Math.random() * 0.4); // Shorter, doesn't reach bottom
        }
        var pts = this.generateBolt(x1, y1, x2, y2, 60, 6); // Smaller displace

        var branches = [];
        for (var i = 0; i < pts.length; i++) {
            if (Math.random() < 0.1 && i > 2) {
                var p = pts[i];
                var bx = p.x + (Math.random() - 0.5) * 150;
                var by = p.y + (Math.random() - 0.5) * 100;
                branches.push({ points: this.generateBolt(p.x, p.y, bx, by, 30, 3), width: 0.8, alpha: 0.4 });
            }
        }

        this.bolts.push({
            main: { points: pts, width: 1.5, alpha: 1 }, // Thinner
            branches: branches,
            life: 1.0
        });
    },

    drawPath: function(points, width, alpha, life) {
        var ctx = this.ctx;
        if (points.length < 2) return;
        ctx.save();
        ctx.globalAlpha = alpha * life * 0.6;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = width + 3;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (var i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y);
        ctx.stroke();

        ctx.globalAlpha = alpha * life;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = width * 0.4;
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#fff';
        ctx.stroke();
        ctx.restore();
    },

    loop: function() {
        if (!this.active) return;
        var ctx = this.ctx;
        var self = this;

        // CLEAR instead of black overlay — no darkening!
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (var i = this.bolts.length - 1; i >= 0; i--) {
            var bolt = this.bolts[i];
            bolt.life -= 0.04; // Faster fade
            if (bolt.life <= 0) { this.bolts.splice(i, 1); continue; }
            this.drawPath(bolt.main.points, bolt.main.width, bolt.main.alpha, bolt.life);
            for (var j = 0; j < bolt.branches.length; j++) {
                this.drawPath(bolt.branches[j].points, bolt.branches[j].width, bolt.branches[j].alpha, bolt.life);
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

// === Class Ambient Particle System ===
var AmbientSystem = {
    canvas: null, ctx: null, particles: [], active: false, raf: null,
    classType: null, color: '#22d3ee',

    init: function(className, color) {
        this.canvas = document.getElementById('ambient-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.classType = className;
        this.color = color || '#22d3ee';
        this.resize();
        window.addEventListener('resize', this.resize.bind(this));
    },

    resize: function() {
        if (!this.canvas) return;
        this.canvas.width = this.canvas.parentElement ? this.canvas.parentElement.offsetWidth : window.innerWidth;
        this.canvas.height = this.canvas.parentElement ? this.canvas.parentElement.offsetHeight : 600;
    },

    start: function() {
        if (this.active) return;
        this.active = true;
        this.canvas.style.display = 'block';
        this.particles = [];
        this.spawnParticles();
        this.loop();
    },

    stop: function() {
        this.active = false;
        if (this.raf) cancelAnimationFrame(this.raf);
        this.particles = [];
        if (this.canvas) {
            this.canvas.style.display = 'none';
        }
    },

    spawnParticles: function() {
        var w = this.canvas.width, h = this.canvas.height;
        var count = 30;

        for (var i = 0; i < count; i++) {
            var p = {
                x: Math.random() * w,
                y: Math.random() * h,
                size: 1 + Math.random() * 3,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: -0.2 - Math.random() * 0.5,
                opacity: 0.1 + Math.random() * 0.4,
                life: Math.random(),
                maxLife: 0.5 + Math.random() * 0.5
            };

            // Class-specific behavior
            if (this.classType === 'sorcerer' || this.classType === 'wizard') {
                // Arcane: floating runes/glyphs — circular motion
                p.angle = Math.random() * Math.PI * 2;
                p.orbitSpeed = 0.005 + Math.random() * 0.01;
                p.orbitRadius = 20 + Math.random() * 40;
                p.centerX = p.x;
                p.centerY = p.y;
                p.type = 'arcane';
                p.size = 2 + Math.random() * 4;
                p.glyphIndex = Math.floor(Math.random() * 6);
            } else if (this.classType === 'druid' || this.classType === 'ranger') {
                // Nature: falling leaves, floating pollen
                p.type = 'nature';
                p.speedY = 0.3 + Math.random() * 0.5;
                p.speedX = (Math.random() - 0.5) * 0.8;
                p.wobble = Math.random() * Math.PI * 2;
                p.wobbleSpeed = 0.02 + Math.random() * 0.03;
                p.rotation = Math.random() * Math.PI * 2;
                p.rotSpeed = (Math.random() - 0.5) * 0.02;
                p.size = 3 + Math.random() * 5;
            } else if (this.classType === 'paladin') {
                // Divine: upward golden motes
                p.type = 'divine';
                p.speedY = -0.3 - Math.random() * 0.6;
                p.size = 1 + Math.random() * 3;
                p.pulse = Math.random() * Math.PI * 2;
                p.pulseSpeed = 0.03 + Math.random() * 0.02;
            } else if (this.classType === 'rogue') {
                // Shadow: dark wisps, drifting smoke
                p.type = 'shadow';
                p.speedX = (Math.random() - 0.5) * 0.4;
                p.speedY = (Math.random() - 0.5) * 0.2;
                p.size = 5 + Math.random() * 10;
                p.opacity = 0.03 + Math.random() * 0.08;
            } else if (this.classType === 'warlock') {
                // Eldritch: sickly green/purple embers rising
                p.type = 'eldritch';
                p.speedY = -0.4 - Math.random() * 0.8;
                p.speedX = (Math.random() - 0.5) * 0.6;
                p.size = 1.5 + Math.random() * 3;
                p.flicker = Math.random() * Math.PI * 2;
            } else if (this.classType === 'fighter') {
                // Steel: tiny sparks
                p.type = 'sparks';
                p.speedX = (Math.random() - 0.5) * 2;
                p.speedY = 0.5 + Math.random() * 1.5;
                p.size = 1 + Math.random() * 1.5;
                p.opacity = 0.3 + Math.random() * 0.5;
                p.maxLife = 0.2 + Math.random() * 0.3;
            } else {
                p.type = 'generic';
            }

            this.particles.push(p);
        }
    },

    drawArcaneGlyph: function(ctx, x, y, size, opacity, glyphIndex) {
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 0.8;
        ctx.translate(x, y);

        var s = size;
        ctx.beginPath();
        if (glyphIndex === 0) {
            // Triangle with inner circle
            ctx.moveTo(0, -s); ctx.lineTo(s * 0.87, s * 0.5); ctx.lineTo(-s * 0.87, s * 0.5); ctx.closePath();
            ctx.stroke();
            ctx.beginPath(); ctx.arc(0, 0, s * 0.35, 0, Math.PI * 2); ctx.stroke();
        } else if (glyphIndex === 1) {
            // Star
            for (var i = 0; i < 5; i++) {
                var a = (i * 72 - 90) * Math.PI / 180;
                var a2 = ((i * 72 + 36) - 90) * Math.PI / 180;
                ctx.lineTo(Math.cos(a) * s, Math.sin(a) * s);
                ctx.lineTo(Math.cos(a2) * s * 0.4, Math.sin(a2) * s * 0.4);
            }
            ctx.closePath(); ctx.stroke();
        } else if (glyphIndex === 2) {
            // Circle with cross
            ctx.arc(0, 0, s, 0, Math.PI * 2); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(0, -s); ctx.lineTo(0, s); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(-s, 0); ctx.lineTo(s, 0); ctx.stroke();
        } else if (glyphIndex === 3) {
            // Diamond
            ctx.moveTo(0, -s); ctx.lineTo(s, 0); ctx.lineTo(0, s); ctx.lineTo(-s, 0); ctx.closePath(); ctx.stroke();
            ctx.beginPath(); ctx.arc(0, 0, s * 0.3, 0, Math.PI * 2); ctx.stroke();
        } else if (glyphIndex === 4) {
            // Crescent
            ctx.arc(0, 0, s, 0.2, Math.PI * 2 - 0.2); ctx.stroke();
            ctx.beginPath(); ctx.arc(s * 0.3, 0, s * 0.75, 0, Math.PI * 2); ctx.stroke();
        } else {
            // Eye shape
            ctx.moveTo(-s, 0);
            ctx.quadraticCurveTo(0, -s, s, 0);
            ctx.quadraticCurveTo(0, s, -s, 0);
            ctx.stroke();
            ctx.beginPath(); ctx.arc(0, 0, s * 0.3, 0, Math.PI * 2); ctx.fill();
        }
        ctx.restore();
    },

    drawLeaf: function(ctx, x, y, size, rotation, opacity) {
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.quadraticCurveTo(size * 0.6, -size * 0.3, 0, size);
        ctx.quadraticCurveTo(-size * 0.6, -size * 0.3, 0, -size);
        ctx.fill();
        // Leaf vein
        ctx.strokeStyle = 'rgba(0,0,0,0.2)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(0, -size * 0.8);
        ctx.lineTo(0, size * 0.8);
        ctx.stroke();
        ctx.restore();
    },

    loop: function() {
        if (!this.active) return;
        var ctx = this.ctx;
        var w = this.canvas.width, h = this.canvas.height;
        var self = this;

        ctx.clearRect(0, 0, w, h);

        for (var i = 0; i < this.particles.length; i++) {
            var p = this.particles[i];
            p.life += 0.003;

            if (p.life > p.maxLife) {
                // Respawn
                p.x = Math.random() * w;
                p.y = p.type === 'nature' ? -10 : (p.type === 'divine' || p.type === 'eldritch') ? h + 10 : Math.random() * h;
                p.life = 0;
                p.opacity = 0.1 + Math.random() * 0.4;
                if (p.type === 'shadow') p.opacity = 0.03 + Math.random() * 0.08;
                continue;
            }

            var fadeIn = Math.min(1, p.life / 0.1);
            var fadeOut = Math.min(1, (p.maxLife - p.life) / 0.1);
            var alpha = p.opacity * fadeIn * fadeOut;

            if (p.type === 'arcane') {
                p.angle += p.orbitSpeed;
                p.x = p.centerX + Math.cos(p.angle) * p.orbitRadius;
                p.y = p.centerY + Math.sin(p.angle) * p.orbitRadius;
                p.centerY -= 0.1;
                if (p.centerY < -20) { p.centerY = h + 20; p.centerX = Math.random() * w; }
                this.drawArcaneGlyph(ctx, p.x, p.y, p.size, alpha, p.glyphIndex);
            } else if (p.type === 'nature') {
                p.wobble += p.wobbleSpeed;
                p.x += p.speedX + Math.sin(p.wobble) * 0.5;
                p.y += p.speedY;
                p.rotation += p.rotSpeed;
                if (p.y > h + 10) { p.y = -10; p.x = Math.random() * w; }
                this.drawLeaf(ctx, p.x, p.y, p.size, p.rotation, alpha);
            } else if (p.type === 'divine') {
                p.pulse += p.pulseSpeed;
                p.y += p.speedY;
                p.x += Math.sin(p.pulse) * 0.3;
                if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
                var pulseSize = p.size * (0.8 + Math.sin(p.pulse) * 0.3);
                ctx.save();
                ctx.globalAlpha = alpha;
                ctx.fillStyle = this.color;
                ctx.shadowColor = this.color;
                ctx.shadowBlur = 8;
                ctx.beginPath();
                ctx.arc(p.x, p.y, pulseSize, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            } else if (p.type === 'shadow') {
                p.x += p.speedX;
                p.y += p.speedY;
                if (p.x < -20 || p.x > w + 20) p.speedX *= -1;
                if (p.y < -20 || p.y > h + 20) p.speedY *= -1;
                ctx.save();
                ctx.globalAlpha = alpha;
                ctx.fillStyle = '#000';
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            } else if (p.type === 'eldritch') {
                p.flicker += 0.05;
                p.y += p.speedY;
                p.x += p.speedX + Math.sin(p.flicker) * 0.5;
                if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
                var flickerAlpha = alpha * (0.5 + Math.sin(p.flicker) * 0.5);
                ctx.save();
                ctx.globalAlpha = flickerAlpha;
                ctx.fillStyle = this.color;
                ctx.shadowColor = this.color;
                ctx.shadowBlur = 6;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            } else if (p.type === 'sparks') {
                p.x += p.speedX;
                p.y += p.speedY;
                p.speedY += 0.02; // gravity
                if (p.y > h) { p.y = h * 0.3; p.x = Math.random() * w; p.speedY = 0.5 + Math.random() * 1.5; }
                ctx.save();
                ctx.globalAlpha = alpha;
                ctx.fillStyle = '#fff';
                ctx.shadowColor = this.color;
                ctx.shadowBlur = 4;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            } else {
                p.x += p.speedX;
                p.y += p.speedY;
                if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
                ctx.save();
                ctx.globalAlpha = alpha;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        this.raf = requestAnimationFrame(function() { self.loop(); });
    }
};
