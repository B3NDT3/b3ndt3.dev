var textlines = ['Developer', 'Gamer', 'Author'];

document.addEventListener('DOMContentLoaded', function () {
      addSubHeadline();
}, false);

function addSubHeadline() { 
   addInitialSubHeadline();
   var timer = setInterval(counter, 3000);
   var count = 0;
   function counter() {
      count++;    
      if(count>=textlines.length){
      count=0;
      } 
   changeSubHeadline(count); 
   }
}

function addInitialSubHeadline() {
   var wrapper = document.getElementById('wrapper');
   wrapper.innerHTML = "<div class='subHeadline Developer'>Developer </div>";
   if (!wrapper) {
      return;
   }
}

function changeSubHeadline(count) {
      var htmlOutput = "";
      htmlOutput = "<div class='subHeadline " + textlines[count] + "'>" + textlines[count] + "</div>";
      wrapper.innerHTML = htmlOutput;
   }

document.addEventListener('DOMContentLoaded', () => {
   console.log('what');
   const themeDark = document.querySelector('body');
   const themeToggle = document.getElementById('theme-toggle');
   themeToggle.addEventListener('click', () => {
      if (themeDark.classList.contains('dark')) {
         themeDark.classList.remove('dark');
         themeToggle.innerText = 'switch to dark mode';
      } 
      else {
         themeDark.classList.add('dark');
         themeToggle.innerText = 'switch to light mode';
      }
   })
})



