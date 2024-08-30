document.addEventListener('DOMContentLoaded', () => {
    const users = [
        { email: "john@doe.com", password: "123test" },
        { email: "mentor@geeks.kg", password: "geeks_2020" },
        { email: "support@geeks.kg", password: "qwerty" }
    ];

    const form = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    const resultImage = document.getElementById('resultImage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = form.email.value;
        const password = form.password.value;

        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            document.body.style.backgroundColor = 'rgba(8, 80, 0, 0.92)';  // Убираем фоновый цвет
            errorMessage.textContent = '';
            resultImage.src = '../image/good.jpg';  // Путь к изображению удачного входа
        } else {
            document.body.style.backgroundColor = 'rgba(103, 0, 0, 0.87)';  // Убираем фоновый цвет
            errorMessage.textContent = 'Неверно написан Логин или Пароль!';
            resultImage.src = '../image/bad.jpg';  // Путь к изображению неудачного входа
        }

        resultImage.style.display = 'block';  // Показываем изображение
        resultImage.style.width = '100%';     // Устанавливаем ширину изображения на 100%
        resultImage.style.height = 'auto';    // Автоматическая высота для сохранения пропорций
    });
});
