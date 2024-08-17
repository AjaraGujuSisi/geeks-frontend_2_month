// Functions

// function declaration
function applyDiscount(price, discount) {
    let result = price * (100 - discount) / 100;
    return result;
}

// function expression
let applyPromoCode = function (price, promoCode) {
    switch (promoCode) {
        case "SUMMER_2024":
            return applyDiscount(price, 20);
        case "YA_OT_EVGENIYA":
            return applyDiscount(price, 50);
        default:
            console.warn("Неизвестный промокод:", promoCode);
            return price;
    }
}

let price = 100_000;
let blackFridayPrice = applyDiscount(price, 60);

console.log({ price, blackFridayPrice });

console.log("YA_OT_EVGENIYA",
    applyPromoCode(price, "YA_OT_EVGENIYA"));
console.log("NEW_YEAR_2025",
    applyPromoCode(price, "NEW_YEAR_2025"));
console.log("No promoCode",
    applyPromoCode(price, true)); // true не является промокодом, будет предупреждение

// +996 555 444 666
// 0555444666
// 996 (555) 444-666
function formatPhone(phoneNumber) {
    let result = "";
    for (let char of phoneNumber) {
        if (char >= "0" && char <= "9") {
            result += char;
        }
    }

    if (result.startsWith("0"))
        result = result.slice(1);

    if (result.length === 9)
        result = "996" + result;

    return result;
}

function getOperatorCode(phoneNumber) {
    return phoneNumber.slice(3, 6);
}

function checkNurTelecom(code) {
    let codes = ["500", "501", "502"];
    return codes.includes(code);
}

function checkMega(code) {
    let codes = ["550", "551", "552"];
    return codes.includes(code);
}

//Задание 1
function checkBeeline(code) {
    let codes = ["771", "772", "773", "774", "777", "222"];
    return codes.includes(code);
}

function detectOperator(phoneNumber) {
    let formattedPhoneNumber = formatPhone(phoneNumber);
    let operatorCode = getOperatorCode(formattedPhoneNumber);

    if (checkNurTelecom(operatorCode))
        return "O!";

    if (checkMega(operatorCode))
        return "Mega";

    if (checkBeeline(operatorCode))
        return "Beeline";

    return "ERROR";
}

//Задание 2
function hidePhone(phoneNumber) {
    let visiblePart = phoneNumber.slice(0, -2);
    return visiblePart + "xx";
}

let phoneNumber = prompt("Введите номер телефона (например, +996 555 123 123):");

console.log("Оператор:", detectOperator(phoneNumber));
console.log("Скрытый номер:", hidePhone(phoneNumber));

//Задание 3
function capitalizeString(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalizeString("ДАНИЭЛЬ"));
console.log(capitalizeString("эСЕНБЕКОВ"));
console.log(capitalizeString("ТаЛатБЕковИЧ"));
