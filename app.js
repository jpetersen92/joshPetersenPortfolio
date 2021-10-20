// mobile menu pop-out ✅
// dark mode toggle


const portApp = {};

portApp.show = () => {
    const barMenuButton = document.querySelector('.mobileNav');
    const nav = document.getElementById('sidebar')
    const hero = document.querySelector('.heroImage');
    barMenuButton.addEventListener('click', () => {
        barMenuButton.classList.toggle('show')
        nav.classList.toggle('show')
        hero.classList.toggle('expandHero')
    })
}

portApp.init = () => {
    console.log('were moving');
    portApp.show();
}

AOS.init();
portApp.init();