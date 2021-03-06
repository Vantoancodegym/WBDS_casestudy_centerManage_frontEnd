function loadToal(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/admin/countStudentAllCenter",

        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),

            // // 'Accept': 'application/json',
            // // 'Content-Type': 'application/json'
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
            // Authorization: 'Bearer ' + localStorage.getItem('token'),
            // // 'Accept': 'application/json',
            // // 'Content-Type': 'application/json'
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
            // Authorization: 'Bearer ' + localStorage.getItem('token'),
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
            // Authorization: 'Bearer ' + localStorage.getItem('token'),
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
            // Authorization: 'Bearer ' + localStorage.getItem('token'),
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
              <img src=${data[i].image} class="img-fluid" alt="">
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
function loadTop3Subject(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/admin/getTop3Subject",
        headers: {
            // Authorization: 'Bearer ' + localStorage.getItem('token'),
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
                content+=`<div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="course-item">
              <img src=${data[i].image} style="width: 360px; height: 360px"  alt="...">
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4>${data[i].name}</h4>
                </div>
              </div>
            </div>`
            }
            document.getElementById("top3subject").innerHTML=content;
        }
    })

}
function loadAllEvent(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/admin/findAllEvent",
        headers: {
            // Authorization: 'Bearer ' + localStorage.getItem('token'),
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
                content+=` <div class="row"><div class="col-md-12 d-flex align-items-stretch">
            <div class="card">
              <div class="card-img">
                <center><img src=${data[i].image} alt="..." style="width: 700px"></center>
              </div>
              <div class="card-body">
                <h5 class="card-title"><a href="">${data[i].name}</a></h5>
                <p class="font-italic text-center">${data[i].date}</p>
                <p class="card-text">${data[i].content}</p>
              </div>
            </div></div>`
            }
            document.getElementById("allEvent").innerHTML=content;
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
                <li><a href="createForm/createSubject.html">Thêm môn học mới</a></li>
                <li><a href="createForm/createClass.html">Thêm lớp học mới</a></li>
                <li><a href="writeEvent.html">Tạo sự kiện</a></li>
                 <li><a href="customer_register.html">Danh sách đăng ký tư vấn</a></li>
                 <li><a href="userList.html">Dạnh sách User</a></li>
                <li><a href="avgPointInClass.html">Điểm trung bình các lớp</a></li>
              </ul>
         </li>`
            break;
        case "ROLE_TEACHER":
            document.getElementById("drop_teacher").innerHTML=`<li class="drop-down">
             <a href="#">Teacher</a>
           <ul>
                 <li><a href="listClassByTeacher.html">Danh sách lớp học </a></li>
              </ul>
         </li>`
            break;
        case "ROLE_WARDEN":
            document.getElementById("drop_warden").innerHTML=`<li class="drop-down">
             <a href="#">Warden</a>
           <ul>
                 <li><a href="allStudentList.html">Danh sách học viên</a></li>
              </ul>
         </li>`
            break;
        case "ROLE_STUDENT":
            document.getElementById("drop_student").innerHTML=`<li class="drop-down">
             <a href="#">Student</a>
         </li>`
            break;
        default:
            break;
    }
}
function showProfile(){
    if (localStorage.getItem('role')=="null"||localStorage.getItem('role')==null){
        window.location.replace("login.html");

    }else {
        window.location.replace("profile.html");
    }
}
function showLiveChat(){
    if (localStorage.getItem('role')=="null"||localStorage.getItem('role')==null){
        window.location.replace("login.html");

    }else {
        window.location.replace("livechat.html");
    }
}
