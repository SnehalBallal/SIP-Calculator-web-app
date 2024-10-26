document.getElementById('calculator-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const sipAmount = parseFloat(document.getElementById('sip-amount').value);
  const investmentType = document.getElementById('investment-type').value;
  const numYears = parseInt(document.getElementById('num-years').value);
  const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;

  // Calculate future value based on investment type
  let futureValue;
  if (investmentType === 'one-time') {
    futureValue = sipAmount * Math.pow(1 + interestRate, numYears);
  } else {
    // SIP formula: FV = P * (((1 + r)^n - 1) / r) * (1 + r)
    futureValue = sipAmount * (((Math.pow(1 + interestRate, numYears) - 1) / interestRate) * (1 + interestRate));
  }

  // Display the result
  document.getElementById('result').textContent = `Your estimated future value: Rs.${futureValue.toFixed(2)}`;
});