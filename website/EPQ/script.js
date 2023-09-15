/*
 * typingEffect()
 * It types an array of texts in a random order. I like random stuff🙃
 */
function typingEffect() {
    const contactTexts = shuffleArray([
        'Information Retrieval and Research',
        'Personalized Recommendations',
        'Automation',
        'Content Creation',
        'Language Translation',
        'Virtual Assistants',
        'Data Analysis',
        'Image and Video Processing',
        'Healthcare',
        'Finance',
        'Education',
        'Customer Service',
        'Autonomous Vehicles',
        'Security',
        'Entertainment',
        'Environmental Monitoring',
        'Accessibility',
        'Innovation',
        'E-commerce',
        'Language Learning',
        'Innovaton'
    ]);
    
          const typedtext = document.getElementsByClassName("typedtext")[0];
    let removing = false;
    let idx = char = 0;

    setInterval(() => { // We define the interval of the typing speed

        // If we do not reach the limit, we insert characters in the html
        if (char < contactTexts[idx].length) typedtext.innerHTML += contactTexts[idx][char];

        // 15*150ms = time before starting to remove characters
        if (char == contactTexts[idx].length + 15) removing = true;

        // Removing characters, the last one always
        if (removing) typedtext.innerHTML = typedtext.innerHTML.substring(0, typedtext.innerHTML.length - 1);

        char++; // Next character

        // When there is nothing else to remove
        if (typedtext.innerHTML.length === 0) {

            // If we get to the end of the texts we start over
            if (idx === contactTexts.length - 1) idx = 0
            else idx++;

            char = 0; // Start the next text by the first character
            removing = false; // No more removing characters
        }

    }, 75); // Typing speed, 150 ms

}
typingEffect();
function shuffleArray(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the imageContainer div
    const imageContainer = document.getElementById("imageContainer");

    // Array of image URLs to load
    const imageUrls = [
        "voice.png",
        "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/homepod/ios14-siri-icon.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png",
        // Add more image URLs as needed
    ];

    // Loop through the imageUrls array and create image elements
    imageUrls.forEach(function (imageUrl) {
        const img = document.createElement("img");
        img.src = imageUrl;
        imageContainer.appendChild(img);
    });
});
