setInterval(() => {
  if (window.location.pathname === "/") {
    [
      ...[...document.querySelector("main").childNodes[0].children]
        .map((post) => [...post.children])
        .map((content) => {
          let contentIndex = 0;
          if (content.length === 3) {
            contentIndex = 1;
          }
          return content[contentIndex];
        })
        .map((innerContent) => innerContent.children)
        .map((contents) => [...[...contents][0].children].map((v) => v)),
    ].map((a) =>
      a.map((b) => {
        [
          "위코드",
          "wecode",
          "코드스테이츠",
          "코드숨",
          "패스트캠퍼스",
          "비전공자",
        ].map(
          (keyword) =>
            b.innerText.toLowerCase().includes(keyword) &&
            b.parentNode.parentNode.parentNode.remove()
        );
      })
    );
  }
}, 500);
