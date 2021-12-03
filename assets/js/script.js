var displayTime = document.querySelector("#currentDay");

var currentTime = moment();

displayTime.textContent = currentTime.format("dddd, MMMM Do");

$(".saveBtn").on("click", function () {
  // get text,classes and id values from row
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  // save to localStorage
  localStorage.setItem(time, value);
});

// load any saved data from localStorage
// 9am to 12am
$("#9am-row .description").val(localStorage.getItem("9am-row"));

$("#10am-row .description").val(localStorage.getItem("#10am-row"));

$("#11am-row .description").val(localStorage.getItem("11am-row"));

$("#12pm-row .description").val(localStorage.getItem("12pm-row"));

$("#1pm-row .description").val(localStorage.getItem("1pm-row"));

$("#2pm-row .description").val(localStorage.getItem("2pm-row"));

$("#3pm-row .description").val(localStorage.getItem("3pm-row"));

$("#4pm-row .description").val(localStorage.getItem("4pm-row"));

$("#5pm-row .description").val(localStorage.getItem("5pm-row"));

$("#6pm-row .description").val(localStorage.getItem("6pm-row"));

$("#7pm-row .description").val(localStorage.getItem("7pm-row"));

$("#8pm-row .description").val(localStorage.getItem("8pm-row"));

$("#9pm-row .description").val(localStorage.getItem("9pm-row"));

$("#10pm-row .description").val(localStorage.getItem("10pm-row"));

$("#11pm-row .description").val(localStorage.getItem("11pm-row"));

var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour13 = 13;
var hour14 = 14;
var hour15 = 15;
var hour16 = 16;
var hour17 = 17;
var hour18 = 18;
var hour19 = 19;
var hour20 = 20;
var hour21 = 21;
var hour22 = 22;
var hour23 = 23;
var hour24 = 24;

// current hour
var currentHour = moment().format("H");

// 9am - 12am
if (currentHour < hour9) {
  $("#9am-text").addClass("future");
} else if (currentHour > hour9) {
  $("#9am-text").addClass("past");
} else if ((currentHour = hour9)) {
  $("#9am-text").addClass("present");
}

if (currentHour < hour10) {
  $("#10am-text").addClass("future");
} else if (currentHour > hour10) {
  $("#10am-text").addClass("past");
} else if ((currentHour = hour10)) {
  $("#10am-text").addClass("present");
}

if (currentHour < hour11) {
  $("#11am-text").addClass("future");
} else if (currentHour > hour11) {
  $("#11am-text").addClass("past");
} else if ((currentHour = hour11)) {
  $("#11am-text").addClass("present");
}

if (currentHour < hour12) {
  $("#12pm-text").addClass("future");
} else if (currentHour > hour12) {
  $("#12pm-text").addClass("past");
} else if ((currentHour = hour12)) {
  $("#12pm-text").addClass("present");
}

if (currentHour < hour13) {
  $("#1pm-text").addClass("future");
} else if (currentHour > hour13) {
  $("#1pm-text").addClass("past");
} else if ((currentHour = hour13)) {
  $("#1pm-text").addClass("present");
}

if (currentHour < hour14) {
  $("#2pm-text").addClass("future");
} else if (currentHour > hour14) {
  $("#2pm-text").addClass("past");
} else if ((currentHour = hour14)) {
  $("#2pm-text").addClass("present");
}

if (currentHour < hour15) {
  $("#3pm-text").addClass("future");
} else if (currentHour > hour15) {
  $("#3pm-text").addClass("past");
} else if ((currentHour = hour15)) {
  $("#3pm-text").addClass("present");
}

if (currentHour < hour16) {
  $("#4pm-text").addClass("future");
} else if (currentHour > hour16) {
  $("#4pm-text").addClass("past");
} else if ((currentHour = hour16)) {
  $("#4pm-text").addClass("present");
}

if (currentHour < hour17) {
  $("#5pm-text").addClass("future");
} else if (currentHour > hour17) {
  $("#5pm-text").addClass("past");
} else if ((currentHour = hour17)) {
  $("#5pm-text").addClass("present");
}

if (currentHour < hour18) {
  $("#6pm-text").addClass("future");
} else if (currentHour > hour18) {
  $("#6pm-text").addClass("past");
} else if ((currentHour = hour18)) {
  $("#6pm-text").addClass("present");
}

if (currentHour < hour19) {
  $("#7pm-text").addClass("future");
} else if (currentHour > hour19) {
  $("#7pm-text").addClass("past");
} else if ((currentHour = hour19)) {
  $("#7pm-text").addClass("present");
}

if (currentHour < hour20) {
  $("#8pm-text").addClass("future");
} else if (currentHour > hour20) {
  $("#8pm-text").addClass("past");
} else if ((currentHour = hour20)) {
  $("#8pm-text").addClass("present");
}

if (currentHour < hour21) {
  $("#9pm-text").addClass("future");
} else if (currentHour > hour21) {
  $("#9pm-text").addClass("past");
} else if ((currentHour = hour21)) {
  $("#9pm-text").addClass("present");
}

if (currentHour < hour22) {
  $("#10pm-text").addClass("future");
} else if (currentHour > hour22) {
  $("#10pm-text").addClass("past");
} else if ((currentHour = hour22)) {
  $("#10pm-text").addClass("present");
}

if (currentHour < hour23) {
  $("#11pm-text").addClass("future");
} else if (currentHour > hour23) {
  $("#11pm-text").addClass("past");
} else if ((currentHour = hour23)) {
  $("#11pm-text").addClass("present");
}

if (currentHour < hour24) {
  $("#12am-text").addClass("future");
} else if (currentHour > hour24) {
  $("#12pm-text").addClass("past");
} else if ((currentHour = hour24)) {
  $("#12pm-text").addClass("present");
}
