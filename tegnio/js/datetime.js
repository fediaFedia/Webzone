/*
//array to store values
var stores = Array();
//input field text
var inputField = document.getElementById('inputString');

// save the string
function saveStatusLocally() {
    //grab the value of the text box
    var stringToSave = inputField.value;
    if ((stringToSave == null) || (stringToSave == "")) {
        document.getElementById('write').innerHTML = "nothing to store.";
    } else {
        //push that value to the array
        stores.push(stringToSave);
        //clear the input field for visual 
        inputField.value = "";
        //print that value into the local storage named database and joing by a non-breaking space
        window.localStorage.setItem("database", stores.join(" "));
        //confirm write
        document.getElementById('username').innerHTML = window.localStorage.getItem("database");
        //clear message after 1s
        setTimeout(function() {
            document.getElementById('write').innerHTML = "";
        }, 1000);

    }
}
*/
function saveStatusLocally(form) {
	console.log($(form).children('input#idField').val());
}



var date = new Date();
var timegmt = date.toGMTString();

// split the GMT string at spaces
time_string = timegmt.split(' ');

// assign variables
week = time_string[0];
day = time_string[1];
mon = time_string[2];
year = time_string[3];
hms = time_string[4];

// split the time part on colon
hms_string = hms.split(':');

// assign variables
var hour = hms_string[0] - 0;
var min = hms_string[1];

// convert day-of-week variables to numbers
if (week == 'Sun,') {
   week = 1
   }
if (week == 'Mon,') {
   week = 2
   }
if (week == 'Tue,') {
   week = 3
   }
if (week == 'Wed,') {
   week = 4
   }
if (week == 'Thu,') {
   week = 5
   }
if (week == 'Fri,') {
   week = 6
   }
if (week == 'Sat,') {
   week = 7
   }
   
// fix mac version communicator bug
function checkOS() {
          if (navigator.appVersion.indexOf("Mac") > 0) return "Macintosh";
          else return "other";
}
var check = checkOS();
    if (check == "Macintosh") {
    week -= 1
   }

// make array for days of week
weekly = new Array("Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");


   
// assign +- hour for San Francisco
var sf_hour = hour - 8;
var sf_week = week;
var sf_ampm = " AM";
if (sf_hour < 0) {
   sf_hour += 24
   sf_week -= 1
   }
if (sf_hour > 11) {
    sf_ampm = " PM"
    }
if (sf_hour > 12) {
   sf_hour -= 12
   }
if (sf_hour == 0) {
   sf_hour = 12
   }

// assign +- hour for Denver
var den_hour = hour - 7;
var den_week = week;
var den_ampm = " AM";
if (den_hour < 0) {
   den_hour += 24
   den_week -= 1
   }
if (den_hour > 11) {
    den_ampm = " PM"
    }
if (den_hour > 12) {
   den_hour -= 12
   }
if (den_hour == 0) {
   den_hour = 12
   }
      
// assign +- hour for Memphis
var mem_hour = hour - 6;
var mem_week = week;
var mem_ampm = " AM";
if (mem_hour < 0) {
   mem_hour += 24
   mem_week -= 1
   }
if (mem_hour > 11) {
    mem_ampm = " PM"
    }
if (mem_hour > 12) {
   mem_hour -= 12
   }
if (mem_hour == 0) {
   mem_hour = 12
   }

// assign +- hour for New York
var ny_hour = hour - 5;
var ny_week = week;
var ny_ampm = " AM";
if (ny_hour < 0) {
   ny_hour += 24
   ny_week -= 1
   }
if (ny_hour > 11) {
    ny_ampm = " PM"
    }
if (ny_hour > 12) {
   ny_hour -= 12
   }
if (ny_hour == 0) {
   ny_hour = 12
   }
   
// assign +- hours for London
var lon_hour = hour + 0;
var lon_week = week;
var lon_ampm = " AM";
if (lon_hour > 24) {
   lon_hour -= 24
   lon_week += 1
   }
if (lon_hour > 11) {
    lon_ampm = " PM"
    }
if (lon_hour > 12) {
   lon_hour -= 12
   }
if (lon_hour == 0) {
   lon_hour = 12
   }
   
// assign +- hours for Paris
var par_hour = hour + 1;
var par_week = week;
var par_ampm = " AM";
if (par_hour > 24) {
   par_hour -= 24
   par_week += 1
   }
if (par_hour > 11) {
    par_ampm = " PM"
    }
if (par_hour > 12) {
   par_hour -= 12
   }
if (par_hour == 0) {
   par_hour = 12
   }
   
// assign +- hours for Moscow
var mos_hour = hour + 4;
var mos_week = week;
var mos_ampm = " AM";
if (mos_hour > 24) {
   mos_hour -= 24
   mos_week += 1
   }
if (mos_hour > 11) {
    mos_ampm = " PM"
    }
if (mos_hour > 12) {
   mos_hour -= 12
   }
if (mos_hour == 0) {
   mos_hour = 12
   }
   
// assign +- hours for Bangkok
var ban_hour = hour + 7;
var ban_week = week;
var ban_ampm = " AM";
if (ban_hour > 24) {
   ban_hour -= 24
   ban_week += 1
   }
if (ban_hour > 11) {
    ban_ampm = " PM"
    }
if (ban_hour > 12) {
   ban_hour -= 12
   }
if (ban_hour == 0) {
   ban_hour = 12
   }
      
// assign +- hours for Tokyo
var tok_hour = hour + 9;
var tok_week = week;
var tok_ampm = " AM";
if (tok_hour > 24) {
   tok_hour -= 24
   tok_week += 1
   }
if (tok_hour > 11) {
    tok_ampm = " PM"
    }
if (tok_hour > 12) {
   tok_hour -= 12
   }
if (tok_hour == 0) {
   tok_hour = 12
   }
      
// assign +- hours for Sydney
var syd_hour = hour + 11;
var syd_week = week;
var syd_ampm = " AM";
if (syd_hour > 24) {
   syd_hour -= 24
   syd_week += 1
   }
if (syd_hour > 11) {
    syd_ampm = " PM"
    }
if (syd_hour > 12) {
   syd_hour -= 12
   }
if (syd_hour == 0) {
   syd_hour = 12
   }
   
   
//-->
      