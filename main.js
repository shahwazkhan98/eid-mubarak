let i = 0;
let section = document.querySelector('section');

while(i <= 300){
    let star = document.createElement('i');
    star.classList.add('star')
    section.appendChild(star);

    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let size = Math.random() * 2;
    let duration = Math.random() * 2;

    star.style.left = x + 'px';
    star.style.top = y + 'px';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.animationDuration = 2 + duration + 's';
    star.style.animationDelay = duration + 's';
    i++;
}