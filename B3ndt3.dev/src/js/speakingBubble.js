document.addEventListener('DOMContentLoaded', function () {
    fetch('https://b3ndt3.dev/time.php')
        .then(function (response) {
            // The API call was successful!
            return response.json();
        }).then(function (html) {
            // This is the HTML from our response as a text string
            console.log(html);
            clock(html);
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });


  
}, false);

var aMorning = [", let's talk after I have the next coffee, okay?", ", I fear I'm abolutely not a morning person.", ", what do you mean, I look tired?"];
var aNoon = [", time for lunch!", ", oops, you got me spending too much time at twitter!", ", what a wonderful day!"];
var aAfternoon = [", I'm probably holding myself up at the moment with something completely useless", ", I should stop procrastinating, right?", ". Time to drink a glass of water!"];
var aEvening = [", I should spend time at my balcony as long as my flowers survive me.", ", I'm probably playing something right now.", ", family time!"];
var aNight = [", pssst! I should sleep now!", ", sleeping time!", ", either you're at the other side of the world or you're a night owl, huh?"];


function clock(time) {

    var {hour,minute} = time;
    var hour = hour;
    var minute = minute;
    getSentence(hour, minute);
}

function getSentence(hour, minute) {
    var hour = hour;
    var minute = minute;
    if(hour>0 && hour<=6){
         var sentence = Math.round(Math.random() * (2 - 0)) + 0;
        var words = 'It is ' +hour+':'+minute+' in Hamburg'+aNight[sentence];
    } else if(hour>=6 && hour<= 11) {
        var sentence = Math.round(Math.random() * (2 - 0)) + 0;
        var words = 'It is ' + hour + ':' + minute + ' in Hamburg' +aMorning[sentence];
    } else if (hour >11 && hour <=  13) {
        var sentence = Math.round(Math.random() * (2 - 0)) + 0;
        var words = 'It is ' + hour + ':' + minute + ' in Hamburg' + aNoon[sentence];
    } else if (hour >13 && hour <= 18) {
        var sentence = Math.round(Math.random() * (2 - 0)) + 0;
        var words = 'It is ' + hour + ':' + minute + ' in Hamburg' +aAfternoon[sentence];
    }
    else if (hour > 18 && hour <= 22){
        var sentence = Math.round(Math.random() * (2 - 0)) + 0;
        var words = 'It is ' + hour + ':' + minute + ' in Hamburg' +aEvening[sentence];
    }
    else {
        var sentence = Math.round(Math.random() * (2 - 0)) + 0;
        var words = 'It is ' + hour + ':' + minute + ' in Hamburg' + aNight[sentence];
    }

        speak(words);
}


function speak (words) {
   
    const bubble = document.getElementById('speakingBubble');
    bubble.innerHTML = words;
}