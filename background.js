function getRoot(element) {
    return Array.from(element.childNodes[0].children);
}

function getChildren(element) {
    return element.children;
}

function getContentItem(content) {
    let contentIndex = 0;
    if (content.length === 3) {
        contentIndex = 1;
    }
    return content[contentIndex];
}

function getChildrenArray(contents) {
    return Array.from(contents[0].children);
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
            .map(getChildren)
            .map(getContentItem)
            .map(getChildren)
            .flatMap(getChildrenArray)
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
