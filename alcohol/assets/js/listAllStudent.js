
function fillDataTaleAllStudent(url){
    let subContent=[];
    getSubContent(subContent);
    console.log(subContent)
    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        url: url,
        type: 'GET',
        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            let content = `   <tr>
            <th>Tên</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Lớp học</th>
            <th>Bảng điểm</th>
            <th>Trạng thái</th>
            <th>Thay đổi trạng thái</th>
        
        </tr>`;
            for (let i = 0; i < data.length; i++) {
                content += `<tr>
<td>${data[i].appUser.displayName}</td>
<td>${data[i].appUser.address}</td>
<td>${data[i].appUser.phone}</td>
<td>${data[i].classes.name}</td>
<td><button value="${data[i].id}" onclick="showScoreDetail($(this))">Score detail</button></td>
<td>${data[i].status.name}</td>
<td><select id="${data[i].id}" onchange="changeStudentStatus($(this))">${subContent[0]}</select></td>
                         </tr>`
            }
            document.getElementById("listAllStudent").innerHTML = content;
        }
    });

}
function getSubContent(subContent){

    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        url: "http://localhost:8080/warden/findAllStatus",
        type: 'GET',
        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            let str="<option>Change</option>";
            for (let i = 0; i < data.length; i++) {
                str += `<option value="${data[i].id}">${data[i].name}</option>`;
            }
            subContent.push(str)
        }
    });

}

function firstLoad(){
    fillDataTaleAllStudent("http://localhost:8080/warden/findAllStudent");
}
function changeStudentStatus(e){
    let student_id=e.attr('id');
    let status_íd=e.val();
    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        url: "http://localhost:8080/warden/editStudentStatus?status_id="+status_íd+"&student_id="+student_id,
        type: 'PUT',
        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
          // fillDataTaleAllStudent("http://localhost:8080/warden/findAllStudent");
            searchByName();
        }
    });

}
function showScoreDetail(e){
    localStorage.setItem('score_student_id',e.val());
    window.location.replace("studentScoreDetail.html");
}
function searchByName(){
let name=$('#searchName').val();
let url;
if (name==""){
    url ="http://localhost:8080/warden/findAllStudent";
}else {
    url="http://localhost:8080/warden/findStudentLikeAppUserName/"+name;

}
fillDataTaleAllStudent(url);
}
