const mobile = [
    {name:'redmi', brand:'Xiomi', price:22000},
    {name:'A56', brand:'OPPO', price:62000},
    {name:'16 pro max', brand:'iphone', price:112000},
    {name:'base12', brand:'Nokia', price:24000},
    {name:'15 pro', brand:'iphone', price:22000},
    {name:'s23', brand:'Sumsung', price:20000},
]

//map -> akta array return korbe
const mapResult = mobile.map(item => item.brand);
// console.log(mapResult);

//forEach -> store kora jayna but dom manupulate vitore kora jay
// mobile.forEach(item => console.log(item.name))

//filter -> condition onujaye filter kore ture or false value array r maddhome return korbe
const filterBrand = mobile.filter(item => item.brand === 'iphone');
// console.log(filterBrand);

//find -> condition onujaye but first true or false value ta dibe object rupe
const result = mobile.find(item => item.name === 's23')
console.log(result);