"use strict";
class Prime {
    static isPrime(number) {
        if (number <= 1) {
            return false;
        }
        const maxIndex = Math.floor(number / 2);
        for (let index = 2; index < maxIndex; index++) {
            if (number % index === 0) {
                return false;
            }
        }
        return true;
    }
}
console.log(Prime.isPrime(17));
console.log(Prime.isPrime(14));
console.log(Prime.isPrime(57));
