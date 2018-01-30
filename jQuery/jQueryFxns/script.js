$(document).ready(function(){
    $(".clickme").click(function(){
        alert("You just clicked me!")
    });

    $(".buttontog").click(function(){
        $(".toggleme").toggle(function(){});
    });

    $(".prepend").click(function() {
        $('.appendme').prepend("<b> THIS IS THE PREPEND! <b>");
    });

    $(".append").click(function() {
        $('.appendme').append("<b> ...AND THIS IS THE APPEND! <b>");
    });
    
});

$("").___(function(){});