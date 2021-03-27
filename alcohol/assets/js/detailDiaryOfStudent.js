
function fillDataTaleDiaryDetail(){
    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        url: "http://localhost:8080/teacher/findDiaryByStudent/" + localStorage.getItem('detail_student_id'),
        type: 'GET',
        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            let content = `   <tr>
            <th>Thời gian</th>
            <th>Nội dung</th>
        
        </tr>`;
            for (let i = 0; i < data.length; i++) {
                content += `<tr>
<td>${data[i].date}</td>
<td>${data[i].content}</td>
                         </tr>`
            }
            document.getElementById("diaryDetailStudent").innerHTML = content;
            document.getElementById("detailDiaryStudent").innerHTML = "Chi tiết nhật ký học sinh "+data[0].student.appUser.displayName ;

        }
    });

}


function firstLoad(){
    fillDataTaleDiaryDetail();

}
