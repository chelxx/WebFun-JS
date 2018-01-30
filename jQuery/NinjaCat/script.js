$(document).ready(function(){
    $('img').click(function(){
        $(this).attr('src', $(this).attr('alt-src'));
        console.log ('find alt-src here -', $(this).attr('alt-src'));
    });
});