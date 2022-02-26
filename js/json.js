console.log('poda');
// java Script object notation = JSON
const user = {id:1, name:"optka", job:'w.b'};
// how to stringify
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);
// stringify a shop 
const shop = {
    name: 'dalia store',
    profit: 15000,
    address: 'ranbir road',
    owner: {
        name:'alia bhaaat',
        profession:'actress'
    },
    products:['laptop','mobile','pepsi'],
    isExpensive: false,
};
const shopStringified = JSON.stringify(shop);
console.log(shop);
console.log(shopStringified);
//  go reverse 
const converted = JSON.parse(shopStringified);
console.log(converted);
console.log('get converted:', converted.owner);