var inputName = document.getElementById("input-name");
var inputEmail = document.getElementById("input-email");


function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    var email = document.getElementById("input-email").value;

    if (validateEmail(email)) {
        next.classList.remove("disabled");
    } else {
        next.classList.add("disabled");
    }
    return false;
}

next.addEventListener("click", nextInput);
inputName.addEventListener("keyup", enableBtn);
inputEmail.addEventListener("keyup", validate);
var count = 1;
function enableBtn() {
    if (count === 1 & inputName.value.length > 3) {
        next.classList.remove("disabled");
    } else {
        next.classList.add("disabled");
    }
}
function nextInput() {
    var next = document.getElementById("next");
    var submit = document.getElementById("submit");
    var name = document.getElementById("name");
    var email1 = document.getElementById("email");
    var radioBtn = document.getElementById("radio-wrapper");
    var step = document.getElementById("step-count");
    var email = document.getElementById("input-email").value;


    if (count === 1 & inputName.value.length > 3) {
        email1.classList.remove("hide");
        name.classList.add("hide");
        count++;
        step.innerHTML = count;
        next.classList.add("disabled");
    } else if (validateEmail(email)) {
        radioBtn.classList.remove("hide");
        email1.classList.add("hide");
        count++;
        step.innerHTML = count;
        next.classList.add("hide");
        submit.classList.remove("hide");
        document.getElementById("data").classList.add("selected-product");
        document.getElementById("message").value = "Sent from the Visa Forum."
    }
}

document.getElementById("radio-wrapper").addEventListener("click", radioCheck);

function radioCheck() {
    var product = document.querySelector("input[name=product]:checked").value;
    if (product === "data-api") {
        document.getElementById("payments").classList.remove("selected-product");
        document.getElementById("data").classList.add("selected-product");
    } else if (product === "payments-api") {
        document.getElementById("data").classList.remove("selected-product");
        document.getElementById("payments").classList.add("selected-product");
    } else if (product === "both") {
        document.getElementById("data").classList.add("selected-product");
        document.getElementById("payments").classList.add("selected-product");
    }
}


$(document).ready(function () {
    $(".btn-select").each(function (e) {
        var value = $(this).find("ul li.selected").html();
        if (value != undefined) {
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
    });
});


var handled = false;
$(document).on('click touchstart', '.btn-select', function (e) {
    e.preventDefault();
    var ul = $(this).find("ul");
    if (e.type == "touchstart") {
        handled = true;
        if ($(this).hasClass("active")) {
            if (ul.find("li").is(e.target) && !$(e.target).hasClass("product")) {
                var target = $(e.target);
                target.addClass("selected").siblings().removeClass("selected");
                var value = target.html();
                $(this).find(".btn-select-input").val(value);
                $(this).find(".btn-select-value").html(value);
            } else if (ul.find("li").is(e.target) && $(e.target).hasClass("product")) {
                var target = $(e.target);
                target.addClass("selected").siblings().removeClass("selected");
                var value = target.html();
                $(this).find(".btn-select-input").val(value);
                $(this).find(".btn-select-value").html(value);
            }
            ul.hide();
            $(this).removeClass("active");
        }
        else {
            $('.btn-select').not(this).each(function () {
                $(this).removeClass("active").find("ul").hide();
            });
            ul.slideDown(300);
            $(this).addClass("active");
        }
    } else if (e.type == "click" && !handled) {
        if ($(this).hasClass("active")) {
            if (ul.find("li").is(e.target) && !$(e.target).hasClass("product")) {
                var target = $(e.target);
                target.addClass("selected").siblings().removeClass("selected");
                var value = target.html();
                $(this).find(".btn-select-input").val(value);
                $(this).find(".btn-select-value").html(value);
            } else if (ul.find("li").is(e.target) && $(e.target).hasClass("product")) {
                var target = $(e.target);
                target.addClass("selected").siblings().removeClass("selected");
                var value = target.html();
                $(this).find(".btn-select-input").val(value);
                $(this).find(".btn-select-value").html(value);
            }
            ul.hide();
            $(this).removeClass("active");
        }
        else {
            $('.btn-select').not(this).each(function () {
                $(this).removeClass("active").find("ul").hide();
            });
            ul.slideDown(300);
            $(this).addClass("active");
        }
    }
});
