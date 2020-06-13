function navToggle() {
    var btn = document.getElementById('menuBtn');
    var nav = document.getElementById('menu');

    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
}

var nav = document.getElementById('site-menu');
var header = document.getElementById('top');

window.addEventListener('scroll', function() {
    if (window.scrollY >=400) { // adjust this value based on site structure and header image height
        nav.classList.add('nav-sticky');
        header.classList.add('pt-scroll');
    } else {
        nav.classList.remove('nav-sticky');
        header.classList.remove('pt-scroll');
    }
});