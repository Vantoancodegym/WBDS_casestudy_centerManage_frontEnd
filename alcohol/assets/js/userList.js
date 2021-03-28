
function fillDataTaleAllUser() {
    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        url: "http://localhost:8080/admin/getAllUser",
        type: 'GET',
        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            let content = `   <tr>
            <th>Tên</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Role</th>
        </tr>`;
            for (let i = 0; i < data.length; i++) {
                content += `<tr>
<td>${data[i].displayName}</td>
<td>${data[i].address}</td>
<td>${data[i].phone}</td>
<td>${data[i].role.name}</td></tr>`
            }
            document.getElementById("userList").innerHTML = content;
        }
    });
}

function firstLoad(){
    fillDataTaleAllUser();
}

