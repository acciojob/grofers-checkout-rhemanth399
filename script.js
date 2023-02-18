const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let prices=document.querySelectorAll('.price');

const getSum = () => {
//Add your code here
let totalPrice=0;
const table = document.querySelector('table');
  const newRow = document.createElement('tr');
  table.appendChild(newRow)
 // const newCell = newRow.insertCell();
  prices.forEach(price=>{
	  totalPrice+=parseFloat(price.textContent);
      
  
  // Set the text content of the total price cell to the calculated total price
  

  })
  newRow.textContent = `Total Price: $${totalPrice}`;
};


getSumBtn.addEventListener("click", getSum);

