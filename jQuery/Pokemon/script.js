$(document).ready(function(){ //So nostalgic...
    for (var i = 1; i < 152; i++){
        $('#pokemon').append("<img src='http://pokeapi.co/media/img/" + i + ".png'>")
    }

    $('#pokemon').click(function(){
        // alert('You touched a cute pokemon!');
        $.get('https://pokeapi.co/api/v2/pokemon/' + , function(res) {
            console.log (res);
        }, 'json');
    });
});