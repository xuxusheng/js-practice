window.onload = function() {

    var propertyName = document.getElementsByClassName("property-name")[0];
    var propertyValue = document.getElementsByClassName("property-value")[0];
    var box = document.getElementsByClassName("box")[0];

    var confirm = document.getElementsByClassName("confirm")[0];
    var reset = document.getElementsByClassName("reset")[0];

    // save the default status
    var defaultStatus = box.style;

    // confirm
    confirm.addEventListener('click', function() {
        var name = propertyName.value;
        var value = propertyValue.value;

        box.style[name] = value;
    })

    // reset
    reset.addEventListener('click', function() {
        box.style = defaultStatus;
    })
}
