
function fillDataTaleAllUser() {
    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        url: "http://localhost:8080/admin/getTop5StudentHaveBigScore",
        type: 'GET',
        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            let content = `   <tr>
            <th>Tên</th>
            <th>Điểm trung bình</th>
        </tr>`;
            for (let i = 0; i < data.length; i++) {
                content += `<tr>
<td>${data[i].display_name}</td>
<td>${data[i].avgScore}</td>
</tr>`
            }
            document.getElementById("top5student").innerHTML = content;
        }
    });
}

function firstLoad(){
    fillDataTaleAllUser();
}

