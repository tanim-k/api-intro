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
// const p = info.data[0].library
console.log('e',p)
const bondCode=` I am Fake James bond . My new code is: 00${7+1+2}`
console.log(bondCode)

const data={ result: [ {userName: 
        {
            title:'Mr.',
            name:"sakib khan"} 
        } ]
     }
console.log(data)
const p=[1,2,3]; const q=p.map( n=> Math.pow(n, 3));
console.log(p);