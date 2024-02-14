

$(function () {
    $("#pingForm").on("submit", function (event) {
        /// disable the submit button.
        $("#form-submit-btn").attr("disabled", "disabled");

        var formData = new FormData(this);

        $.ajax({
            url: 'http://tazz.bang.mpc.local/php/uptime.php', 
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
});
