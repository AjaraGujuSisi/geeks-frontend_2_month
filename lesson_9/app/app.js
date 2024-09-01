document.addEventListener('DOMContentLoaded', () => {
    const resultCounter = document.getElementById('resultCounter');
    const resultElement = document.getElementById('result');
    const problemElement = document.getElementById('problem');
    const form = document.getElementById('answerForm');
    const answerInput = document.getElementById('answerInput');

    let result = 0;
    let a, b;

    function updateProblem() {
        a = Math.floor(Math.random() * 11);
        b = Math.floor(Math.random() * 11);
        problemElement.textContent = `Сколько будет: ${a} * ${b} = ?`;
    }

    function updateResult(newResult) {
        result = newResult;
        resultElement.textContent = result;

        let color;
        if (result > 0) {
            color = 'green';
        } else if (result === 0) {
            color = 'black';
        } else {
            color = 'red';
        }


        resultCounter.style.color = color;
        resultElement.style.color = color;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const userAnswer = parseInt(answerInput.value, 10);
        const correctAnswer = a * b;

        if (userAnswer === correctAnswer) {
            updateResult(result + 5);
        } else {
            updateResult(result - 10);
        }

        answerInput.value = '';
        updateProblem();
    });

    updateProblem();
});
