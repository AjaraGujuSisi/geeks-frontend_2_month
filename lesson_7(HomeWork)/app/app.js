document.addEventListener('DOMContentLoaded', function() {
    generateInitialOTP();
});

document.getElementById('generate-btn').addEventListener('click', function() {
    generateOTP();
});

function generateInitialOTP() {
    const otpContainer = document.getElementById('otp-container');
    otpContainer.innerHTML = '';

    for (let i = 0; i < 4; i++) {
        const digitElement = document.createElement('div');
        digitElement.className = 'otp-digit';
        digitElement.textContent = '0';
        otpContainer.appendChild(digitElement);
    }
}

function generateOTP() {
    const otpContainer = document.getElementById('otp-container');
    otpContainer.innerHTML = '';

    for (let i = 0; i < 4; i++) {
        const digit = Math.floor(Math.random() * 10);
        const digitElement = document.createElement('div');
        digitElement.className = 'otp-digit';
        digitElement.textContent = digit;
        otpContainer.appendChild(digitElement);
    }
}
