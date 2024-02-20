function toggleMenu() {
    var menu = document.querySelector('.menu');
    if (menu.classList.contains('hidden-menu')) {
        menu.classList.remove('hidden-menu');
    } else {
        menu.classList.add('hidden-menu');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
});

$(document).ready(function(){
    $('.slider').slider();
});