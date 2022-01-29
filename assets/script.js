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
      $(this).addClass("future");
    } else if (currentHour === hour) {
      $(this).addClass("present")
    } else {
      $(this).addClass("past")
    }
  })
}

// function to save current text when save button is hit
saveBtn.on("click", function() {
  var time = $(this).siblings(".hour").text();
  var appointment = $(this).siblings(".plan").val();


  localStorage.setItem(time, appointment)
})

// calls the saved data from the localstorage to populate the time blocks
function savedTimes() {

  $(".hour").each(function() {
      var hour = $(this).text();
      var plan = localStorage.getItem(hour);

      if(plan !== null) {
          $(this).siblings(".plan").val(plan);
      }
  });
}

// calling the two functions to color the planner and load your previous saves
timeColor();
savedTimes();