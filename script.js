let purchasePrice = document.querySelector('#purchase-price');
let stocksQuantity = document.querySelector('#stocks-quantity');
let currentPrice = document.querySelector('#current-price');

const checkBtn = document.querySelector('#btn-check');
const resetBtn = document.querySelector('#btn-reset');

const outputDiv = document.querySelector('#output');

let purchaseInputError = document.querySelector('#purchase-error');
let quantityInputError = document.querySelector('#quantity-error');
let currentInputError = document.querySelector('#current-error');

checkBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let costPrice = purchasePrice.value;
  let qty = stocksQuantity.value;
  let currPrice = currentPrice.value;
  validateData(costPrice, qty, currPrice);
});

resetBtn.addEventListener('click', () => {
  clearInputError();
  outputDiv.innerHTML = '';
});

const clearInputError = () => {
  purchaseInputError.innerHTML = '';
  quantityInputError.innerHTML = '';
  currentInputError.innerHTML = '';
};

const validateData = (costPrice, qty, currPrice) => {
  clearInputError();
  if (costPrice === '') {
    purchaseInputError.innerHTML = 'This field is required';
  }
  if (qty === '') {
    quantityInputError.innerHTML = 'This field is required';
  }
  if (currPrice === '') {
    currentInputError.innerHTML = 'This field is required';
  }
  if (costPrice>0 && qty>0 && currPrice>0) {
    calculateReturn(costPrice, qty, currPrice);
  }
  else{
    outputDiv.innerHTML = 'please give correct input';
  }
};

const calculateReturn = (costPrice, qty, currPrice) => {
  let diff = (costPrice - currPrice) * qty;
  let perc = (diff / (costPrice * qty)) * 100;
  outputDiv.innerHTML = '';
  if (diff > 0) {
    let msg = `${Math.abs(perc)}% loss.
       Lost amount is ${Math.abs(diff)} Rupees`;
    outputDiv.style.backgroundColor = 'rgb(246, 97, 97)';
    showOutput(msg);
  } else if (perc < 0) {
    let msg = `${Math.abs(perc)}% profit. Profit amount is ${Math.abs(
      diff
    )} Rupees`;
    outputDiv.style.backgroundColor = 'rgb(67, 228, 129)';
    showOutput(msg);
  } else {
    let msg = 'Neither profit nor loss!';
    outputDiv.style.backgroundColor = 'rgb(67, 228, 129)';
    showOutput(msg);
  }
};

const showOutput = (msg) => {
  outputDiv.innerHTML = msg;
};
