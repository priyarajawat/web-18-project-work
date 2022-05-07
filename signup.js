
var form = document.querySelector("#form");

form.addEventListener("submit",myfunction);
var userData = JSON.parse(localStorage.getItem("usersignupdata"))|| [];
function myfunction(){
    event.preventDefault();
    var data = {
        fname:form.fname.value,
        lname:form.lname.value,
        phone:form.phone.value,
        email:form.email.value,
        pass:form.pass.value

    }
    userData.push(data);
    console.log(userData)
    localStorage.setItem("usersignupdata", JSON.stringify(userData));
    window.location.href = "login.html";
    
}