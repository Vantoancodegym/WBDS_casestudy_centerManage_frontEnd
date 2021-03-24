function login_logout(){
    if (localStorage.getItem('role')==null){
        document.getElementById("login_logout").innerHTML="<a href=\"login.html\" class=\"get-started-btn\">Login</a>\n"
    }else {
        document.getElementById("login_logout").innerHTML="<button onclick='logout()' class=\"get-started-btn\">Logout</button>\n"

    }
}
function logout(){
    localStorage.setItem('token',null);
    localStorage.setItem('role',null);
    window.location.replace("login.html");
}