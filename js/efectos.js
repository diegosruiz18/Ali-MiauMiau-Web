$(document).ready(function(){
    //Efecto menu header
    $('header .contenedor_logo_menu .menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        },1000+(index*500));
    });
    //Efecto titulo header
    if($(window).width()>800){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        },1500);
    }
    //Efecto suavizar scroll
    var caracteristicas=$('#caracteristicas').offset().top;
    $('#btn-caracteristicas').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: caracteristicas-150
        },500);
    });
    var acercaDe=$('#acerca-de').offset().top;
    $('#btn-acerca-de').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe-20
        },500);
    });
    var descargas=$('#descargas').offset().top;
    $('#btn-descargas').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: descargas
        },500);
    });
});