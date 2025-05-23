document.addEventListener('DOMContentLoaded', function() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');
    
    const ul = document.createElement('ul');
    
    const navItems = [
    { text: 'Home', href: 'index.html' },
    { text: 'About Me', href: 'about.html' },
    { text: 'ITIS3135', href: 'itis3135/index.html' }
    ];
    
    navItems.forEach((item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    ul.appendChild(li);
    });
    
    navbar.appendChild(ul);
    navbarPlaceholder.appendChild(navbar);
    });