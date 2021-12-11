// https://randomuser.me/api/
const url = 'https://randomuser.me/api/';
const fullname = document.querySelector("#fullname");
const avatar = document.querySelector("#avatar");
const email = document.querySelector("#email");
const city = document.querySelector("#city");
const username = document.querySelector("#username");


document.querySelector("#btn").addEventListener('click',(e) => {
  
  fetch(url)
  .then(handleErrors)
.then(parseJson)
    .then(updateProfile)
    .catch(printError)
});

function handleErrors(request) {
  if(!request.ok) {
    throw Error("something is wrong");
  }
  return request;
}
function parseJson(res) {
    
    return res.json().then((data) => {
      return data.results[0];
    });
  }

function updateProfile(data) {
    console.log(data);
    var name = data.name.first + " " + data.name.last;
    fullname.innerText = name;
    email.innerText = data.email;
  city.innerText = data.location.city;
  username.innerText = data.login.username;
    avatar.src = data.picture.medium;
  }

function printError(err) {
    console.log(err);
  }
