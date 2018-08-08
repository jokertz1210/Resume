$(window).scroll(function() {
  var scrollHeight = $(window).scrollTop();//滚动的高度
  if (scrollHeight > 50) {
    $('.p1').css('width','90%')
    $('.p2').css('width','90%')
    $('.p3').css('width','60%')
    $('.p4').css('width','75%')
    $('.p5').css('width','80%')
  }
})




// window.addEventListener('scroll',scrollHeight);

// function scrollHeight(){
//   if(document.documentElement.scrollTop > 50){
//     document.querySelector('.p1').style.width = "90%";
//     document.querySelector('.p1').style.width = "90%";
//     document.querySelector('.p1').style.width = "60%";
//     document.querySelector('.p1').style.width = "75%";
//     document.querySelector('.p1').style.width = "80%";
//   }
// }




