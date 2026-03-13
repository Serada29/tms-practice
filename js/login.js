const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(registrationForm));
  const errors = userValidation(data);

  if (Object.keys(errors).length > 0) {
    console.log("Validation errors", errors);

    return;
  }

  console.log("User registration is valid", data);
});

function userValidation(data) {
  const { trucking, username, password } = data;

  const errors = {};

  if (!trucking || trucking.trim() === "") {
    errors.trucking = "Trucking name is required";
  } else if (trucking.trim().length > 3) {
    errors.trucking = "Trucking name must be atleast 3 character";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!username || username.trim() === "") {
    errors.username = "Username is required";
  } else if (!emailPattern.test(username)) {
    errors.username = "Invalid username format";
  }

  if (!password || password.trim() === "") {
    errors.password = "Password is required";
  } else if (password.trim().length < 8) {
    errors.password = "Password must be atleast 8 character";
  } else if (!/\d/.test(password)) {
    errors.password = "Password must contain at least one number";
  }

  return errors;
}
