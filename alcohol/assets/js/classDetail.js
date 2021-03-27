function fillDataTaleClassDetail() {
    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        url: "http://localhost:8080/teacher/findStudentByClass/" + localStorage.getItem('detail_class_id'),
        type: 'GET',
        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            let content = `   <tr>
            <th>Tên học viên</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Tình trạng học tập</th>
            <th>Xem nhạt ký học tập</th>
            <th>Viết nhật ký học viên</th>
        
        </tr>`;
            for (let i = 0; i < data.length; i++) {
                content += `<tr>
<td>${data[i].appUser.displayName}</td>
<td>${data[i].appUser.phone}</td>
<td>${data[i].appUser.address}</td>
<td>${data[i].status.name}</td>
<td><button value="${data[i].id}" onclick="checkDetailDiary($(this))">Detail</button></td>
<td><button value="${data[i].id}" onclick="showFormCreateDiaryForStudent($(this))">Tạo nhật ký</button></td> 
                         </tr>`
            }
            document.getElementById("classDetail").innerHTML = content;
        }
    });
}
function fillDataTaleDiaryDetail(){
    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        url: "http://localhost:8080/teacher/findDiaryByClass/" + localStorage.getItem('detail_class_id'),
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
            document.getElementById("diaryDetail").innerHTML = content;
            document.getElementById("className").innerHTML = "Chi tiết lớp "+data[0].classes.name ;

        }
    });

}


function firstLoad(){
    fillDataTaleClassDetail();
    fillDataTaleDiaryDetail();

}

function checkDetailDiary(e){
    localStorage.setItem('detail_student_id',e.val())
    window.location.replace("detailDiaryOfStudent.html");


}
function showFormCreateDiaryForStudent(e){
    localStorage.setItem('diary_student_id',e.val());
    localStorage.setItem('select_diary',"student");
    window.location.replace("createDiaryForm.html");

}