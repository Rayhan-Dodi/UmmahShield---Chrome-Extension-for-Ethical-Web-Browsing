const blockedSites = [
  "*://*.pornhub.com/*",
  "*://*.xvideos.com/*",
  "*://*.xnxx.com/*",
  "*://*.xhamster.com/*",
  "*://*.hentairead.com/*",
  "*://*.rule34.xxx/*",
  "*://*.spankbang.com/*"
];

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  },
  { urls: blockedSites },
  ["blocking"]
);