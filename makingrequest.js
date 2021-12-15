var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var xhrBtn = document.getElementById("xhr");
const paragraph = document.getElementById("quote");
const jqueryBtn = document.querySelector("#jquery");
const axiosBtn = document.querySelector("#axios");

xhrBtn.addEventListener("click",sendXhr);

function sendXhr() {
  var xhr = new XMLHttpRequest();
  
  xhr.open('GET','https://ron-swanson-quotes.herokuapp.com/v2/quotes',true);
  xhr.send();
  xhr.onload = function(){
    if(this.readyState == 4 && this.status == 200)
      console.log(this);
      content = JSON.parse(this.responseText);
    
    paragraph.innerText = content;
   
  }
  
}

const fetchBtn = document.getElementById("fetch");
fetchBtn.addEventListener('click',fetchRequest);

function fetchRequest() {
  fetch(url)
  .then(handleError)
  .then(parseJson)
  .then(update)
  .catch(badRequest)
  
  function handleError(res) {
    if(!res.ok) {
      throw Error("Bad request");
    }
    console.log(res);
    return res.json();
    
  }
  function parseJson(data) {
   return data;
  }
  function update(content) {
    paragraph.innerText = content;
  }
  function badRequest() {
    console.log("bad connect");
  }
}
jqueryBtn.addEventListener('click',() => {
    $("#jquery").on('click',() => {
      $.getJSON(url
    ).done((data) => {
        $("#quote").text(data[0]);
      }).fail(() => {
        
      })
  })
});
axiosBtn.addEventListener("click",() => {
  axios.get(url)
  .then((res) => {
    paragraph.innerText = res.data[0];
  })
  .catch(() => {
    alert("Error");
  })
})
