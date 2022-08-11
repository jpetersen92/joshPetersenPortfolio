// mobile menu pop-out ✅
// dark mode toggle


const portApp = {};

portApp.loader = () => {
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loader');
        loader.classList.add('loaderFinish')
    })
}

portApp.show = () => {
    const barMenuButton = document.querySelector('.mobileNav');
    const nav = document.getElementById('sidebar');
    barMenuButton.addEventListener('click', () => {
        barMenuButton.classList.toggle('show');
        nav.classList.toggle('show');
    })
}

portApp.darkSwitch = () => {
    const checkbox = document.querySelector('input[name=darkMode]');
    const body = document.querySelector('body');
    const liteLogo = document.getElementById('liteLogo');
    const darkLogo = document.getElementById('darkLogo');
    const eventsLite = document.getElementById('eventsLite');
    const eventsDark = document.getElementById('eventsDark');
    checkbox.addEventListener('change', function() {
        body.classList.toggle('darkMode');
        liteLogo.classList.toggle('darkHide');
        darkLogo.classList.toggle('darkHide');
        eventsLite.classList.toggle('darkHide');
        eventsDark.classList.toggle('darkHide');
    })

};

portApp.init = () => {
    portApp.loader();
    portApp.darkSwitch();
    portApp.show();
}

AOS.init();
portApp.init();