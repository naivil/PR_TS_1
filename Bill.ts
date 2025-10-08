let productName: string = "Notebook";
let price: number = 100;       
let quantity: number = 5;      
let discountPercent: number = 10;

let totalAmount: number = price * quantity;
let discountAmount: number = (totalAmount * discountPercent) / 100;
let finalAmount: number = totalAmount - discountAmount;

console.log("======BILL DETAILS======");
console.log("Product Name:", productName);
console.log("Price per item:" + price);
console.log("Quantity:", quantity);
console.log("Total Amount:" + totalAmount);
console.log("Discount (" + discountPercent + "%):" + discountAmount);
console.log("Final Bill:" + finalAmount);
