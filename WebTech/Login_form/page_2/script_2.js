function collect_data() 
{
    collect_firstname();
    collect_lastname();
    collect_email();
    collect_password();
    collect_dob();
    collect_phonenumber();
    collect_address();
    collect_gender();
    return false;
}

function collect_firstname()
{
    let firstname = document.getElementById("firstname").value;
    console.log("User's FIRST NAME: " + firstname);
    return false; 
}

function collect_lastname()
{
    let lastname = document.getElementById("lastname").value;
    console.log("User's LAST NAME: " + lastname);
    return false; 
}

function collect_email()
{
    let email = document.getElementById("email").value;
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