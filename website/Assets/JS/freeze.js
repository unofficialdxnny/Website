
setTimeout(function() {
    var iframe = document.getElementById("gamepadIframe").contentWindow.document;

    // Disable scrolling within the iframe
    iframe.body.style.overflow = "hidden";

    // Prevent interaction by covering the iframe with a transparent div
    var overlay = iframe.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "transparent";
    overlay.style.zIndex = "9999";
    iframe.body.appendChild(overlay);
}, 10000); // 10 seconds
