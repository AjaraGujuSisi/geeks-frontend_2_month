function changeLight(color) {
    const statusText = document.getElementById('status-text');
    const lights = document.querySelectorAll('.light');


    lights.forEach(light => {
        light.classList.remove('active');
        light.classList.remove('red', 'yellow', 'green');
    });


    const light = document.getElementById(color);
    light.classList.add('active', color);


    switch (color) {
        case 'red':
            statusText.textContent = 'Stop';
            break;
        case 'yellow':
            statusText.textContent = 'Wait';
            break;
        case 'green':
            statusText.textContent = 'Start';
            break;
        default:
            statusText.textContent = 'Click a light';
            break;
    }
}
