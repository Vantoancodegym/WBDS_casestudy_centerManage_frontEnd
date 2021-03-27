function createNewDiaryForClass(date, content) {
    let newDiary = {
        date: date,
        content: content,
        classes: {
            id: localStorage.getItem('diary_class_id')
        }
    }
    return newDiary;

}
function createNewDiaryForStudent(date, content) {
    let newDiary = {
        date: date,
        content: content,
        student: {
            id: localStorage.getItem('diary_student_id')
        }
    }
    return newDiary;

}

function createNewDiary(){
    let date=$('#date').val();
    let content=$('#content').val();
    let newDiary;
    if (localStorage.getItem('select_diary')=="classes"){
        newDiary=createNewDiaryForClass(date, content);

    }else if (localStorage.getItem('select_diary')=="student"){
        newDiary=createNewDiaryForStudent(date,content);

    }else {
        alert("Bạn chưa chọn học sinh hoặc lớp để viết nhật ký")
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
    localStorage.setItem('select_diary',null)
}