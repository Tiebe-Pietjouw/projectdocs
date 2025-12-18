document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    const shadowX = (x - 50) / 10; 
    const shadowY = (y - 50) / 10; 
    
    const titleElements = document.querySelectorAll('.title');
    titleElements.forEach(el => {
        el.style.color = '#FFFFFF';
        el.style.textShadow = `${shadowX}px ${shadowY}px 4px rgba(0, 0, 0, 0.7)`;
    });
    const otherElements = document.querySelectorAll('page h1, .homepage-link');
    otherElements.forEach(el => {
        el.style.color = '#7f0000';
        el.style.textShadow = `${shadowX}px ${shadowY}px 4px rgba(255, 255, 255, 1)`;
    });
});


window.addEventListener('DOMContentLoaded', () => {
    const wrap = document.createElement('div');
    wrap.className = 'scroll-buttons';

    const toBottom = document.createElement('button');
    toBottom.className = 'scroll-btn';
    toBottom.textContent = '↓';
    toBottom.addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    const toTop = document.createElement('button');
    toTop.className = 'scroll-btn';
    toTop.textContent = '↑';
    toTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    wrap.appendChild(toTop);
    wrap.appendChild(toBottom);
    document.body.appendChild(wrap);
});
