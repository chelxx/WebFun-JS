$(document).ready(function() {
    $('button').click('submit', function() {
        var loc = $('form').find('input[name="location"]').val();
        $.get('http://api.openweathermap.org/data/2.5/weather?q='+loc+'&APPID=f807c5ca4818d9e403ea91a1856a709f', function(res) {
            var html_str = "";
            var temp = Math.trunc(res.main.temp*9/5-459.67);
            html_str += "<h1>" + res.name + "</h1>";
            html_str += "<h2>" + temp + " &#x2109;</h2>";
            $('div#input').html(html_str);
            console.log (res);
        }, 'json');
        return false;
    });
});
