function growTulips() {
    const tulips = document.querySelectorAll('.tulip');
    tulips.forEach(tulip => {
        tulip.style.transform = 'scale(1.5)';  // Los tulipanes "crecen"
    });
}
