const worksheetId = "366714174";
const eventName = "FR event OB";

const hookUrl = "https://hooks.zapier.com/hooks/catch/5450443/o278hwf/";

$("#contact-form").submit(function (e) {
    e.preventDefault();

    const formParameters = $("#contact-form").serialize();

    $.get(`${hookUrl}?${formParameters}&event=${eventName}&worksheetId=${worksheetId}`, function () {
        $("#contact-done").removeClass("hide");
        $("#email").addClass("hide");
        $(".steps").addClass("hide");
        $("#radio-wrapper").addClass("hide");
        $("#submit").addClass("hide");
    });
})