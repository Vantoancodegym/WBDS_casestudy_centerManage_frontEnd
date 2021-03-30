
function createNewEvent(){
    let name=$('#name').val();
    let image=$('#image').val();
    let content=$('#content').val();
    let date=$('#date').val();
    let newEvent={
        date:date,
        name:name,
        image:image,
        content:content
    }

    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/insertEvent",
        type: 'POST',
        data: JSON.stringify(newEvent),

        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            alert("Tạo mới thành công")
            console.log(data)
        }
    });

}