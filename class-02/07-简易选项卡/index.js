window.onload = function() {
    var headList = document.getElementsByClassName("head-list");
    var tabList = document.getElementsByClassName("tab-list");

    for (var i=0; i<headList.length; i++) {
        headList[i].addEventListener('mouseover', function(i) {
            return function() {
                removeClass(headList, 'active');
                removeClass(tabList, 'active');
                addClass(headList[i], 'active');
                addClass(tabList[i], 'active');
            }
        }(i))
    }
}

// 判断当前对象是否存在相应的class
function hasClass(obj, value) {
    var reg = new RegExp('(\\s|^)' + value + '(\\s|$)');
    return obj.className.match(reg);
}

// 给当前的对象或对象数组添加相应的class
function addClass(obj, value) {
    if(obj.length) {
        for( var i=0; i<obj.length; i++) {
            if (!hasClass(obj[i],value)) {
                obj[i].className += " " + value;
            }
        }
    } else {
        if (!hasClass(obj,value)) {
            obj.className += " " + value;
        }
    }


}

// 移除当前的对象或对象数组相应的class
function removeClass(obj, value) {
    if(obj.length) {
        for(var i=0; i<obj.length; i++) {
            if (hasClass(obj[i],value)) {
                obj[i].className = obj[i].className.replace(value, '');
            }
        }
    } else {
        if (hasClass(obj,value)) {
            obj.className = obj.className.replace(value, '');
        }
    }
}