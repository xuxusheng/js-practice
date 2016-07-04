/**
 * Created by xusheng-antiy on 2016/6/24.
 */

window.onload = function() {
    var headList = document.getElementsByClassName("head-list");
    var tabList = document.getElementsByClassName("tab-list");

    for ( var i=0; i<headList.length; i++ ) {
        headList[i].addEventListener("mouseover", function(i) {
            return function() {
                for (var j=0; j<headList.length; j++) {
                    headList[j].style.backgroundColor = '#000';
                    headList[j].style.color = '#fff';
                    tabList[j].style.display = 'none';
                }
                console.log(i);
                headList[i].style.backgroundColor = '#ccc';
                headList[i].style.color = '#000';
                tabList[i].style.display = 'block';
            }
        }(i));
    }
}