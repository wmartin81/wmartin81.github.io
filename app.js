(function(window, document){
    const greetings = [
        "Howdy, partner!",
        "BOO!",
        "Always be yourself! ... Unless you can be Batman, then, always be Batman",
        "Hi!",
        "I come in peace!",
        "Put down the churros",
        "‘Sup?",
        "Hello, my name is Wilbi ^_^",
        "I am Batman.",
        "Yo!",
        "Whaddup",
        "Hi! Long time no see!"
    ];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    function showGreeting(){
        var h1 = document.getElementById('greeting');
        h1.textContent = greetings[getRandomInt(0, greetings.length)];
    }

    window.onload = showGreeting;
})(window, document);