//course  address is : https://www.aliyundrive.com/drive/folder/618caa4a0a0e31a6347a43b68589d8164dd098c8
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
//for loop 3 parameters first is variable assignment，next is the condition needs to be match ; next is the increment 
//以分号分隔 
for(let i = 0; i <= 10;i++) {
	console.log(`for loop number is : ${i}`);
}

//while loop
//while loop set the varible outside the loop 
//while loop 要加自增的条件，不然一直无限循环，如下面 因为i <=10 条件一直成立， 所以会一直循环 
let i = 0;
while(i <= 10) {
 console.log(i);
 i++;
}

//for loop the array 用for 循环 array  因为这里todos是array， 所以可以获取到他的长度，也就是Length ， 然后循环
// for loop the array , length 可以用在string 也可以用在array 
for(let i = 0;i<todos.length;i++) {
console.log(todos[i].text);
}

//for of loop, 循环数组然后循环出每个数组里面的单元
//todos is the name of the array
for(let todo of todos) {
	console.log(todo.text);
}

//high order array methods 
//forEach,map,filter
//forEach array
todos.forEach((todo) => {
	console.log(todo);
})

//map //map returns array  map循环返回数组 
//return the array of just text values
const todoText = todos.map((todo) => {
	return todo.text;
})
console.log(todoText); 

//
//filter
//return the filtered thing 筛选特定条件的结果数组， 返回的是完整的单元的数组 
const todoComplete = todos.filter((todo) => {
	return todo.isComplete === true;
})
console.log(todoComplete);


//可以多个循环结合使用，如这个结果返回ispmplete 条件下的text   46m18s
//high order method
const todoComplete = todos.filter((todo) => {
	return todo.isComplete === true;
}).map((todo) => {
	return todo.text;
})
console.log(todoComplete);

//conditionals
//== double equal will not match the datatype it's just the value 两个等号是值相等，三个等号 === 是数据类型相等 
//原则上都要用三个等号来完全符合 

const x = '10';
if(x === 10) {
console.log('x is equal to 10')
} else if (x > 10) {
	console.log('x is greater than 10;)

}
else {
console.log('x is less than  10')
}


//ternary shorthand 短写法
const x = 11;
const color = x > 10 ? 'red' : 'blue';
console.log(color)

//switch 用法 

const x = 11;
const color = x > 10 ? 'red' : 'blue';

switch(color) {
case 'red':
console.log('color is red');
break;
case 'blue':
console.log('color is blue');
break;
default:
console.log('color is not red or blue');
}

、//functions   55m39s 
function addNums(num1 = 1,num2 = 1) {
//function可以设置default 参数 值 比方可以设置num1 = 1, num2 = 1 这样执行函数的时候如果参数定义的时候就不会显示NAH。
console.log(num1 + num2);
}

addNums(23009,2);

