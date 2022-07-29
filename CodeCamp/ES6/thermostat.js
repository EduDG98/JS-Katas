// Only change code below this line
class Thermostat {
    constructor(farengei) {
        this.farengei = farengei * 9.0 / 5 + 32;
    }
    get temperature() {
        return (5 / 9) * (this.farengei - 32);
    }
    set temperature(centrigrados) {
        this.farengei = (centrigrados * 9.0) / 5 + 32;;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
