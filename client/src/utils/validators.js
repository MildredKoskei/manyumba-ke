
export let passedAllChecks = true
export function nameCheck(name){
    const errors = []
    //check for emptyness
    if(name.length <= 1){
        errors.push("Name should be more than one character long")
        passedAllChecks = false
    }
    if(!/[a-z][A-Z]/gi.test(name)){
        errors.push("Name should only have alphabets")
        passedAllChecks = false
    }
    return errors
}

export function usernameCheck(username){
    const errors = []
    if(username.length < 8){
        errors.push("Name should be more than 8 character long")
        passedAllChecks = false
    }
    return errors
}

export function emailAddressCheck(email){
    const errors = []
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm
    if(!regex.test(email)){
        errors.push("Please Enter a valid email address.")
        passedAllChecks = false
    }
    if(!email.length){
        errors.push("Please Enter an Email address")
        passedAllChecks = false
    }
    return errors
}

export function phoneNumberCheck(mobileNumber){
    const errors = []
    const regex = /(\+?254|0){1}[7]{1}([0-9]{1}[0-9]{1}|[9]{1}[0-2]{1})[0-9]{6}$/gim
    if(!regex.test(mobileNumber)){
        errors.push("Please Enter a valid safaricom phone number.")
        passedAllChecks = false
    }
    if(!mobileNumber.length){
        errors.push("Please Enter a phone number")
        passedAllChecks = false
    }
    return errors
}

export function passwordCheck(password, passwordConfirm){
    const errors = {
        password: [],
        confirmPassword: []
    }
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/igm
    // if(!regexPassword.test(password)){
    //     errors.password.push("A password should have atleast one number, symbol and capital letter")
    //     passedAllChecks = false
    //     return errors
    // }
    // if(password.length < 8){
    //     errors.password.push("A password should not be less than 8 characters long")
    //     passedAllChecks = false
    //     return errors
    // }
    // if(password !== passwordConfirm){
    //     errors.password.push("The confirmation password is not the same as the password")
    //     errors.confirmPassword.push("The confirmation password is not the same as the password")
    //     passedAllChecks = false
    // }
    
    return errors
}