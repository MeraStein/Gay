/*const h2 = document.createElement('h2')
h2.innerText = "mera!"
document.body.appendChild(h2)*/

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

yesBtn.addEventListener('click', function() {
    alert('yes you are');
});


let flag = 1;
noBtn.addEventListener('mouseenter', function() {
    let preTop = parseFloat(noBtn.style.marginTop) || 0;
    let num = 50*flag;
    preTop += num;
    noBtn.style.marginTop = parseFloat(preTop) +'vh';
    flag *= -1;
});

