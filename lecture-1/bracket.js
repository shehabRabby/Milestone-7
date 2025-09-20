 const newMobile = {
    name:'Moto 23',
    brand:'Moto',
    price: 12000,
    10:"PropertyName"
 }

//  const dot =  newMobile.10; not work 
const dots = newMobile[10];
console.log(dots);

const brandName = newMobile["brand"];
console.log(brandName)