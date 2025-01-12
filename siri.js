document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Add background elements
    const backgroundElements = document.getElementById('backgroundElements');
    const icons = ['sun', 'star'];
    
    for (let i = 0; i < 30; i++) {
        const div = document.createElement('div');
        div.className = 'floating-icon';
        div.style.left = `${Math.random() * 100}%`;
        div.style.top = `${Math.random() * 100}%`;
        div.style.animationDelay = `${Math.random() * 8}s`;
        div.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        const icon = document.createElement('i');
        icon.setAttribute('data-lucide', icons[i % 2]);
        icon.style.width = `${Math.random() * (i % 2 ? 20 : 30) + (i % 2 ? 15 : 20)}px`;
        icon.style.height = icon.style.width;
        
        div.appendChild(icon);
        backgroundElements.appendChild(div);
    }
    lucide.createIcons();

    // Create star rays
    const starRays = document.getElementById('starRays');
    for (let i = 0; i < 8; i++) {
        const ray = document.createElement('div');
        ray.className = 'star-ray';
        ray.style.transform = `translate(-50%, -50%) rotate(${i * 45}deg)`;
        starRays.appendChild(ray);
    }

    // Add load animation
    const mainContent = document.querySelector('.main-content');
    mainContent.classList.add('hidden');
    
    // Remove hidden class after a small delay
    setTimeout(() => {
        mainContent.classList.remove('hidden');
    }, 100);
});