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

//array of objects  34m24s
const todos = [
{
id:1,
text:'take out trash',
isComplete:false
},
{
id:2,
text:'take dinner',
isComplete:true
}
]

console.log(todos[1].text);

//JSON  json写法和object的数组形式有点像，  但是json没有单引号，都是双引号，而且Json的第一个属性 都要加双引号

console.log(todos[1].text);

const jsonTodo = JSON.stringify(todos);

console.log(jsonTodo);

//for loop 37m52s



