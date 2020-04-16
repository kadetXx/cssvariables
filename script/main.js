
$("button").click(change);

function change() {
  if ($("#robot").hasClass("robot-day") === true) {
    $("#robot").hide();
    $("#robot").removeClass('robot-day');
    $("#robot").addClass('robot-night');
    $("i").removeClass("fa-sun");
    $("i").addClass("fa-moon");
    $("body").css("background-color", "#094549");
    $("#robot").fadeIn();
  } else {
    $("#robot").hide();
    $("#robot").removeClass('robot-night');
    $("#robot").addClass('robot-day');
    $("i").removeClass("fa-moon");
    $("i").addClass("fa-sun");
    $("#robot").fadeIn();
    $("body").css("background-color", "#fff");
  };
}