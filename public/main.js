document.addEventListener('DOMContentLoaded', () => {
const totalBillList = document.querySelector('.bill');
const myBillList = document.querySelector('.myBill');

// Total and My Bill display spans
const subtotalDisplay = document.querySelector('.subtotal');
const taxDisplay = document.querySelector('.tax');
const balanceDisplay = document.querySelector('.balance');
const mySubtotalDisplay = document.querySelector('.my-subtotal');
const myTaxDisplay = document.querySelector('.my-tax');
const myBalanceDisplay = document.querySelector('.my-balance');

const TAX_RATE = 0.06;

function updateTotal() {
  let subtotal = 0;
  totalBillList.querySelectorAll('.item').forEach(item => {
    const amount = parseFloat(item.querySelectorAll('span')[1].innerText.replace('$', ''));
    subtotal += amount;
  });
  const tax = subtotal * TAX_RATE;
  const balance = subtotal + tax;

  subtotalDisplay.innerText = subtotal.toFixed(2);
  taxDisplay.innerText = tax.toFixed(2);
  balanceDisplay.innerText = balance.toFixed(2);
}

function updateMyTotal() {
  let mySubtotal = 0;
  myBillList.querySelectorAll('.item').forEach(item => {
    const amount = parseFloat(item.querySelectorAll('span')[1].innerText.replace('$', ''));
    mySubtotal += amount;
  });
  const myTax = mySubtotal * TAX_RATE;
  const myBalance = mySubtotal + myTax;

  mySubtotalDisplay.innerText = mySubtotal.toFixed(2);
  myTaxDisplay.innerText = myTax.toFixed(2);
  myBalanceDisplay.innerText = myBalance.toFixed(2);
}

// Single event listener for all clicks
document.addEventListener('click', function (e) {
  // Claim/Unclaim logic
  if (e.target.classList.contains('claim')) {
    const item = e.target.closest('.item');
    e.target.textContent = 'Unclaim';
    e.target.classList.remove('claim');
    e.target.classList.add('unclaim');
    item.querySelector('.trash').style.display = 'none';
    myBillList.appendChild(item);
    updateTotal();
    updateMyTotal();
  } else if (e.target.classList.contains('unclaim')) {
    const item = e.target.closest('.item');
    e.target.textContent = 'Claim';
    e.target.classList.remove('unclaim');
    e.target.classList.add('claim');
    item.querySelector('.trash').style.display = 'inline';
    totalBillList.appendChild(item);
    updateTotal();
    updateMyTotal();
  }

  // Trash can delete logic
  if (e.target.classList.contains('fa-trash-o')) {
    const item = e.target.closest('.item');
    const spans = item.querySelectorAll('span');
    const itemName = spans[0]?.innerText.trim();
    const amount = spans[1]?.innerText.replace('$', '').trim();
    const owner = spans[2]?.innerText.trim();

    fetch('/bill', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item: itemName, amount, owner })
    })
    .then(res => {
      if (res.ok) {
        item.remove();
        updateTotal();
        updateMyTotal();
      }
    })
    .catch(err => console.error('Delete failed:', err));
  }
});
});
