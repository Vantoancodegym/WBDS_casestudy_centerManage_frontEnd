
function fillDataTaleAllScore(){
    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        url: "http://localhost:8080/warden/findScoreByStudent/"+localStorage.getItem('score_student_id'),
        type: 'GET',
        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            let content = `   <tr>
            <th>Tên môn học</th>
            <th>Điểm lý thuyết</th>
            <th>Điểm thực hành</th>
            <th>Điểm thái độ</th>
            <th>Điểm trung bình</th>
            <th>Sửa điểm</th>        
        </tr>`;
            for (let i = 0; i < data.length; i++) {
                let avgScore=calculateAvg(data[i].ccore_attitude,data[i].score_theory,data[i].score_lab);
                content += `<tr>
<td>${data[i].subject.name}</td>
<td><input style="width: 50px" value="${data[i].score_theory}" id="score_theory${data[0].id}"></td>
<td><input style="width: 50px" value="${data[i].score_lab}" id="score_lab${data[0].id}"></td>
<td><input style="width: 50px"  value="${data[i].ccore_attitude}" id="ccore_attitude${data[0].id}"></td>
<td>${avgScore}</td>
<td><button value="${data[i].id}" onclick="editScore($(this))">Edit</button></td>
                         </tr>`
            }
            document.getElementById("listStudentScore").innerHTML = content;
            document.getElementById("studentScoreDetail").innerHTML = "Bảng điểm học viên "+data[0].student.appUser.displayName;
        }
    });

}
function calculateAvg(a,b,c){
    return (a+b+c)/3;
}
function editScore(e){
    let id=e.val();
    let score_theory=$('#score_theory'+id).val();
    let score_lab=$('#score_lab'+id).val();
    let ccore_attitude=$('#ccore_attitude'+id).val();
    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        url: "http://localhost:8080/warden/editScoreByIdAndScore?id="+id+"&score_theory="+score_theory+"&score_lab="+score_lab+"&ccore_attide="+ccore_attitude,
        type: 'PUT',
        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            fillDataTaleAllScore();
            alert("Sửa thành công");
        }
    })
}

function firstLoad(){
    fillDataTaleAllScore();
}

