
const signUpForm = document.querySelector('#registerForm');
const userName = document.querySelector("#signupName")
const userEmail = document.querySelector("#signupEmail")
const userPassword = document.querySelector("#signupPassword")
let allUsersDataList = [];

if (localStorage.getItem('allUsersDataList')) {
    getData()
}

function saveData() {
    localStorage.setItem('allUsersDataList', JSON.stringify(allUsersDataList))
}

function getData() {
    allUsersDataList = JSON.parse(localStorage.getItem('allUsersDataList'))
}

function checkEmail(x) {
   
    for (let i = 0; i < allUsersDataList.length; i++) {
       if(x.email === allUsersDataList[i].email){
        document.querySelector("#message").innerHTML = "This Email is already exist"
        return false
       }
    }

    return true
}

function clearInputs(){
    userName.value = ""
    userEmail.value = ""
    userPassword.value = ""
}

signUpForm.addEventListener('submit', function (e) {

    e.preventDefault();

    if (userName.value === "" || userEmail.value === "" || userPassword.value === "") {
        document.querySelector("#incorrect").classList.remove("d-none")
        document.querySelector("#successAlert").classList.add("d-none")
        return; 
    } 
    else {
        document.querySelector("#incorrect").classList.add("d-none"); 
    }

    let userDate = {
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value
    }

    if(checkEmail(userDate)){
        document.querySelector("#message").innerHTML = ""
        document.querySelector("#successAlert").classList.remove("d-none")
        allUsersDataList.push(userDate)
        saveData()
        clearInputs()
        setTimeout(function(){
            window.location.href="../index.html"
        },800)
    }

})

console.log(allUsersDataList);
