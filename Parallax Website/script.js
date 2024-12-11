let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * -1.5 + 'px';

    // Parallax for trees
    treeLeft.style.transform = `translateX(${value * -1.5}px)`;
    treeRight.style.transform = `translateX(${value * 1.5}px)`;

    // Adjust gates to "open" correctly
    gateLeft.style.transform = `translateX(${value * -.5}px)`; // Moves left gate further to the left
    gateRight.style.transform = `translateX(${value * .5}px)`;  // Moves right gate further to the right
});