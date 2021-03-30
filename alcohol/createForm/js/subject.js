
function createSubject(){
    let name=$('#name').val();
    let image=$('#image').val();
    let newSubject={
        name:name,
        image:image,
    }

    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/insertSubject",
        type: 'POST',
        data: JSON.stringify(newSubject),

        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            alert("Tạo mới thành công")
            console.log(data)
        }
    });

}