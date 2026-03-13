# Schema-based validation system

# Schema -> what rules each field must follow

# Rules library -> reusable validation functions

# Validation Engine -> runs the rule automatically

# Schema

const schema = {
trucking: ["required", "min:3"],
username: ["required", "email"],
password: ["required", "min:8", "number"]
}

# VALIDATION RULES

const rules = {
required(value) {
return value.trim() !== "" || "This field is required"
},
email(value) {
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/;
return emailPattern.test(value) || "Invalid email format"
},
number(value) {
return /\d/.test(value) || "Must contain a number"
},
min(value, length) {
return value.length >= length || `Minimum ${length} characters required`
}
}

# VALIDATION ENGINE

function validateForm(data, schema){
errors = {}

    for(field in data) {
        const value = data[field]
        const fieldRules = schema[field]

        for(rule in fieldRules) {
            let ruleName = rule;
            let ruleValue = null;

            if(rule.includes(":")) {
                [ruleName, ruleValue] = rule.split(":")
            }

            const result = rules[ruleName](value, ruleValue)

            if(result !== true){
                errors[field] = result
                break
            }

        }
    }

    return errors

}
