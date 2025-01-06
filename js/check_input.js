//Checks if the given email is valid (format: adress@client.com)
function is_valid_email(email){
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

//Checks if a value hes the minimum length desired
function has_minimum_length(value, min_length){
    return value.length >= min_length;
}