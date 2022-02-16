/*-------------------------------- Constants --------------------------------*/
const qbList =[
  {
    image: "../images/brett-favre.jpg",
    choices: ["Tom Brady", "Jim Kelly", "Greg Flaukler", "Brett Favre"],
    correctAnswer: 3,
    asked: false,
  },
  {
    image: "../images/cam-newton.jpg",
    choices: ["Micheal Vick", "Cam Newton", "Dante Culpepper", "Carson Wentze"],
    correctAnswer: 1,
    asked: false,
  },
  {
    image: "../images/joe-montana.jpg",
    choices: ["Joe Montana", "Cam Newton", "Dante Culpepper", "Carson Wentze"],
    correctAnswer: 0,
    asked: false,
  },
  {
    image: "../images/donovan-mcnabb.jpg",
    choices: ["Micheal Vick", "Cam Newton", "Donovan McNabb", "Carson Wentze"],
    correctAnswer: 2,
    asked: false,
  },
  {
    image: "../images/doug-williams.jpg",
    choices: ["Micheal Vick", "Cam Newton", "Donovan McNabb", "Doug Williams"],
    correctAnswer: 3,
    asked: false,
  },
  {
    image: "../images/drew-brees.jpg",
    choices: ["Drew Brees", "Peyton Manning", "Tom Brady", "Carson Wentze"],
    correctAnswer: 0,
    asked: false,
  },
  {
    image: "../images/joe-namath.jpg",
    choices: ["Wally Acksers", "Jim Kelly", "Joe Namath", "Terry Bradshaw"],
    correctAnswer: 2,
    asked: false,
  },
  {
    image: "../images/john-elway.jpg",
    choices: ["Jpe Montana", "Jim Kelly", "John Elway", "Terry Bradshaw"],
    correctAnswer: 2,
    asked: false,
  },
  {
    image: "../images/kurt-warner.jpg",
    choices: ["Kurt Warner", "Jim Kelly", "Drew Brees", "Terry Bradshaw"],
    correctAnswer: 0,
    asked: false,
  },
  {
    image: "../images/michael-vick.jpg",
    choices: ["Cam Newton", "Michael Vick", "Doug Williams", "Lamar Smith"],
    correctAnswer: 1,
    asked: false,
  },
  {
    image: "../images/peyton-manning.jpg",
    choices: ["Tom Brady", "Jim Kelly", "Kurt Kitner", "Peyton Manning"],
    correctAnswer: 3,
    asked: false,
  },
]



/*-------------------------------- Variables --------------------------------*/
let winner, questions, currentQuestion, timeLeft, currentScore


/*------------------------ Cached Element References ------------------------*/
const scoreCount = document.getElementById('score-board')
const nextBtn = document.getElementById('next')
const countDown = document.getElementById('time-clock')
const resetBtn = document.getElementById('startOver')
const messages = document.getElementById('msg')
const choices =document.querySelectorAll('.option')

/*----------------------------- Event Listeners -----------------------------*/
choices.forEach(btn => {
  btn.addEventListener('click', handleChoice)
})
nextBtn.addEventListener('click', nextQuestion)
resetBtn.addEventListener('click', clearOut)

// nextBtn.addEventListener('click', nextQuestion)
/*-------------------------------- Functions --------------------------------*/
//when ready to add start button, remove this line
// start button can call upon init()
init ()

function init() {
  questions = [...qbList]
  getQuestion()
  render()
}
// render()
function getQuestion() {
  const idx = getRandomIndex()
  currentQuestion = questions[idx]
  //add show image and choices here
}

function render() {
  messages.textContent = 'Welcome to NAME THAT QUARTERBACK! Press play to get started.'
  displayImage()
}

function displayImage() {
  const image = document.createElement('img')
  image.src = currentQuestion.image
  document.querySelector('#image-area').appendChild(image)
  console.log(currentQuestion.image)
}

function getRandomIndex(){
  const idx = Math.floor(Math.random() * questions.length)
  if (questions[idx].asked === true) {
    getRandomIndex()
  } else {
    return idx
  }

}

function handleChoice(evt) {
  console.log(evt.target.id)
  const choice =parseInt(evt.target.id)
  if (choice === currentQuestion.correctAnswer) {
    scoreCount.textContent = parseInt(scoreCount.textContent) + parseInt(7)
    messages.textContent = 'Touchdown, 7 points have been added to your score!'
  } else {
    messages.textContent = 'Oh no! You have been sacked. Try again!'
  }
}

function clearOut (evt) {

}

function nextQuestion (evt) {
}

timeLeft = 60
let timer = setInterval(function() {
  countDown.textContent = timeLeft + ' secs to go!'
  timeLeft -= 1
  if (timeLeft < 0) {
    countDown.textContent = 'Try, again!'
  }
  // console.log(timeLeft)
}, 1000)

