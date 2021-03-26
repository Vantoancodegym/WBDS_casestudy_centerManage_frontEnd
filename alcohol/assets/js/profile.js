$(document).ready(function () {
    $imgSrc = $('#imgProfile').attr('src');
    function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#imgProfile').attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
    $('#btnChangePicture').on('click', function () {
        // document.getElementById('profilePicture').click();
        if (!$('#btnChangePicture').hasClass('changing')) {
            $('#profilePicture').click();
        }
        else {
            // change
        }
    });
    $('#profilePicture').on('change', function () {
        readURL(this);
        $('#btnChangePicture').addClass('changing');
        $('#btnChangePicture').attr('value', 'Confirm');
        $('#btnDiscard').removeClass('d-none');
        // $('#imgProfile').attr('src', '');
    });
    $('#btnDiscard').on('click', function () {
        // if ($('#btnDiscard').hasClass('d-none')) {
        $('#btnChangePicture').removeClass('changing');
        $('#btnChangePicture').attr('value', 'Change');
        $('#btnDiscard').addClass('d-none');
        $('#imgProfile').attr('src', $imgSrc);
        $('#profilePicture').val('');
        // }
    });
});
function firstLoad(){
    console.log('Bearer ' + localStorage.getItem('token'))
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/currentUser",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json'
        },
        // dataType: 'json',
        success: function (data) {
            fillData(data)
        },
        error: function ( err) {
            alert("loi")
        }
    });

}
function fillData(data){
    let content="";
    content+=`     <div class="card-title mb-4">
                        <div class="d-flex justify-content-start">
                            <div class="image-container">
                                <img src=${data.avatar} id="imgProfile" style="width: 150px; height: 150px" class="img-thumbnail" />
                            </div>
                            <div class="userData ml-3">
                                <h2 class="d-block" style="font-size: 1.5rem; font-weight: bold"><a href="javascript:void(0);">${data.displayName}</a></h2>
                                <h6 class="d-block">${data.username}</h6>
                            </div>
                        
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="basicInfo-tab" data-toggle="tab" href="#basicInfo" role="tab" aria-controls="basicInfo" aria-selected="true">Basic information</a>
                                </li>
                                <li class="nav-item">
                                </li>
                            </ul>
                            <div class="tab-content ml-1" id="myTabContent">
                                <div class="tab-pane fade show active" id="basicInfo" role="tabpanel" aria-labelledby="basicInfo-tab">


                                    <div class="row">
                                        <div class="col-sm-3 col-md-2 col-5">
                                            <label style="font-weight:bold;">Address</label>
                                        </div>
                                        <div class="col-md-8 col-6">
                                            ${data.address}
                                        </div>
                                    </div>
                                    <hr />

                                    <div class="row">
                                        <div class="col-sm-3 col-md-2 col-5">
                                            <label style="font-weight:bold;">Phone</label>
                                        </div>
                                        <div class="col-md-8 col-6">
                                                                                    ${data.phone}

                                        </div>
                                    </div>
                                    <hr />


                                    <div class="row">
                                        <div class="col-sm-3 col-md-2 col-5">
                                            <label style="font-weight:bold;">Role</label>
                                        </div>
                                        <div class="col-md-8 col-6">
                                            ${data.role.name}
                                        </div>
                                    </div>
                                    <hr>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>`
    document.getElementById("profileUser").innerHTML=content;
}