supportedMoodles = [
    "https://learn.fmi.uni-sofia.bg",
    "https://elearn.uni-sofia.bg"
];

document.querySelectorAll("a").forEach((a) => {
    for (let moodle of supportedMoodles) {
        if (a.href === `${moodle}/login/index.php`) {
            window.location.href = `${moodle}/login/index.php`;
        }
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
