let list= document.querySelectorAll(".filterbt");
let itemBox = document.querySelectorAll(".box-course");
let nav = document.querySelector(".nav-icon");
let box = document.querySelector(".small-navigation");
let link = document.querySelectorAll(".Link")

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click",function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active-filter");
    }
    this.classList.add("active-filter");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.add("hide");
      itemBox[k].classList.remove("active-box");

      if (itemBox[k].getAttribute("data-item") == dataFilter || dataFilter == "all"){ 
        itemBox[k].classList.add("active-box");
        itemBox[k].classList.remove("hide");
      }
      
    }
  })
  
}

let v = 0;

$("#btn").on("click", function(){
  $('#navbar').slideToggle('slow');
})




let accordion = document.getElementsByClassName("lecture");
      for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function () {
          this.classList.toggle("active3");
        });
      }

$(window).on('load', function() {
  $('.load-wrapper').fadeOut("slow");
});