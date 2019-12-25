console.log(123);

const clipboard = new ClipboardJS('.js-clip');
const btns = document.querySelectorAll('.js-clip');
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener('mouseleave',clearTooltip);
}
function clearTooltip(e){
    e.currentTarget.setAttribute('class','js-copy-value');
}
function showTooltip(elem){
    elem.setAttribute('class','js-copy-value tooltip');
}
clipboard.on('success', function(e) {
    showTooltip(e.trigger);
});