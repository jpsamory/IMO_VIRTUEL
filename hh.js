const illusionBox = document.getElementById('illusionBox');
let darkMode = false;

function toggleIllusion() {
    darkMode = !darkMode;

    if(darkMode) {
        illusionBox.style.background = 'radial-gradient(circle, #ff00aa, #020617)';
    } else {
        illusionBox.style.background = '#020617';
    }
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        card.style.transform = `
            perspective(1000px)
            rotateX(${-y / 18}deg)
            rotateY(${x / 18}deg)
            scale(1.03)
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
});

