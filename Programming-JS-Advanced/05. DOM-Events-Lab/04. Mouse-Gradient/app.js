function attachGradientEvents() {
    let result = document.getElementById('result');
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMove);

    // offset shows the current position of the mouse
    // .clientWidth shows the element's total width
    
    function onMove(ev) {
        result.textContent = Math.floor(ev.offsetX / gradient.clientWidth * 100) + '%';
    }
}