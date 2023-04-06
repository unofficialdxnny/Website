var audio = document.getElementById("myAudio");
		var timeout;

		function startTimer() {
		  timeout = setTimeout(playAudio, 1000); // set timer for 10 seconds
		}

		function resetTimer() {
		  clearTimeout(timeout);
		  startTimer();
		}

		function playAudio() {
		  audio.play();
		}

		// add event listeners to detect user activity
		document.addEventListener("mousemove", resetTimer);
		document.addEventListener("keypress", resetTimer);
		document.addEventListener("click", resetTimer);

		// start the timer on page load
		startTimer();