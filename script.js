const numberEntry = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function numeralConverter(num) {
  const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9 , 5, 4, 1];
  const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let result = "";

  for (let i = 0; i < arabicNumerals.length; i++) {
    while (num >= arabicNumerals[i]) {
      result += romanNumerals[i];
      num -= arabicNumerals[i];
    }
  }
  return result;
};


function checkNumber() { 

  if (numberEntry.value === "") {
  output.innerText = "Please enter a valid number";
  return
} else if (numberEntry.value < 0) {
  output.innerText = "Please enter a number greater than or equal to 1";
} else if (numberEntry.value > 3999) {
  output.innerText = "Please enter a number less than or equal to 3999";
} else {
  output.innerText = numeralConverter(numberEntry.value);
}
};



convertBtn.addEventListener("click", checkNumber);
