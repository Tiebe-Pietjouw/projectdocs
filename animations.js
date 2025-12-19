document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    if (container) {
        container.classList.add('animate-container');
    }
    
    const title = document.querySelector('.title');
    if (title) {
        title.classList.add('animate-title');
    }
    
    const buttons = document.querySelectorAll('.button-grid .button');
    buttons.forEach((btn, index) => {
        btn.classList.add('animate-button');
        btn.style.animationDelay = (0.1 + index * 0.1) + 's';
    });
  
    const pageTitle = document.querySelector('page h1');
    if (pageTitle) {
        pageTitle.classList.add('animate-page-title');
    }
    
    const contentBox = document.querySelector('.kader');
    if (contentBox) {
        contentBox.classList.add('animate-content');
    }
});

