export const validateUserLoginForm = (values) => {
    const errors = {};
    
    if(!values.email) {
        errors.email = "Required";
    }
    if(!values.password) {
        errors.password = "Required";
    }

    if(values.email.length < 6) {
        errors.email = "Email should be more than 6 characters";
    } else if (values.email.length > 25) {
        errors.email = "Email should be less than 25 characters";
    }

    if (values.password.length < 8) {
        errors.password = "Password should be greater than 8 characters";
    }
    
    return errors;
}