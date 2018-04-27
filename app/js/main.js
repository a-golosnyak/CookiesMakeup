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


function adjustHeight(textarea)
{
    var dif = textarea.scrollHeight - textarea.clientHeight

    if (dif)
    {
        if (isNaN(parseInt(textarea.style.height)))
        {
            textarea.style.height = textarea.scrollHeight + "px"
        }
        else
        {
            textarea.style.height = parseInt(textarea.style.height) + dif + "px"
        }
    }   
}
