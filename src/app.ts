import {getRandomInt} from './math-helper'
import {greetings} from './greetings';

(function(window, document){

    function showGreeting(){
        var h1 = document.getElementById('greeting');
        h1.textContent = greetings[getRandomInt(0, greetings.length)];
    }

    window.onload = showGreeting;
})(window, document);
