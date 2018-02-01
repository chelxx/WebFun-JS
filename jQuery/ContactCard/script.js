$(document).ready(function(){
    console.log ("My script.js is running!");
    
    $('button').click('submit', function () {
        var fName = $('form').find('input[name="firstname"]').val();
        var lName = $('form').find('input[name="lastname"]').val();


        $('div#table').append('<table><th class="flname">' + fName + " " + lName + '</th></table>').css("font-size", "50px").css("border", "5ox solid lavender");
    }); 
    $(document).on("click", ".flname", function(){
        alert('you wanna see the other side?');
        var descrip = $('form').find('textarea[name="description"]').val();
        $('div#table').append('<table><th class="flname">' + descrip + '</th></table>');

        $(this).hide('.flname').append('<table><th class="flname">' + descrip + '</th></table>');
    });
});