function firtLoad(){
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/findAllCategory",
        type: 'GET',
        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            console.log(data)
            let content="<option disabled=\"disabled\" selected=\"selected\">Chọn danh mục</option>";
            for (let i = 0; i < data.length; i++) {
                content+=`<option value="${data[i].id}">${data[i].name}</option>`
            }
            document.getElementById("category_id").innerHTML=content;
        }});

}
function createClass(){
    let name=$('#name').val();
    let category_id=$('#category_id').val();
    let classes={
            category: {
                id: category_id
            },
        name:name
    }

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/insertClasses",
        type: 'POST',
        data: JSON.stringify(classes),
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