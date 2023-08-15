console.log('This is separate JS file');
//option1: directly set ont the html element
//<button onclick="console.log(65)">Another button</button>

//option2
// IMportant: We will use this sometimes
//<button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//option3
//<button id="make-blue">Make Blue</button>
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// option3 another 
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// option4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink)

function makePink(){
  document.body.style.backgroundColor = 'pink';
}

// option4 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
});

// option4 Final
// IMportant: We will use this sometimes
// document.getElementById('make-goldenrod').addEventListener('click', function(){})
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
});

