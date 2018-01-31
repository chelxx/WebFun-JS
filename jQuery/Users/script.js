$(document).ready(function(){
    console.log ("My script.js is running!");
    
    $('button').click('submit', function () {
        var fName = $('form').find('input[name="first_name"]').val();
        $('table').append('<td>' + fName + '</td>');
        
        var lName = $('form').find('input[name="last_name"]').val();
        $('table').append('<td>' + lName + '</td>');
        
        var eMail = $('form').find('input[name="email"]').val();
        $('table').append('<td>' + eMail + '</td>');
       
        var con = $('form').find('input[name="contact"]').val();
        $('table').append('<td>' + con + '</td>');
    });

});