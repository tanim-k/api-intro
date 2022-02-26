const stuInfo = JSON.stringify({ name: "James", roll: 3 }); console.log(stuInfo.name); 
const premikas= { name: 'keka ferdousi' , cars: { brand: 'toyota'} }
const {brand} = premikas.cars;
console.log(brand)

const info={ 
    data: [ 
        { language:"Javascript", 
          library:"React" 
        } 
    ] 
}  
const p = info.data[0].library
console.log('e',p)