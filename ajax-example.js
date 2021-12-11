$("#getBtn").click(() => {
  $.get("https://api.github.com/users/asianwayne")
  .done((data) => {
    console.log(data);
  })
  .fail(() => {
    console.log("ERROR");
  });
});

$("#postBtn").click(() => {
  $.post("https://baidu.com")
.done((data) => {
   console.log("hi this is the api");
})
.fail(() => {
  console.log("You are not allowed")
})
});
$("#getJSONBtn").click(() => { $.getJSON("https://api.github.com/users/asianwayne")
  .done((data) => {
    console.log(data);
  })
   .fail(() => {
  console.log("Problem");
})                           
})
