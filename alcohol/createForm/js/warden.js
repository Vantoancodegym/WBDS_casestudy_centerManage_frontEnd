// $(document).ready(function() {
//
//     $("#submitButton").click(function(event) {
//
//         // Stop default form Submit.
//         event.preventDefault();
//
//         // Call Ajax Submit.
//
//         createWarden();
//
//     });
//
function insertWarden(newUser) {
    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/insertWarden",
        type: 'POST',
        data: JSON.stringify(newUser),
        // enctype: 'multipart/form-data',
        // data: newWarden,
        // processData: false,
        // contentType: false,
        // cache: false,
        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            alert("Tạo mới thành công")
            console.log(data)
        }
    });
}

function insertTeacher(newUser) {
    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/insertTeacher",
        type: 'POST',
        data: JSON.stringify(newUser),
        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            alert("Tạo mới thành công")
            console.log(data)
        }
    });
}

// });
function createWarden(e){
    let username=$('#username').val();
    let password=$('#password').val();
    let address=$('#address').val();
    let display_name=$('#display_name').val();
    let email=$('#email').val();
    let phone=$('#phone').val();
    let salary=$('#salary').val();
    let avatar=$('#avatar').val();
    let role_id;
    if (e.val()=="warden"){role_id=5}
    else {role_id=4}
    let newUser={
        appUser:{
            username:username,
            password:password,
            address:address,
            displayName:display_name,
            email:email,
            phone:phone,
            avatar:avatar,
            role: {
                id: role_id
            },
        },
        salary:salary
    }
    if (e.val()=="warden"){
        insertWarden(newUser);

    }
    else {
        insertTeacher(newUser);
    }

}