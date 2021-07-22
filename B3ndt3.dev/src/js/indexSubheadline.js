let textlines = ['Developer', 'Gamer', 'Author'];

document.addEventListener('DOMContentLoaded', function () {
    addSubHeadline();
}, false);

function addSubHeadline() {
    let wrapper = document.getElementById('wrapper');
    addInitialSubheadline(wrapper);
    changeWord(wrapper)
}

function addInitialSubheadline(wrapper) {
    wrapper.innerHTML = "<div class='subHeadline' style='animation: typing 1.5s steps(10), blink .5s infinite;\n" +
        "    width: 10ch;'>Developer </div>";
}

function changeWord(wrapper) {
    let timer = setInterval(counter, 3000);
    let count = 0;

    function counter() {
        count++;
        if (count >= textlines.length) {
            count = 0;
        }
        addWord(count, wrapper)
    }
}

function addWord(count, wrapper) {
    let word = textlines[count];
    let wordLength = word.length + 1;
    let htmlOutput = "";
    let steps = "steps(" + wordLength + ")";
    htmlOutput = "<div class='subHeadline' style='animation: typing 1.5s " + steps + ", blink .5s infinite;\n" +
        "    width: " + wordLength + "ch;'>" + textlines[count] + "</div>";
    wrapper.innerHTML = htmlOutput;
}
