
let i = 0;
document.querySelector("button").addEventListener("click", function () {
    let text = prompt('something'); 
    
    while (text == "") {
        alert('add text')
        text = prompt('somthing');
         let liText = document.querySelectorAll('ul li').innerHTML;
         if (liText === "") {
             delist()
         }
         
    }

    enlist(text);

    function enlist (text) {
        document.querySelector('ul').appendChild(document.createElement('li'))
        document.querySelectorAll('li')[i].innerHTML = text;
        i ++;
    }

    function delist() {
        document.querySelector('ul').removeChild(this.li);
    }

    });
    