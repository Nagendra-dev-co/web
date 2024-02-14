$(function () {
    $("#pingForm").on("submit", function (event) {
        /// disable the submit button.
        $("#form-submit-btn").attr("disabled", "disabled");

        var formData = new FormData(this);

        const testType = formData.get("testType")

        let url = 'http://localhost/web/action1.php';

        if(testType === 'check_uptime' || testType === 'check_mac_id' || testType === 'check_serial_number') {
            url = 'http://tazz.bang.mpc.local/php/uptime.php';
        }

        $.ajax({
            url: url, 
            type: "POST",
            data: formData,
            enctype: 'multipart/form-data',           
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {
                console.log(data);
            },
            error: function (error) {
                console.log(`Error ${error}`);
            },
            complete: function(data) {
                /// enable the submit button.
                $("#form-submit-btn").removeAttr("disabled");
            }            
        });
    });

    $('#testType').change(function(){
        var selectedTest = $(this).val();
        if(selectedTest === 'check_uptime' || selectedTest === 'check_mac_id' || selectedTest === 'check_serial_number') {
            $('#passwordBox').removeClass("hide");
        } else {
            $('#passwordBox').addClass("hide");
        }
    });    
});
