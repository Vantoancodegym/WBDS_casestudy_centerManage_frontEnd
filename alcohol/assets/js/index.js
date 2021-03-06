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
                <li><a href="createForm/createStudent.html">T???o t??i kho???n h???c vi??n</a></li>
                <li><a href="createForm/createWardenForm.html">T???o t??i kho???n gi??o v???</a></li>
                <li><a href="createForm/createWardenForm.html">T???o t??i kho???n gi???ng vi???n</a></li>
                <li><a href="createForm/createSubject.html">Th??m m??n h???c m???i</a></li>
                <li><a href="createForm/createClass.html">Th??m l???p h???c m???i</a></li>
                <li><a href="writeEvent.html">T???o s??? ki???n</a></li>
                 <li><a href="customer_register.html">Danh s??ch ????ng k?? t?? v???n</a></li>
                 <li><a href="userList.html">D???nh s??ch User</a></li>
                <li><a href="avgPointInClass.html">??i???m trung b??nh c??c l???p</a></li>
              </ul>
         </li>`
            break;
        case "ROLE_TEACHER":
            document.getElementById("drop_teacher").innerHTML=`<li class="drop-down">
             <a href="#">Teacher</a>
           <ul>
                 <li><a href="listClassByTeacher.html">Danh s??ch l???p h???c </a></li>
              </ul>
         </li>`
            break;
        case "ROLE_WARDEN":
            document.getElementById("drop_warden").innerHTML=`<li class="drop-down">
             <a href="#">Warden</a>
           <ul>
                 <li><a href="allStudentList.html">Danh s??ch h???c vi??n</a></li>
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
