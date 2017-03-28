$(document).ready(function(){
  mobileNav();
  submitPost();
});

function mobileNav(){
  $(".toggle").on("click", function(){
    $("body").toggleClass("menu-open");
    $("header").toggleClass("menu-open");
  });
}

function submitPost(){
  $('form').on('submit', function(){
      var title = $('form input[name="title"]');
      var content = $('form textarea');
      var feedCell = {title: title.val(), content: content.val()};
      $.ajax({
        type: 'POST',
        url: '/post',
        data: feedCell,
        success: function(data){
          //do something with the data via front-end framework
          location.replace('/post-success');
        }
      });
      return false;
  });
}
