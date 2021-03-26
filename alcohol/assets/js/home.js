function login_logout(){
    if (localStorage.getItem('role')=="null"||localStorage.getItem('role')==null){
        document.getElementById("login_logout").innerHTML="<a href=\"login.html\" class=\"get-started-btn\">Login</a>\n"
    }else {
        document.getElementById("login_logout").innerHTML="<button onclick='logout()' class=\"get-started-btn\">Logout</button>\n"
    }
    console.log(localStorage.getItem('role'))
}
function logout(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/logot",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json'
        },
        // dataType: 'json',
        success: function (data) {
            localStorage.setItem('token',null);
            localStorage.setItem('role',null);
            window.location.replace("login.html");
        },
        error: function ( err) {
           alert("loi")
        }
    });
    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:8080/logout",
    //     headers: {
    //         // Authorization: 'Bearer ' + localStorage.getItem('token'),
    //         // 'Accept': 'application/json',
    //         // 'Content-Type': 'application/json'
    //     },
    //     // dataType: 'json',
    //     success: function (data) {
    //         alert("thanh cong")
    //     },
    //     error: function ( err) {
    //         alert("loi")
    //     }
    // });

    // $.ajax({
    //     headers: {
    //         "Authorization": localStorage.getItem('token'),
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     url: "http://localhost:8080/logot",
    //     type: 'GET',
    //     data: formData,
    //     error : function(err) {
    //         alert(err)
    //     },
    //     success: function(data) {
    //         localStorage.setItem('token',null);
    //         localStorage.setItem('role',null);
    //         window.location.replace("login.html");
    //     }
    // });
}

