var body;

window.onload = function() {
    body = document.getElementsByTagName('body')[0];
}


function changeSkin(skin) {
    body.setAttribute('class', skin);
}
