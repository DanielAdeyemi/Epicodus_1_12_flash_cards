$(document).ready(function() {
  $(".card-title").click(function() {
    $(this).siblings().toggle();
    //$(".card-text").toggle();
  });
});