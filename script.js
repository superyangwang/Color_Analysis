// year and mobile menu toggle; active tab persistence in localStorage
document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primary-nav');
menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    primaryNav.classList.toggle('nav-open');
});

// active tab persistence
const tabs = document.querySelectorAll('.tab');
const ACTIVE_KEY = 'color-site-active-tab';

// restore active tab on load
const saved = localStorage.getItem(ACTIVE_KEY);
if (saved) {
    tabs.forEach(t => {
        t.classList.toggle('active', t.dataset.tab === saved);
        if (t.dataset.tab === saved) t.setAttribute('aria-current', 'page');
        else t.removeAttribute('aria-current');
    });
}

// click handler saves active tab
tabs.forEach(t => {
    t.addEventListener('click', (e) => {
        const tabName = t.dataset.tab;
        localStorage.setItem(ACTIVE_KEY, tabName);
        tabs.forEach(x => {
            x.classList.toggle('active', x === t);
            if (x === t) x.setAttribute('aria-current', 'page'); else x.removeAttribute('aria-current');
        });
        // allow normal navigation to continue (links are real)
    });
});