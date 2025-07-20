let resultInput = document.getElementById("result");

function appendNumber(num) {
  resultInput.value += num;
}

function appendOperator(op) {
  resultInput.value += op;
}

function clearResult() {
  resultInput.value = "";
}

function calculateResult() {
  try {
    resultInput.value = eval(resultInput.value);
  } catch {
    resultInput.value = "Error";
  }
}

function toggleSign() {
  if (resultInput.value) {
    resultInput.value = String(-1 * parseFloat(resultInput.value));
  }
}

function appendParenthesis() {
  // Logika sederhana: menambahkan "(" atau ")"
  let lastChar = resultInput.value.slice(-1);
  if (
    (resultInput.value.match(/\(/g) || []).length >
    (resultInput.value.match(/\)/g) || []).length
  ) {
    resultInput.value += ")";
  } else {
    resultInput.value += "(";
  }
}
