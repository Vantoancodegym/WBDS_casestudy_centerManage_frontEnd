function createNewDiary(){
    let date=$('#date').val();
    let content=$('#content').val();
    let newDiary={
        date:date,
        content:content,
        classes:{
            id:localStorage.getItem('diary_class_id')
        }
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/teacher/diary/create",
        type: 'POST',
        data: JSON.stringify(newDiary),

        error: function (err) {
            alert("lỗi")
        },
        success: function (data) {
            alert("Tạo mới thành công")

        }
    });
}