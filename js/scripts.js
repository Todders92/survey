$(document).ready(function() {
  $("#test form").submit(function(event) {
    var beverage = $("#beverage").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var favoriteDay = $("#favoriteday").val();
    var color = $("#color").val();
    $(".color").text(color);
    $(".favoriteday").text(favoriteDay);
    $(".flavor").text(flavor);
    $(".beverage").text(beverage);
    $("#result").show();

    event.preventDefault();
  });
});
