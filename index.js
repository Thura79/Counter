let count = 0;



let value = document.querySelector('#value');

let btns = document.querySelectorAll('.btn');



btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let style = e.target.classList;
        if(style.contains('decrease')){
            count--;
            value.style.color = 'red';
        }else if(style.contains('increase')){
            count++;
            value.style.color = 'blue';
        }else{
            count = 0;
            value.style.color = 'black';
        }

        value.textContent = count;
    })
})