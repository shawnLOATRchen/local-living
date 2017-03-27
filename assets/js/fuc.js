$(document).ready(function(){
  mobileNav();
});

function mobileNav(){
  $(".toggle").on("click", function(){
    $("body").toggleClass("menu-open");
    $("header").toggleClass("menu-open");
  });
}
