//array
const fruits = ['apple','pear','banana','kiwi','grape'];
fruits[3] = 'new';
fruits.push('mangos'); //在尾部添加
fruits.unshift('strawberries'); //在第一个添加
fruits.pop();  //去掉最后一个
console.log(fruits.indexOf('apple')); //查询apple的顺序

console.log(Array.isArray(fruits)); //来确定是不是array
console.log(fruits);

//Obejct 
const person = {
name:'wayne',
gender:'male',
age:22,
hobies:['music','sports','basketball'],
address:{
street:'sanjie',
city:'Shengzhou',
country:'China'
}
}
console.log(person.hobies[2]);

const {name,age,address:{city}} = person; //pulling our the variable, 把name age 变量从 person object address object里面的city 变量 拉出来  address{ }  是 object的 拉法 
console.log(name,city);

person.email = "wayne@wayne.com";  //外部添加属性到object 

console.log(person);

//array of objects 
