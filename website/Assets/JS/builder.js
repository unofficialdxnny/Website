function generateCSS() {

    const selectedController = document.getElementById("name").value;
    console.log("Selected Controller:", selectedController);

    if (selectedController === "Playstation 3") {
        console.log("ps3")
    }
  
    const cssContent = `
      body {
        background-color: ${backgroundColor};
        color: ${fontColor};
      }
    `;

    const blob = new Blob([cssContent], { type: "text/css" });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "gamepad.css";
    downloadLink.click();

    // Clean up the object URL after the download link is clicked
    URL.revokeObjectURL(url);
}
