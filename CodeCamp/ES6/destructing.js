const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

//const highToday = HIGH_TEMPERATURES.today;
//const highTomorrow = HIGH_TEMPERATURES.tomorrow;
//const { today, tomorrow } = HIGH_TEMPERATURES;
//const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

//console.log(today);
//console.log(highToday);





const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

  // Only change code above this line
