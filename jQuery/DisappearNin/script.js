$(document).ready(function(){
    $('img').click(function(){
        $(this).css('opacity', '0');
    });
    $('button').click(function(){
        location.reload();
    });
});