function loadToal(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/admin/countStudentAllCenter",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json'
        },
        error: function (err) {
            console.log('Error!', err)
        },
        success: function (data) {
            document.getElementById("studentTotal").innerHTML=data
        }
    })
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/admin/countSubject",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json'
        },
        error: function (err) {
            console.log('Error!', err)
        },
        success: function (data) {
            document.getElementById("courseTotal").innerHTML=data
        }
    })
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/admin/countEvent",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json'
        },
        error: function (err) {
            console.log('Error!', err)
        },
        success: function (data) {
            document.getElementById("eventTotal").innerHTML=data
        }
    })
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/admin/countTeacher",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json'
        },
        error: function (err) {
            console.log('Error!', err)
        },
        success: function (data) {
            document.getElementById("teachertTotal").innerHTML=data
        }
    })
}
function loadTop3Teacher(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/admin/getTop3Teacher",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json'
        },
        error: function (err) {
            console.log('Error!', err)
        },
        success: function (data) {
            console.log(data)
            let content="";
            for (let i = 0; i < data.length; i++) {
               content+=`  <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src="assets/img/trainers/`+`${data[i].image}" class="img-fluid" alt="">
              <div class="member-content">
                <h4>${data[i].name}</h4>
                <span>${data[i].phone}</span>
                <p>
                ${data[i].address}
                </p>
                <div class="social">
                  <a href=""><i class="icofont-twitter"></i></a>
                  <a href=""><i class="icofont-facebook"></i></a>
                  <a href=""><i class="icofont-instagram"></i></a>
                  <a href=""><i class="icofont-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>`
            }
        document.getElementById("top3Teacher").innerHTML=content;
        }
    })

}
function loadByRole(){
    switch (localStorage.getItem('role')){
        case "ROLE_ADMIN":
            document.getElementById("drop_admin").innerHTML=`<li class="drop-down">
             <a href="#">Admin</a>
           <ul>
                <li><a href="createForm/createStudent.html">Tạo tài khoản học viên</a></li>
                <li><a href="createForm/createWardenForm.html">Tạo tài khoản giáo vụ</a></li>
                <li><a href="createForm/createWardenForm.html">Tạo tài khoản giảng viện</a></li>
                <li><a href="#">Thêm lớp học mới</a></li>
                <li><a href="#">Thêm môn học mới</a></li>
                <li><a href="#">Tạo sự kiện</a></li>
                 <li><a href="#">Danh sách đăng ký tư vấn</a></li>
                 <li><a href="#">Thống kê học viên theo giáo viên</a></li>
                <li><a href="#">Điểm trung bình các lớp</a></li>
              </ul>
         </li>`
            break;
        case "ROLE_TEACHER":
            document.getElementById("drop_teacher").innerHTML=`<li class="drop-down">
             <a href="#">Teacher</a>
           <ul>
                 <li><a href="#">Danh sách lớp học </a></li>
              </ul>
         </li>`
            break;
        case "ROLE_WARDEN":
            document.getElementById("drop_warden").innerHTML=`<li class="drop-down">
             <a href="#">Warden</a>
           <ul>
                <li><a href="#">Điểm trung bình và lý thuyết theo lớp</a></li>
                 <li><a href="#">Danh sách học viên</a></li>
              </ul>
         </li>`
            break;
        case "ROLE_STUDENT":
            document.getElementById("drop_student").innerHTML=`<li class="drop-down">
             <a href="#">Admin</a>
           <ul>
                <li><a href="#">Deep Drop Down 2</a></li>
                 <li><a href="#">Deep Drop Down 3</a></li>
                 <li><a href="#">Deep Drop Down 4</a></li>
                <li><a href="#">Deep Drop Down 5</a></li>
              </ul>
         </li>`
            break;
        default:
            break;
    }
}
