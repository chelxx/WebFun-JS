$(document).ready(function(){
    $("#alertbutton").click(function(){
        alert("Then I'll give you an alert!")
    })
    $("#toggletitles").click(function(){
        $('h1').toggle();
    })
    $('#take').click(function(){
        $('div#pets').fadeOut("slow", function(){});
    });
    $('#give').click(function(){
        $('div#pets').fadeIn("slow", function(){});
    });
    $('#up').click(function(){
        $('p.slide').hide();
    });
    $('#down').click(function(){
        $('p').show();
    });
    $("#add").click(function(){
        $( "h1.red" ).addClass(function( index, currentClass ) {
            var addedClass;
            if ( currentClass === "red" ) {
            addedClass = "purple";
            $( "h1.red" ).html( "I received an additional class, that's why I changed!" );
            }
            return addedClass;
        });
    });
    $('#append').click(function(){
        $('p.pendtext').append("<b>THIS IS THE APPEND!</b>").css("color", "skyblue");;
    });
    $('#prepend').click(function(){
        $('p.pendtext').prepend("<b>THIS IS THE PREPEND!</b>").css("color", "orange");
    });
    $('#html').click(function(){
        $( "div#test" ).html( "<b><h1>Mwahahaha! I changed your HTML document!<h1></b>");
    });
    $('#text').click(function(){
        $( "div#test" ).text( "<b><h1>Mwahahaha! I changed your HTML document!<h1></b>");
    });
});