$(document).ready((function () {
    $.get("https://downloadtool.auto.io.vn/footer.html",
        (function (data, status) {
            console.log(data),
                $("#contact-us").html(data)
        })
    )
}));
