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
// });
function createWarden(){
    let username=$('#username').val();
    let password=$('#password').val();
    let address=$('#address').val();
    let display_name=$('#display_name').val();
    let email=$('#email').val();
    let phone=$('#phone').val();
    let salary=$('#salary').val();
    let avatar=$('#avatar').val();
    let newWarden={
        appUser:{
            username:username,
            password:password,
            address:address,
            displayName:display_name,
            email:email,
            phone:phone,
            avatar:avatar,
            role: {
                id: 4
            },
        },
        salary:salary
    }
    console.log(newWarden)

        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: "http://localhost:8080/admin/insertWarden",
            type: 'POST',
            data: JSON.stringify(newWarden),
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