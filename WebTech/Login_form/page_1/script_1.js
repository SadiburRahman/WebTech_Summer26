console.log("Connected");

function collect_data()
{
    collect_email();
    collect_password();
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