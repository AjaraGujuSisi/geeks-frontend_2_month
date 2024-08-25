document.addEventListener('DOMContentLoaded', () => {
    const statusText = document.getElementById('status-text');
    const redLight = document.getElementById('red');
    const yellowLight = document.getElementById('yellow');
    const greenLight = document.getElementById('green');

    function changeLight(color) {
        const light = document.getElementById(color);
        light.classList.add('active', color);

        switch (color) {
            case 'red':
                statusText.textContent = 'Stop';
                statusText.style.color = 'red'; // Устанавливаем красный цвет текста
                break;
            case 'yellow':
                statusText.textContent = 'Wait';
                statusText.style.color = 'yellow'; // Устанавливаем желтый цвет текста
                break;
            case 'green':
                statusText.textContent = 'Start';
                statusText.style.color = 'green'; // Устанавливаем зеленый цвет текста
                break;
        }
    }

    function resetLight() {
        const lights = document.querySelectorAll('.light');
        lights.forEach(light => {
            light.classList.remove('active', 'red', 'yellow', 'green');
        });
        statusText.textContent = 'Hover over a light';
        statusText.style.color = '#fff'; // Сбрасываем цвет текста
    }

    redLight.addEventListener('mouseover', () => changeLight('red'));
    redLight.addEventListener('mouseout', resetLight);

    yellowLight.addEventListener('mouseover', () => changeLight('yellow'));
    yellowLight.addEventListener('mouseout', resetLight);

    greenLight.addEventListener('mouseover', () => changeLight('green'));
    greenLight.addEventListener('mouseout', resetLight);
});
