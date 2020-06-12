const target = document.getElementById("prime");
let res = "";

const findPrimesInRange = (lower, upper) => {
  for (let i = lower; i < upper; i++) {
    if (isPrime(i)) res += i + " ";
  }
  return res;
};

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
};

target.innerHTML = findPrimesInRange(1, 100);
target.style.fontWeight = "bold";
