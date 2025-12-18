// Lightbox overlay using Tailwind utility classes
(function(){
  function openLightbox(src, alt) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70';
    overlay.setAttribute('role', 'dialog');

    // Container
    const container = document.createElement('div');
    container.className = 'relative max-w-4xl max-h-[90vh] p-4';

    // Image
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt || '';
    img.className = 'block max-w-full max-h-[80vh] mx-auto rounded shadow-lg';

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'absolute -top-3 -right-3 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:scale-105 transition-transform';
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Close');

    // Append
    container.appendChild(img);
    container.appendChild(closeBtn);
    overlay.appendChild(container);
    document.body.appendChild(overlay);

    // Disable page scroll
    document.documentElement.style.overflow = 'hidden';

    function close() {
      document.documentElement.style.overflow = '';
      overlay.remove();
      document.removeEventListener('keydown', onKey);
    }

    closeBtn.addEventListener('click', close);

    // Close when clicking outside container
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });

    function onKey(e) {
      if (e.key === 'Escape') close();
    }
    document.addEventListener('keydown', onKey);
  }

  // Delegate clicks on anchors that point to Images/ or end with common image extensions
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href) return;
    const isImage = /\.(jpe?g|png|gif|webp|svg)$/i.test(href) || href.includes('Images/');
    if (!isImage) return;

    // Prevent default navigation and open overlay instead
    e.preventDefault();
    openLightbox(href, a.getAttribute('title') || a.getAttribute('alt') || '');
  });
})();
