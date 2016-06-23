
window.onload = function() {
    var div1 = document.getElementsByClassName('div1')[0];
    var btnChangeWidth = document.getElementsByClassName('change-width')[0];
    var btnChangeHeight = document.getElementsByClassName('change-height')[0];
    var btnChangeColor = document.getElementsByClassName('change-color')[0];
    var btnHide = document.getElementsByClassName('hide')[0];
    var btnReset = document.getElementsByClassName('reset')[0];

    var defaultState = div1.style;

    addEvent(btnChangeWidth, function() {
        changeWidth(div1);
    });
    addEvent(btnChangeHeight, function() {
        changeHeight(div1);
    });
    addEvent(btnChangeColor, function() {
        changeColor(div1);
    });
    addEvent(btnHide, function() {
        hide(div1);
    });
    addEvent(btnReset, function() {
        reset(div1, defaultState);
    });
}


function changeWidth(obj) {
    obj.style.width = 200 + 'px';
}

function changeHeight(obj) {
    obj.style.height = 200 + 'px';
}

function changeColor(obj) {
    obj.style.backgroundColor = 'red';
}

function hide(obj) {
    obj.style.display = 'none';
}

function reset(obj, defaultState) {
    obj.style = defaultState;
}

function addEvent(obj, func) {
    if(obj.addEventListener) {
        obj.addEventListener('click', func);
    }
}
