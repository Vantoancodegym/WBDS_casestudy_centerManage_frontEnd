function firstLoad(){
    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        url: "http://localhost:8080/teacher/classes",
        type: 'GET',
        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            let content=`   <tr>
            <th>Tên giáo viên</th>
            <th>Tên lớp</th>
            <th>Danh mục</th>
            <th>Thông tin chi tiết lớp</th>
            <th>Viết nhật ký cho lớp</th>
        
        </tr>`;
            for (let i = 0; i < data.length; i++) {
                content+=`<tr>
<td>${data[i].display_name}</td>
<td>${data[i].classesName}</td>
<td>${data[i].category}</td>
<td><button value="${data[i].id}" onclick="checkDetail($(this))">Detail</button></td>
<td><button value="${data[i].id}" onclick="showFormCreateDiary($(this))">Tạo nhật ký</button></td> 
                         </tr>`
            }
            document.getElementById("listClassByTeacher").innerHTML=content;
        }});
}
function checkDetail(e){
    localStorage.setItem('detail_class_id',e.val());
    window.location.replace("classDetail.html");


}
function showFormCreateDiary(e){
    localStorage.setItem('diary_class_id',e.val());
    window.location.replace("createDiaryForm.html");

}