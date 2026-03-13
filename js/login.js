const schema = {
  trucking: ["required", "min:3"],
  username: ["required", "email"],
  password: ["required", "min:8", "number"],
};

const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(registrationForm));
  const errors = userValidation(data, schema);

  if (Object.keys(errors).length > 0) {
    showErrors(errors);
    return;
  }

  console.log("User registration is valid", data);
});

function showErrors(errors) {
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  for (const field in errors) {
    const errorElement = document.getElementById(field + "Error");

    if (errorElement) {
      errorElement.textContent = errors[field];
    }
  }
}

function userValidation(data, schema) {
  const errors = {};

  for (const field in schema) {
    const value = data[field];
    const fieldRules = schema[field];

    for (const rule of fieldRules) {
      let ruleName = rule;
      let ruleValue = null;

      if (rule.includes(":")) {
        [ruleName, ruleValue] = rule.split(":");
      }

      const result = rules[ruleName](value, ruleValue);

      if (result !== true) {
        errors[field] = result;
        break;
      }
    }
  }

  return errors;
}

const rules = {
  required(value) {
    return value.trim() !== "" || "This field is required";
  },
  email(value) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value) || "Invalid email format";
  },
  number(value) {
    return /\d/.test(value) || "Must contain a number";
  },
  min(value, length) {
    return value.length >= length || `Minimum ${length} characters required`;
  },
};
