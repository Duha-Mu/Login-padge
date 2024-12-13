const loginEmail = document.querySelector("#signinEmail")
const loginPassword = document.querySelector("#signinPassword")
const loginBtn = document.querySelector(".loginBtn")
let allUsers = []

if (localStorage.getItem('allUsersDataList') != null) {
    allUsers = JSON.parse(localStorage.getItem('allUsersDataList'))
}

console.log(allUsers);


function cheackEmailIsFound(person) {
    for (let i = 0; i < allUsers.length; i++) {
        if (person.email === allUsers[i].email &&
            person.password === allUsers[i].password
        ) {
            localStorage.setItem("currentUser", allUsers[i].name)
            return true
        }
    }
    return false
}

loginBtn.addEventListener('click', function () {

    if (loginEmail.value === "" || loginPassword.value === "") {
        document.querySelector("#allRequired").classList.remove("d-none");
        document.querySelector("#incorrect").classList.add("d-none"); 
        return;
    } 
    else {
        document.querySelector("#allRequired").classList.add("d-none");
    }

    let user = {
        email: loginEmail.value,
        password: loginPassword.value
    }

    if (cheackEmailIsFound(user)) {
        document.querySelector("#incorrect").classList.add("d-none")
        document.querySelector("#correct").classList.remove("d-none")
        setTimeout(function(){
            window.location.href="./pages/home.html"
        },800)
    }
    else {
        document.querySelector("#incorrect").classList.remove("d-none")
    }

})