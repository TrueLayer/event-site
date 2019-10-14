var idleTime = function () {
    var time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function logout() {
        window.location.href = getRootUrl();
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 420000);
    }
};

idleTime();