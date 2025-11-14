const usernameInput = document.getElementById("usernameInput"); 
const usernameAlert = document.getElementById("usernameAlert");
const emailInput = document.getElementById("userEmailInput"); 
const emailAlert = document.getElementById("userEmailAlert");
const passwordInput = document.getElementById("userPasswordInput"); 
const passwordAlert = document.getElementById("userPasswordAlert");
const confirmMsg = document.getElementById("confirmMsg");
const signupBtn = document.getElementById("signupBtn");
const nameRegex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
const emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/    
const passwordRegex=/^.{5,15}$/;
const tryAgainMsg = document.getElementById("tryAgainMsg");
const accIsExist = document.getElementById("exist");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginBtn = document.getElementById("loginBtn");
const fill = document.getElementById("fill");
const wrong = document.getElementById("wrong");
 const signin = document.getElementById("signin")




let usersInfo;
if(localStorage.getItem("users") == null)
{
    usersInfo = [];
}
else
{
    usersInfo = JSON.parse(localStorage.getItem("users"));
}
function signUp()
{
    userValidation();
    isExist();

    if(userValidation() == true && isExist() == false)
    {
        let user = 
        {
            name:usernameInput.value,
            email:emailInput.value,
            password:passwordInput.value
        }

        usersInfo.push(user)
        localStorage.setItem("users", JSON.stringify(usersInfo));
        confirmMsg.classList.replace("d-none", "d-block");
    }
    else
    {
        tryAgainMsg.classList.replace("d-none", "d-block");
    }

}
 



  function usernameValidation()
{
    if( nameRegex.test(usernameInput.value) == true && usernameInput.value != "")
    {
        usernameInput.classList.add("is-valid");
        usernameInput.classList.remove("is-invalid");
        usernameAlert.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        usernameInput.classList.add("is-invalid");
        usernameInput.classList.remove("is-valid");
        usernameAlert.classList.replace("d-none", "d-block");

        return false
    }
}
function passwordValidation()
{
    if(passwordRegex.test(passwordInput.value) == true && passwordInput.value != "")
    {
       passwordInput.classList.add("is-valid");
       passwordInput.classList.remove("is-invalid");
       passwordAlert.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        passwordInput.classList.add("is-invalid");
        passwordInput.classList.remove("is-valid");
        passwordAlert.classList.replace("d-none", "d-block");

        return false
    }
}

function emailValidation()
{
    if(emailRegex.test(emailInput.value) == true && emailInput.value != "")
    {
       emailInput.classList.add("is-valid");
       emailInput.classList.remove("is-invalid");
       emailAlert.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        emailInput.classList.add("is-invalid");
        emailInput.classList.remove("is-valid");
       emailAlert.classList.replace("d-none", "d-block");

        return false
    }
}
function userValidation()
{
    usernameValidation();   
    emailValidation();
    passwordValidation();

    if( (usernameValidation() == true && emailValidation() == true && passwordValidation() == true))
    {
        return true
    }
    else
    {
        return false
    }
}
function isExist()
{  
    for(let i = 0; i < usersInfo.length; i++)
    {

        if( usersInfo[i].email.toLowerCase() == emailInput.value.toLowerCase())
        {
           accIsExist.classList.replace("d-none", "d-block");
           emailInput.classList.remove("is-valid");
            usernameInput.classList.remove("is-valid");
            passwordInput.classList.remove("is-valid");
            return true
        }
    }
    return false
}






var username = localStorage.getItem("activeUsername");
function login()
{
   
    if(loginEmail.value == "" || loginPassword.value == "")
    {
      
       fill.classList.replace("d-none", "d-block");
        return false
    }

    for(var i = 0; i < usersInfo.length; i++)
    {
        if(usersInfo[i].email.toLowerCase() == loginEmail.value.toLowerCase() && usersInfo[i].password.toLowerCase() == loginPassword.value.toLowerCase())
        {
            
            localStorage.setItem('activeUsername', usersInfo[i].name)
            loginBtn.setAttribute("href", "welcome.html");
        }
        else
        {
           wrong.classList.replace("d-none", "d-block");
        }
    }
}
function displayWelcomeUser()
{
    document.getElementById("username").innerHTML = "Welcome "+ username;

}

function logout() {
    localStorage.removeItem('activeUsername')
}
