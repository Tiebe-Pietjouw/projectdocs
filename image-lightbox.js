document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a.image-link');
    if (!link) return;
    
    e.preventDefault();
    
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); display: flex; align-items: center; justify-content: center; z-index: 9999; cursor: pointer;';
    
    const img = document.createElement('img');
    img.src = link.getAttribute('href');
    img.style.cssText = 'max-width: 90%; max-height: 90vh; padding: 20px;';
    
    overlay.appendChild(img);
    document.body.appendChild(overlay);
    
    overlay.onclick = function() {
      overlay.remove();
    };
  });
});
