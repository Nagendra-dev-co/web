$(function () {
    $("#pingForm").on("submit", function (event) {
        console.log('form submitted');

        $("#form-submit-btn").attr("disabled", "disabled");

        $.ajax({
            url: 'http://localhost/web/action.php', ///TODO(Snake): replace the url as per the domain url.
            type: "POST",
            dataType: "json",
            success: function (data) {
                console.log(data);
            },
            error: function (error) {
                console.log(`Error ${error}`);
            }            
        });
    });
});