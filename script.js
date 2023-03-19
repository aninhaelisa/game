let mario = document.querySelector('.mario');
let pipe = document.querySelector('.pipe');

function remove(){
    mario.classList.remove('jump');
}

function jump(){
    mario.classList.add('jump');

    setTimeout(remove, 500);
}

function loopGame(){
    let pipePosition = pipe.offsetLeft;
    let marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.src = 'https://preview.redd.it/dz7i4gsisu721.png?auto=webp&s=dfa780e2356ebec9b84c7537a852fc1732e50aba';
        mario.style.width = '100px';
    }
}

let loop = setInterval(loopGame, 10);

document.addEventListener('click', jump);