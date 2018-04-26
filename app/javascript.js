

document.getElementById('btn').onclick = function() {
 //   alert('Спасибо');

    butt = document.getElementsByClassName('hidden-menu-ticker');
    menu = document.getElementsByClassName('right');

    if(butt[0].checked == true){
        menu[0].style.width = '240px';
    }
    else {
        menu[0].style.width ='0px';
    }

}


