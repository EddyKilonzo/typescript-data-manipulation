"use strict";
// interface personalInfo  {
//   firstName: string;
//   lastName: string;
//   email: string;
//   profileImage?: string;
// }
// interface Address {
//     street: string;
//     city: string;
//     zipCode: string;
//     country: string;
// }
// interface AccountInfo {
//     userId: string;
//     createdAt: Date;
//     isActive: boolean;
// }
// type Customer = personalInfo & Address & AccountInfo;
// const customer: Customer = {
//     //personalInfo
//     firstName: "John",
//     lastName: "Doe",
//     email: "john.doe@example.com",
//     profileImage: "profile.jpg",
//     //Address
//     street: "123 Main St",
//     city: "Nakuru",
//     zipCode: "12345",
//     country: "Kenya",
//     //AccountInfo
//     userId: "user-123",
//     createdAt: new Date(),
//     isActive: true
// };
// interface Track {
//     track(): void;   
// }
// interface Save {
//     save(): void;
// }
// type OrderDto =  Track & Save;
// class Order implements OrderDto {
//     constructor(public orderId: string, public amount: number) {}
//     track(): void {
//         console.log(`Tracking order ${this.orderId}`);
//     }
//     async save() {
//         console.log(`Saving order ${this.orderId} to db`);
//     }
// }
// const order = new Order("9013ijd", 5000);
// // order.track();
// // order.save();
// type paymentAmount = string | number;
// function processPayment (amount:paymentAmount) {
//     if(typeof amount === "string") {
//        const charge = parseFloat(amount) * 2.5;
//        console
//     } else {
//         const charge = amount * 2.5;
//         console.log(`Processing payment of ${charge}`);
//     }
// }
// processPayment(100);
// interface CreditPayment{
//     type: "creditCard";
//     cardNumber: string;
//     expiryDate: string;
// }
// interface PayPalPayment{
//     type: "paypal";
//     email: string;
// }
// interface BankPayment{
//     type: "bankTransfer";
//     accountNumber: string;
//     routingNumber: string;
// }
// type Payment = CreditPayment | PayPalPayment | BankPayment; 
// function validatePayment(payment: Payment) {
//     if("cardNumber" in payment) {
//         console.log(`Processing credit card payment with card number ${payment.cardNumber.slice(-4)}`);
//     }else if ("email" in payment) {
//         console.log(`Processing PayPal payment for email ${payment.email}`);
//     }else {
//         console.log(`Processing bank transfer payment with account number ${payment.accountNumber}`);
//     }
// } 
// // validatePayment({
// //     type: "paypal",
// //     email: "john.doe@example.com"
// // });
// class Product {
//     constructor(public id: string, public name: string){}
// }
// class DitigitalProduct extends Product {
//     constructor(id: string, name :string, downloadUrl: string) {
//         super(id, name);
//     }
// }
// class PhysicalProduct extends Product {
//     constructor(id: string, name:string, public weight: number) {
//         super(id, name);
//     }
// }
// function calculateShippingCost(product: Product): number {
//     if (product instanceof PhysicalProduct) {
//         return product.weight * 10;
//     } else if (product instanceof PhysicalProduct) {
//         return product.weight * 5;
//     }
//     else {
//         return 5;
//     }
//     throw new Error("Unknown product type");
// }
// interface ProductData {
//     id: string;
//     name: string;
//     price: number;
//     category: string;
// }
// function fetchProduct(): unknown {
//     return {
//         id: "133",
//         name: "Lenovo legion",
//         price: 80000,
//         category: "Electronics"
//     }
// }
// function processProduct() {
//     const data = fetchProduct();
//     //type casting
//     const product1 = data as ProductData;
//     console.log(product1);
//     const product2 = <ProductData>data;
//     console.log(`Product ID: ${product2.id}`);
// }
// // processProduct();
// function isProductData(data: unknown): data is ProductData {
//     return typeof data === 'object' && data!== null &&
//     typeof (data as any).id === "string" &&
//     typeof (data as any).name === "string" &&
//     typeof (data as any).price === "number" 
// }
// function safeProcessProduct() {
//     const data = fetchProduct();
//     if(isProductData(data)) {
//         console.log(`Product ID: ${data.id}`);
//         console.log(`Product Name: ${data.name}`);
//         console.log(`Product Price: ${data.price}`);
//         console.log(`Product Category: ${data.category}`);
//     } else {
//         console.error("Invalid product data");
//     }
// }
// safeProcessProduct();
// TYPE MANIPULATION
function getStringArray(items) {
    console.log(items);
    return items.slice();
}
function getNumberArray(items) {
    console.log(items);
    return items.slice();
}
getStringArray(["jonh", "jane", "doe"]);
