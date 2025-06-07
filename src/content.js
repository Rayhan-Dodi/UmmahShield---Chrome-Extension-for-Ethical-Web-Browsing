const badWords = [
  "porn", "xxx", "sex", "nude", "18+", "hentai", "hot girl",
  "nsfw", "boobs", "ass", "milf", "anal"
];

function cleanSearchResults() {
  const elements = document.querySelectorAll("a, span, div");

  elements.forEach((el) => {
    if (el.innerText) {
      const text = el.innerText.toLowerCase();
      for (let word of badWords) {
        if (text.includes(word)) {
          el.remove();
          break;
        }
      }
    }
  });
}

function cleanYouTube() {
  const titles = document.querySelectorAll("a#video-title");
  titles.forEach((title) => {
    const text = title.innerText.toLowerCase();
    for (let word of badWords) {
      if (text.includes(word)) {
        title.closest("ytd-video-renderer").remove();
      }
    }
  });
}

setInterval(() => {
  cleanSearchResults();
  cleanYouTube();
}, 2000);