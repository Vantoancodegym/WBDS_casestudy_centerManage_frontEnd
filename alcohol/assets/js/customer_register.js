function firstLoad(){
    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/findAllCustomerRegister",
        type: 'GET',
        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            let content=`   <tr>
            <th>Tên khách hàng</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th width="230">Nội dung</th>
        </tr>`;
            for (let i = 0; i < data.length; i++) {
                content+=`<tr>
<td>${data[i].customerName}</td>
<td>${data[i].customerPhone}</td>
<td>${data[i].email}</td>
<td>${data[i].customerAddress}</td>
<td>${data[i].content}</td>
                         </tr>`
            }
            document.getElementById("listCustomer").innerHTML=content;
        }});
}