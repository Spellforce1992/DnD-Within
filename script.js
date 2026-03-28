// Floating particles
(function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    // Read accent color from CSS variable
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#22d3ee';

    // Generate lighter and darker variants
    const colors = [accent, accent + 'cc', accent + '88'];

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 4 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        Object.assign(particle.style, {
            width: size + 'px',
            height: size + 'px',
            background: color,
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 8 + 's',
            animationDuration: (Math.random() * 6 + 5) + 's',
            boxShadow: '0 0 ' + (size * 3) + 'px ' + color
        });
        container.appendChild(particle);
    }
})();
