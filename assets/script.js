// assigning var to the save button id
var saveBtn = $(".saveBtn");

// set current day at top of page
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// function to change each hour block to past, present, or future
function timeColor() {
  var hour = moment().hours();

  // targeting each hour block and running it through a if else statement
  $(".hour").each(function() {
    var currentHour = parseInt($(this).attr("id"));

    if (currentHour > hour) {
      $this.addClass("future");
    } else if (currentHour === hour) {
      $this.addClass("present")
    } else {
      $this.addClass("past")
    }
  })
}

