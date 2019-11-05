const worksheetId = "2051890492"; // Italy
const eventName = "Salone dei Pagamenti ";

const hookUrl = "https://hooks.zapier.com/hooks/catch/2293863/ou3bupc/";

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