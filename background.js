function getRoot(element) {
    return Array.from(element.childNodes[0].children);
}

function getChildren(element) {
    let contentIndex = 0;
    if (element.children.length === 3) {
        contentIndex = 1;
    }
    return Array.from(element.children[contentIndex].children[0].children);
}

function removeIgnoredKeyword(keywords) {
    return function (element) {
        keywords.map(
            (keyword) => {
                if (new RegExp(keyword, 'i').test(element.innerText)) {
                    element.parentNode.parentNode.parentNode.remove();
                }
            }
        );
    }
}

setInterval(() => {
    if (window.location.pathname === "/") {
        getRoot(document.querySelector("main"))
            .flatMap(getChildren)
            .forEach(removeIgnoredKeyword([
                "위코드",
                "wecode",
                "코드스테이츠",
                "코드숨",
                "패스트캠퍼스",
                "비전공자",
            ]));
    }
}, 500);
