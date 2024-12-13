const logoutBtn = document.querySelector("#logoutBtn")

if (localStorage.getItem("currentUser")){
    document.querySelector("#username").innerHTML =
    "Welcome " + localStorage.getItem("currentUser")
}

console.log(logoutBtn);

logoutBtn.addEventListener('click', function(){
    window.location.href="../index.html"
    
})
