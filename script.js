function calculateFutureValue() {
    const principal = parseFloat(document.getElementById('principal').value);
    const monthly = parseFloat(document.getElementById('monthly').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseInt(document.getElementById('years').value);

    if (isNaN(principal) || isNaN(monthly) || isNaN(rate) || isNaN(years) || principal <= 0 || monthly < 0 || rate < 0 || years <= 0) {
        document.getElementById('result').textContent = "Please enter valid input values.";
        return;
    }

    const months = years * 12;
    const monthlyRate = rate / 12;

    let futureValue = principal * Math.pow(1 + monthlyRate, months);

    for (let i = 0; i < months; i++) {
        futureValue += monthly * Math.pow(1 + monthlyRate, months - i - 1);
    }

    document.getElementById('result').textContent = `Future Value: $${futureValue.toFixed(2)}`;
}
