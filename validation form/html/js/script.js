function validateForm(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var confirm = document.getElementById("confirm").value;
	var mobile = document.getElementById("mobile").value;

  if (username == "" || username == null) {
		document.getElementById("username-error").innerHTML = "**username is required";
		return false;
	}

	if (username.length >=8) {
		document.getElementById("username-error").innerHTML = "username should not be more than 8 character";
		return false;
	}

	if (password == "" || password == null) {
		document.getElementById("password-error").innerHTML = "**password is required";
		return false;
	}

	if (confirm != password) {
		document.getElementById("confirm-error").innerHTML = "Password and confirm password should be matched ";
		return false;
	}

	if (isNaN(mobile)) {
		document.getElementById("mobile-error").innerHTML = "please enter the number";
		return false;
	}

	if (mobile.length != 10) {
		document.getElementById("mobile-error").innerHTML = "please enter 10 digit number";
		return false;
	}
}
