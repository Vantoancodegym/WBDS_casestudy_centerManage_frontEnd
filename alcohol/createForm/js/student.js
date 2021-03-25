function firtLoad(){
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/findAllClass",
        type: 'GET',
        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            let content="<option disabled=\"disabled\" selected=\"selected\">Chọn lớp</option>";
            for (let i = 0; i < data.length; i++) {
                content+=`<option value="${data[i].id}">${data[i].name}</option>`
            }
            document.getElementById("class_id").innerHTML=content;
    }});

}
function createStudent(){
    let username=$('#username').val();
    let password=$('#password').val();
    let address=$('#address').val();
    let display_name=$('#display_name').val();
    let email=$('#email').val();
    let phone=$('#phone').val();
    let class_id=$('#class_id').val();
    let avatar=$('#avatar').val();
    let tuition=$('#tuition').val();
    let newStudent={
        appUser:{
            username:username,
            password:password,
            address:address,
            displayName:display_name,
            email:email,
            phone:phone,
            avatar:avatar,
            role: {
                id: 3
            },
        },
        classes:{
            id:class_id,
        },
        tuition:tuition,
        status:{
            id: 1
        }

    }

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/insertStudent",
        type: 'POST',
        data: JSON.stringify(newStudent),
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