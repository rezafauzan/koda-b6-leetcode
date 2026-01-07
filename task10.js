// 258. Add Digits
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    while (num >= 10) {
        const digit = num.toString();
        let hasil = 0;

        for (let i = 0; i < digit.length; i++) {
            hasil += parseInt(digit[i]);
        }

        num = hasil;
    }

    return num;
};