$(document).ready(function(){
    $('img').click(function(){
        $(this).hide();
    });
    $('button').click(function(){
        location.reload();
    });
});