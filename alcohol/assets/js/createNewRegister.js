function createNewRegister(){
    let name=$('#name').val();
    let email=$('#email').val();
    let phone=$('#phone').val();
    let address=$('#address').val();
    let content=$('#content').val();
    let newRegister={
        customerName:name,
        email:email,
        customerPhone:phone,
        customerAddress:address,
        content:content
    }

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/insertCustomerRegister",
        type: 'POST',
        data: JSON.stringify(newRegister),

        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            alert("Tạo mới thành công")
        }
    });

}