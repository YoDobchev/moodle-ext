document.querySelectorAll("a").forEach((a) => {
    if (a.href === "https://learn.fmi.uni-sofia.bg/login/index.php") {
        window.location.href = "https://learn.fmi.uni-sofia.bg/login/index.php";
    }
    if (a.href.endsWith("?forcedownload=1")) {
        a.href = a.href.replace("?forcedownload=1", '');
    }
});

document.addEventListener("click", (ev) => {
    if (ev.target && ev.target.nodeName === 'A') {
        document.querySelectorAll("a").forEach((a) => {
            if (a.href.endsWith("?forcedownload=1")) {
                a.href = a.href.replace("?forcedownload=1", '');
            }
        });
    }
});
