document.addEventListener('DOMContentLoaded', function () {
    fetch('https://b3ndt3.dev/time.php')
        .then(function (response) {
            return response.json();
        }).then(function (html) {
        console.log(html);
        clock(html);
    }).catch(function (err) {
        console.warn('Something went wrong.', err);
    });
}, false);

let aMorning = ["let's talk after I have the next coffee, okay?", "I fear I'm abolutely not a morning person.", "what do you mean, I look tired?"];
let aNoon = ["time for lunch!", "oops, you got me spending too much time at twitter!", "what a wonderful day!"];
let aAfternoon = ["I'm probably holding myself up at the moment with something completely useless", "I should stop procrastinating, right?", "time to drink a glass of water!", "my cat Salem comes cudddddddddddddddddddddfgbhfd"];
let aEvening = ["I should spend time at my balcony as long as my flowers survive me.", "I'm probably playing something right now.", "family time!"];
let aNight = ["pssst! I should sleep now!", "sleeping time!", "either you're at the other side of the world or you're a night owl, huh?"];


function clock(time) {
    let hour = time.hour;
    let minute = time.minute;
    getSentence(hour, minute);
}

function getSentence(hour, minute) {
    let sentenceGroup = getSentenceGroup(hour);
    let lastPossibleIndex = sentenceGroup.length - 1;
    let sentence = Math.round(Math.random() * (lastPossibleIndex));
    let words = 'It is ' + hour + ':' + minute + ' in Hamburg, ' + sentenceGroup[sentence];
    speak(words);
}

function getSentenceGroup(hour) {
    if (hour >= 6 && hour <= 11) {
        return aMorning;
    }

    if (hour >= 11 && hour <= 13) {
        return aNoon;
    }

    if (hour >= 13 && hour <= 18) {
        return aAfternoon;
    }

    if (hour >= 18 && hour <= 22) {
        return aEvening;
    }

    return aNight;
}

function speak(words) {
    const bubble = document.getElementById('speakingBubble');
    bubble.innerHTML = words;
}

