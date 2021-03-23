$(document).ready(function() {
  console.log("we good bro");

  $("#tweet-text").keyup(function() {
    // console.log((140 - this.value.length), this);
    let num = 140 - this.value.length
    $(this).siblings(".inline-justify").find('.counter')[0].innerHTML = num;
    if (num < 0) {
      console.log("red");
      $(this).siblings(".inline-justify").find('.counter').addClass("red");
    } else {
      $(this).siblings(".inline-justify").find('.counter').removeClass("red");
    }
  });
});



// document.addEventListener("dblclick", (event) => {
//   console.log("double click");
// });