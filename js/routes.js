function setMode(mode) {
    localStorage.setItem("mode", mode || "default");
}

function getRootUrl() {
    const mode = localStorage.getItem("mode");
    switch (mode) {
        case "self-serve":
            return "/event-site/self-serve/index.html";
        default:
            return "/event-site/index.html";
    }
}