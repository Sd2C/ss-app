function myFunction() {
var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 
$(document).ready(function(){
  $('.nav-button').click(function(){
       $('.nav-button').toggleClass('change');
      
  });
$(window).scroll(function(){
   let pos=$(this).scrollTop();
   if(pos >= 200){
       $('.nav-menu').addClass('custom-navbar');
   }else $('.nav-menu').removeClass('custom-navbar');

});

$(window).scroll(function(){
   let kos=$(this).scrollTop();
  console.log(kos);
  if(kos >= 650){
      $('.camera-img').addClass('fromLeft');
      $('.mission-text').addClass('fromRight');
  }else{
      $('.camera-img').removeClass('fromLeft');
      // $('.camera-img').addClass('fromLeftGo');
      $('.mission-text').removeClass('fromRight');
  }
  }) 
 $('.gallery-list-item').click(function(){
     let val=$(this).attr('data-filter');
     let vall=$(this).attr('class');
  //    console.log(vall);
     if(val==='all'){
         $('.filter').show(300 );
     }else{
      $('.filter').not('.'+val).hide(300);
      $('.filter').filter('.'+val).show(300); 
      }
  });
  $('.gallery-list-item').click(function(){
      $(this).addClass('active-item').siblings().removeClass('active-item');
 }); 
});