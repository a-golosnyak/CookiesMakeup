

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


function adjustHeight(){
/*    var dif = textarea.scrollHeight - textarea.clientHeight
    if (dif){
        if (isNaN(parseInt(textarea.style.height))){
            textarea.style.height = textarea.scrollHeight + "px"
        }else{
            textarea.style.height = parseInt(textarea.style.height) + dif + "px"
        }
    }*/
    alert("Событие!")
}

