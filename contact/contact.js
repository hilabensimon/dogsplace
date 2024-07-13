function validateForm() {
  var full_name = document.forms["contact"]["full_name"].value;
  var email = document.forms["contact"]["email"].value;
  var phone = document.forms["contact"]["phone"].value;
  var message = document.forms["contact"]["message"].value;
  var checkbox = document.forms["contact"]["checkbox"].checked;
  var valid_message = "";

  var isFullName = /^[א-ת]+ [א-ת]+( [א-ת]+)?$/.test(full_name);
  var isPhone = /^(\()?\d{3}(\))?(-|\s)?\d{7}$/.test(phone);
  if ((full_name = "" || email == "" || phone == "" || message == "")) {
    valid_message += "נא מלא/י את כל השדות בטופס\n";
  } else {
    if (!isFullName) {
      valid_message += "נא הכנס/י שם מלא תקין\n";
    }
    if (!isPhone) {
      valid_message += "נא הכנס/י מספר טלפון תקין\n";
    }

    if (!checkbox) {
      valid_message += "ניתן לאמץ כלב רק מגיל 18 \n";
    }
  }
  if (valid_message == "") {
    return true;
  }
  alert(valid_message);
  return false;
}
