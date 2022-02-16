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
let winner, questions, currentQuestion, timeLeft, score


/*------------------------ Cached Element References ------------------------*/
const imageQuest = document.getElementById('image-area')
const scoreCount = document.getElementById('score-board')
const nextBtn = document.getElementById('next')
const countDown = document.getElementById('time-clock')
const resetBtn = document.getElementById('startOver')
const messages = document.getElementById('msg')
const choices =document.querySelectorAll('.option')
console.log(choices)

/*----------------------------- Event Listeners -----------------------------*/
choices.forEach(btn => {
  btn.addEventListener('click', handleChoice)
})

/*-------------------------------- Functions --------------------------------*/
//when ready to add start button, remove this line
// start button can call upon init()
init ()

function init() {
  questions = [...qbList]
  getQuestion()

}
// render()
function getQuestion() {
  const idx = getRandomIndex()
  currentQuestion = questions[idx]
  console.log(currentQuestion)
}

function render(){
  // imageQuest.src = qbList.image
  img.src = qbList.image 
  imageQuest.appendChild(img)
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
    console.log(`Correct you chose ${correctAnswer}`)
  } else {
    console.log('incorrect')
  }
}

timeLeft = 10
let timer = setInterval(function() {
  countDown.textContent = timeLeft + 'seconds remaining.'
  timeLeft -= 1
  if (timeLeft < 0) {
    countDown.textContent = 'Oh no, you lost the game!'
  }
  // console.log(timeLeft)
}, 1000)

score = 0
function getScore () {

}