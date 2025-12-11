// Add startup animations to elements when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Animate main container
    const container = document.querySelector('.container');
    if (container) {
        container.classList.add('animate-container');
    }
    
    // Animate title
    const title = document.querySelector('.title');
    if (title) {
        title.classList.add('animate-title');
    }
    
    // Animate buttons with staggered effect
    const buttons = document.querySelectorAll('.button-grid .button');
    buttons.forEach((btn, index) => {
        btn.classList.add('animate-button');
        // Apply individual animation delay
        btn.style.animationDelay = (0.1 + index * 0.1) + 's';
    });
    
    // Animate page titles in week pages
    const pageTitle = document.querySelector('page h1');
    if (pageTitle) {
        pageTitle.classList.add('animate-page-title');
    }
    
    // Animate content boxes
    const contentBox = document.querySelector('.kader');
    if (contentBox) {
        contentBox.classList.add('animate-content');
    }
});

