
let i = 0;
document.querySelector("button").addEventListener("click", function () {
    let text = prompt('something'); 
    document.querySelector('ul').appendChild(document.createElement('li'))
    document.querySelectorAll('li')[i].innerHTML = text;
    i ++;
    });
    