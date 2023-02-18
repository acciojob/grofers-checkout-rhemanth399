const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let prices=document.querySelectorAll('.price');

const getSum = () => {
//Add your code here
let totalPrice=0;
  prices.forEach(price=>{
	  totalPrice+=parseFloat(price.textContent);
      const table = document.querySelector('table');
  const newRow = table.insertRow();
  const newCell = newRow.insertCell();
  
  // Set the text content of the total price cell to the calculated total price
  newCell.textContent = `Total Price: $${totalPrice}`;

  })
};


getSumBtn.addEventListener("click", getSum);

