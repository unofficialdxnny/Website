var ___isMobileDevice;
const isMobileDeviceCheck = () => {
    const mobileOsRegExp = "(Android|webOS|iPhone|iPod)";
    if(screen.width < 500 || navigator.userAgent.match('/'+mobileOsRegExp+'/i')) {
        ___isMobileDevice = true;
        window.alert('Currently The Site Is Not Mobile Friendly');
        const Spotify = document.getElementById("Spotify-now-playing");



        document.getElementById("heading").style.padding = "0px 0px 0px 0px";


        Spotify.style.width = "350px";
        document.getElementById("Spotify-now-playing").style.padding = "500px 325px 0px 0px";


    }






    if (___isMobileDevice) {
        if (typeof window.orientation === "undefined") {
            ___isMobileDevice = false; 
        }
    }
    if (typeof navigator.userAgentData != "undefined" && !navigator.userAgentData.mobile) {
        ___isMobileDevice = false; 
    }
    if ( typeof window.orientation !== "undefined" && ___isMobileDevice ) {
        if (window.navigator.maxTouchPoints > 1 && (navigator.userAgentData.mobile || localStorage.mobile || 'ontouchstart' in document)) {
            // mobile device found
            console.log('Is mobile device!'); 
        }
    }
}
window.onresize = () => {
    isMobileDeviceCheck();
}
isMobileDeviceCheck();