function usdcny(usd) {
    const yuanNum = usd * 6.75;
    const yuanStr = yuanNum.toString();
    return yuanStr + " Chinese Yuan";
}

const usdcny2 = usd => (usd * 6.75).toFixed(2).toString() + " Chinese Yuan";


console.log(usdcny2(465));