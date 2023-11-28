browser.webRequest.onBeforeRequest.addListener(
    function(details) {
        const url = details.url;
        // Check if the URL is already redirected to new.reddit.com
        if (!url.includes("://new.reddit.com/")) {
            return { redirectUrl: url.replace("www.reddit.com", "new.reddit.com") };
        }
    },
    {urls: ["*://www.reddit.com/*"]},
    ["blocking"]
);
