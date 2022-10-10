// Aparecer navbar a parti de 100px de scroll 
var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});

// Resetar o navbar (no mobile) toda vez que clicar num link do navbar
$('.navbar-nav li a').click(function (){
        $('.navbar-collapse').collapse('hide');
});

