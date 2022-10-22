$(".open-close").click(function () {
  if ($("nav").outerWidth() > "0") {
    $("nav").animate({ width: "0px" }, 500);
    $(".content").animate({ "margin-left": "0px" }, 500);  } 
  else {
    $("nav").animate({ width: "250px" }, 500);
    $(".content").animate({ "margin-left": "250px" }, 500);
  }
});



$(".close").click(function closeNav() {
  {
    $("nav").animate({ width: "0px" }, 500);
    $(".content").animate({ "margin-left": "0px" }, 500);
  }
});


$(".about").not(".singer1").slideUp();
$(".singers-number h2").click(function (e) { 
    let a =  $(this).next();
    a.slideToggle();
    $(".about").not(a).slideUp();
});
// 

function getTime()
{
    let date = new Date("2023, 1, 1").getTime();
    let now = new Date().getTime();
    let time = date - now ;
    let timeBySec = time/1000;
    
    let days =Math.floor(timeBySec/(60*60*24));
    let hours =Math.floor(timeBySec % (60*60*24)/(60*60));
    let minutes =Math.floor((timeBySec%(60*60*24))%(60*60)/60);
    let seconds = Math.floor((timeBySec%(60*60*24))%(60*60)%60);
    $(".days h3").text(`${days} D`)
    $(".hours h3").text(`0${hours} h`)
    $(".minutes h3").text(`${minutes} m`)
    $(".seconds h3").text(`${seconds} s`)
   
    setTimeout(getTime,1000)
}
getTime();




$(function () {
  let max = 100;
  $("textarea").keyup(function () {
      let length = $(this).val().length;
      let character = max - length;
      console.log(character)
      if (character <= 0) {
          $("#char").text("your available character finished");
      } else {
          $("#char").text(character);
      }
  });
});
