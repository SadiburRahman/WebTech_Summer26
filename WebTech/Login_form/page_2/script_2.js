function collect_data() 
{
    let isValidFullName = collect_fullname();
    let isValidEmail = collect_email();
    let isValidPassword = collect_password();
    let isValidDob = collect_dob();
    let isValidPhoneNumber = collect_phonenumber();
    let isValidAddress = collect_address();
    let isValidGender = collect_gender();
    return false;
}

function collect_fullname()
{
    let fullname = document.getElementById("fullname").value;

    if (fullname.trim() == "")
    {
        document.getElementById("error_fullname").innerHTML = "Full name is required.";
        return false;    
    }
    else if (fullname.length < 3)
    {
        document.getElementById("error_fullname").innerHTML = "Full name must be at least 3 characters long.";
        return false;    
    }
    else if (fullname[0] == " " || fullname[fullname.length - 1] == " " )
    {
        document.getElementById("error_fullname").innerHTML = "Full name cannot start or end with a space.";
        return false;    
    }
    else if (fullname[0] == "1" || fullname[fullname.length - 1] == "2" || fullname[0] == "3" || fullname[fullname.length - 1] == "4" 
             || fullname[0] == "5" || fullname[fullname.length - 1] == "6" || fullname[0] == "7" || fullname[fullname.length - 1] == "8" 
             || fullname[0] == "9" || fullname[fullname.length - 1] == "0")
    {
        document.getElementById("error_fullname").innerHTML = "Full name cannot start or end with a digit.";
        return false;    
    }
    else
    {
        document.getElementById("error_fullname").innerHTML = "";
        console.log("User's FULL NAME: " + fullname);
        return false; 
    }

    
}

function collect_email()
{
    let email = document.getElementById("email").value;

    if (email.trim() == "")
    {
        document.getElementById("error_email").innerHTML = "Email is required.";
        return false;    
    }   

    document.getElementById("error_email").innerHTML = "";
    console.log("User's EMAIL: " + email);
    return false;
    
}

function collect_password()
{
    let password = document.getElementById("password").value;
    console.log("User's PASSWORD: " + password);
    return false;
}

function collect_dob()
{
    let dob = document.getElementById("dob").value;
    console.log("User's DATE OF BIRTH: " + dob);
    return false;
}

function collect_phonenumber()
{
    let phonenumber = document.getElementById("phonenumber").value;
    console.log("User's PHONE NUMBER: " + phonenumber);
    return false;
}

function collect_address()
{
    let address = document.getElementById("address").value;
    console.log("User's ADDRESS: " + address);
    return false;
}

function collect_gender()
{
    let gender = document.querySelector('input[name="gender"]:checked').value;
    console.log("User's GENDER: " + gender);
    return false;
}