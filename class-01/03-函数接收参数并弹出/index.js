window.onload = function() {
    var city = document.getElementsByClassName('city')[0];
    var district = document.getElementsByClassName('district')[0];
    var btn = document.getElementsByClassName('btn')[0];

    btn.addEventListener('click', function() {
        myFun(city.value, district.value);
    })
}

function myFun(city, district) {
    alert(city);
    alert(district);
}
