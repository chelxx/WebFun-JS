$(document).ready(function(){ //So nostalgic...
    for (var i = 1; i < 152; i++){
        $('#pokemon').append("<img id= '" + i + "' src='http://pokeapi.co/media/img/" + i + ".png'>");
        console.log ("<img id= '" + i + "' src='http://pokeapi.co/media/img/" + i + ".png'>");
    }

    $('img').click(function(){
        var id = this.id;
        $.get('https://pokeapi.co/api/v2/pokemon/' + id, function(res) {
            var html_str = "";
            html_str += "<h1>" + res.name + "</h1>";
            html_str += "<img src='http://pokeapi.co/media/img/" + id + ".png'><hr>";
            html_str += "<h4>Height:</h1>";
            html_str += "<h4>" + res.height + "</h4><hr>";
            html_str += "<h4>Weight:</h4>";
            html_str += "<h4>" + res.weight + "</h4><hr>";
            html_str += "<h4>Types:</h4>";
            for(var i = 0; i < res.types.length; i++) {
                html_str += "<p> *~* " + res.types[i].type.name + " *~*</p>";
            }
            $('div#dex').html(html_str);
            console.log (res);
        }, 'json');
    });
});