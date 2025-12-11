// Make background responsive to mouse movement
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    // Update background gradient based on mouse position with more noticeable changes
    const red = Math.max(100, Math.min(220, 171 + Math.round((x - 50) * 1.5)));
    const orange = Math.max(50, Math.min(200, 255 - Math.round((y - 50) * 1.2)));
    const orangeGreen = Math.max(50, Math.min(150, 102 + Math.round((x - 50) * 0.8)));
    
    document.body.style.backgroundImage = `
        linear-gradient(
            to bottom right,
            rgb(${red}, 0, 0),
            rgb(${orange}, ${orangeGreen}, 0)
        )
    `;
    
    // Calculate brightness of the average background color
    const brightness = (red + orange + orangeGreen) / 3;
    
    // Change title colors based on background brightness
    const titleElements = document.querySelectorAll('.title, page h1, .homepage-link');
    const titleColor = brightness > 150 ? '#7f0000' : '#FFFFFF';
    titleElements.forEach(el => {
        el.style.color = titleColor;
    });
});



