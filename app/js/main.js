document.getElementById('btn').onclick = function() {
    var butt = document.getElementsByClassName('hidden-menu-ticker');
    var menu = document.getElementsByClassName('right');

    if(butt[0].checked == true){
        menu[0].classList.add("open");
    }
    else {
        menu[0].classList.remove("open");
    }

}

document.getElementById('btn2').onclick = function() {
    var butt = document.getElementsByClassName('hidden-menu-ticker');
    var menu = document.getElementsByClassName('right');

    if(butt[0].checked == true){
        menu[0].classList.add("open");
    }
    else {
        menu[0].classList.remove("open");
    }

}