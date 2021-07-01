export default function calculate(amount, interest, term) {
  if (!amount || !interest || !term) return { balance: 0, pmt: 0 };

  // Total loan cost in a fixed mortage is:
  // r * p * n / (1 - (1 + r)^-n)

  // where r = interest rate / 12
  // n = number of payments or term * 12
  // p = principal

  const r = (interest * 0.01) / 12;
  const n = term * 12;
  const p = amount;

  const balance = ((r * p * n) / (1 - Math.pow(1 + r, -n))).toFixed(2);
  // @ts-ignore
  const pmt = (balance / n).toFixed(2);

  // Uncomment for debug output
  // console.log({ amount, interest, term });
  // console.log({ balance, pmt });

  return {
    balance,
    pmt,
  };
}
