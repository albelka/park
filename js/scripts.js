$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var height = parseInt($("input#height").val());

    $(".parkHeight").text(height);
    if (height >= 60) {
      $(".allRides").show();
      $(".under60in").removeClass();
      $(".over60inHeader").removeClass();
      } else {
      $(".allRides").show();
      $(".over60in").removeClass();
      $(".under60inHeader").removeClass();
    }
  });
});
