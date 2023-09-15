/*
 * typingEffect()
 * It types an array of texts in a random order. I like random stuff🙃
 */
function typingEffect() {
    const contactTexts = shuffleArray([
        'How does AI impact our daily lives, from virtual assistants to recommendation systems?',
        'Can you explain the role of AI in personalized healthcare, such as AI-powered diagnostics and treatment recommendations?',
        'Have you experienced AI-driven content recommendations in streaming platforms and social media?',
        'How is AI shaping the future of transportation, including self-driving cars and intelligent traffic management?',
        'What are the creative applications of AI in art, music, and entertainment?',
        'How do AI-powered chatbots and virtual customer service agents enhance user experiences?',
        "Could you elaborate on AI's role in optimizing supply chains and logistics?",
        "What ethical challenges do we face with AI in hiring and recruitment processes?",
        'How are language translation services benefiting from AI advancements?',
        'What are some examples of AI-driven smart homes and IoT devices that simplify our daily routines?',
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

    }, 150); // Typing speed, 150 ms

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
