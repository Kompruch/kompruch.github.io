document.querySelector("button").addEventListener("click", function () {
    let text = prompt('something'); 
    let i = 0
    i ++
    document.querySelector('ul').appendChild(document.createElement('li'))
    document.querySelectorAll('li')[i].innerHTML = text;
    });
    