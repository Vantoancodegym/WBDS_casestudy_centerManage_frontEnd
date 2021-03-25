function firstLoad(){
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/getAvgScoreByClasses",
        type: 'GET',
        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            let content=`   <tr>
            <th>Tên Lớp</th>
            <th>Điểm trung bình</th>
        
        </tr>`;
            for (let i = 0; i < data.length; i++) {
                content+=`<tr>
<td>${data[i].name}</td>
<td>${data[i].avgScore}</td>
                         </tr>`
            }
            document.getElementById("listAvgPoint").innerHTML=content;
        }});
}