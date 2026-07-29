let amountgrocery1;
let amountgrocery2;
let amountgrocery3;

function TotalAmountGroceries(){
    amountgrocery1 = parseFloat(document.getElementById('grocery1').value);
    amountgrocery2 = parseFloat(document.getElementById('grocery2').value);
    amountgrocery3 = parseFloat(document.getElementById('grocery3'),value);

let total = amountgrocery1 + amountgrocery2+ amountgrocery3;
document.getElementById('result').innerText = "Total Grocery Amount: $(total)";
}