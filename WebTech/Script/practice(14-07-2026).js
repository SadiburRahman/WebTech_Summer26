function collectData()
{
    let isValidName = collectName();
    let isValidAge = collectAge();

    return false;
}

function collectName()
{
    let name = document.getElementsById("name").value;
    
    if (name == "")
    {
        document.getElementById("error_name").innerHTML = ".....";
        return false;
    }

    let gender = document.querySelector('input[name="gender"]:checked').value;
    console.log("User gender is " + gender);
}
function collectAge()
{
    let age = document.getElementById("age").value;

    if (age == "")
    {
        document.getElementById("error_age").innerHTML = ".....";
        return false;
    }
}

function collece_checkbox()
{
    let
}