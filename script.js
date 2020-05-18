
let i = 0;
document.querySelector("button").addEventListener("click", function () {
    let text = prompt('something'); 
    
    while (text == "") {
        alert('add text')
        text = prompt('somthing');
    }

    enlist(text);

    function enlist (text) {
        document.querySelector('ul').appendChild(document.createElement('li'))
        document.querySelectorAll('li')[i].innerHTML = text;
        i ++;
    }

    });
    