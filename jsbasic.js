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
}}
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
	//function 也可以return 值， 如果是return的话 函数执行的时候要console.log 
console.log(num1 + num2);
}

addNums(23009,2);

//es6 写法 
const addNums = (numb1 = 1,numb2 = 1) => {
	return numb1 + numb2;
}
console.log (addNums(5，5));

// 既然只有一个expression  就可以连大括号都去掉 
//这种方式你要return的话， 你只要去掉console.log就好 本身就是return了。 
const addNums = (numb1 = 1,numb2 = 1) => console.log( numb1 + numb2 );

addNums();

//javascript oop 
//constructor function 是 ES5 的写法， ES6 是 class . 
//object orient project  person是一个面向对象 constructor 函数 
function Person(firstName,lastName,dob) {
	this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
}

//实例化object
const person1 = new Person('wayne','shen','198508');
console.log(person);

//date object //new Date()  时间对象
function Person(firstName,lastName,dob) {
	this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

const person1 = new Person('wayne','shen','198508');
const person2 = new Person('Rosa','Day','199010');
console.log(person2.dob);

//data object 和constructor 函数拓展操作 
//object orient project 
function Person(firstName,lastName,dob) {
	this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = () => this.dob.getFullYear();
  
}

const person1 = new Person('wayne','shen','03-08-1985');
const person2 = new Person('Rosa','Day','12-08-2002');
console.log(person2.getBirthYear());

//拓展操作
//object orient project 
function Person(firstName,lastName,dob) {
	this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = () => this.dob.getFullYear();
  this.getFullName = () => this.firstName + ' ' + this.lastName;
  //也可以template string return `${this.firstName} ${this.lastName}`
  
}

const person1 = new Person('wayne','shen','03-08-1985');
const person2 = new Person('Rosa','Day','12-08-2002');
console.log(person2.getFullName());

//1h08m31s
//也可以通过protoType操作 //protoType是js内置的方法 
//比方说不在constructor函数里 设置this.getBirthYear()  可以protoType来添加到方法到protoType

//object orient project 
function Person(firstName,lastName,dob) {
	this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  
  //也可以template string return `${this.firstName} ${this.lastName}`
  
}
Person.prototype.getBirthYear = function () {
	return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
return this.firstName + ' ' + this.lastName;
}
const person1 = new Person('wayne','shen','03-08-1985');
const person2 = new Person('Rosa','Day','12-08-2002');
console.log(person2.getBirthYear());
//protoType 
//we can attach method of the prototype

//js oop class的写法 
class Person {
	constructor(firstName,lastName,dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  }
  getBirthYear() {
  return this.dob.getFullYear()
  }
  getFullName() {
  return this.firstName + ' ' + this.lastName;
  }
}

//1h18m
const wayne = new Person('wayn','shen','3-4-2001');
console.log(wayne);
console.log(wayne.getFullName());

//DOM DOM是document object modal   1h11m35s
const ps = document.querySelectorAll('p');

ps.forEach((p) => {
  console.log(p)
});

const ul = document.querySelector('.items');
//ul.remove();
/*remove the last child of the ul */
ul.lastElementChild.remove();
//set fitst element text content to hello 
ul.firstElementChild.textContent = 'hello';

//pick the second one and change it;s content  children() 是nodelist method 
ul.children[1].textContent = 'wyan';

//change the last element html 
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

//btn
const btn = document.querySelector('.btn');
//change background of button
btn.style.background = 'red';

//eventListener  1h28m
btn.addEventListener('click',(e) => {
  e.preventDefault();
  console.log(e.target.classList);
  document.querySelector('body').classList.add('bg-red');
});


//form validation and 
const myForm = document.querySelector('#myform');
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector("#msg");
const userLists = document.querySelector("#users");

myForm.addEventListener('submit',onFormSubmit);

function onFormSubmit(e) {
	e.preventDefault();
  
  
  if(nameInput.value === '' || emailInput.value === '') {
  msg.classList.add('error');
  	msg.innerHTML = 'pls fill the form out';
   	setTimeout(() => msg.remove(),2000);
  } else {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
  userLists.appendChild(li);
 	//clear fields
  nameInput.value = '';
  emailInput.value = '';
  console.log('success');
  }
}


