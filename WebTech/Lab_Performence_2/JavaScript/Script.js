let i = 0;

function collect_data()
{
    let isValidUsername = collect_username();
    let isValidPassword = collect_password();

    if (isValidUsername == true && isValidPassword == true)
    {
        document.getElementById("successful").innerHTML = "Successfully Logged In";

        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("failed").innerHTML = "";

        i=0;

        return false;
    }
    else
    {
        document.getElementById("successful").innerHTML = "";
        return false;
    }

    return false;
}

function collect_username()
{
    let username = document.getElementById("username").value;

    if (username == "")
    {
        document.getElementById("error_username").innerHTML = "Username is required";
        return false;
    }
    if (username.trim() != "AIUB")
    {
        document.getElementById("error_username").innerHTML = "Username is Incorrect";
        return false;
    }
    else
    {
        document.getElementById("error_username").innerHTML = "";
        return true;
    }
}

function collect_password()
{
    let password = document.getElementById("password").value;

    if (password == "")
    {
        document.getElementById("error_password").innerHTML = "Password is required";
        return false;
    }
    
    if (password.trim() != "$_student")
    {
        document.getElementById("error_password").innerHTML = "Password is Incorrect";

        if (i == 3)
        {
            document.getElementById("failed").innerHTML = "You are locked for 5 munites";

            return false;
        }
        else
        {
            i++;
            document.getElementById("failed").innerHTML = "You have " + (4 - i) + " attempts left";

            return false;
        }
        
    }
    else
    {
        document.getElementById("error_password").innerHTML = "";
        return true;
    }


}  

