function fillDataLivechatContent() {
    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/findAllLiveChat",
        type: 'GET',
        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            let content ="";
            for (let i = 0; i < data.length; i++) {
                content += `<li class="left clearfix">
                     <span class="chat-img1 pull-left">
                     <img src="${data[i].appUser.avatar}" alt="User Avatar" class="img-circle">
                     </span>
                                <div class="chat-body1 clearfix">
                                    <p><i><b>${data[i].appUser.displayName} &nbsp &nbsp</b></i>${data[i].content}</p>
<!--                                    <div class="chat_time pull-right">09:40PM</div>-->
                                </div>
                            </li>`
            }
            document.getElementById("chatContent").innerHTML = content;
        }
    });
}

function firstLoad(){
    setInterval(fillDataLivechatContent,100)
    // fillDataLivechatContent();
}
function sendMessage(){
    let content=$('#messContent').val();
    let newMess={
        content:content
    }
    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/insertLiveChat",
        type: 'POST',
        data: JSON.stringify(newMess),
        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            fillDataLivechatContent();
        }
    })
    document.getElementById('messContent').value="";
}