/*-------------------------------- Constants --------------------------------*/
const seventies = [
  {
    image: "../images/ken-stabler.jpg",
    choices: ["Ken Stabler", "Phil Sims", "Archie Manning", "Terry Bradshaw"],
    correctAnswer: 0,
    asked: false,
  },
  {
    image: "../images/archie-mannin.jpg",
    choices: ["Ken Stabler", "Phil Sims", "Archie Manning", "Terry Bradshaw"],
    correctAnswer: 2,
    asked: false,
  },
  {
    image: "../images/terry-bradshaw.jpg",
    choices: ["Joe Montana", "Phil Sims", "Dan Marino", "Terry Bradshaw"],
    correctAnswer: 3,
    asked: false,
  },
  {
    image: "../images/roger-staubach.jpg",
    choices: ["Joe Montana", "Roger Staubach", "John Elway", "Ken Stabler"],
    correctAnswer: 1,
    asked: false,
  },
  {
    image: "../images/fran-tarkenton.jpg",
    choices: ["Fran Tarkenton", "Phil Sims", "Joe Montana", "Fran Tarkenton"],
    correctAnswer: 3,
    asked: false,
  },
]


const eighties = [
  {
    image: "../images/doug-williams.jpg",
    choices: ["Micheal Vick", "Cam Newton", "Donovan McNabb", "Doug Williams"],
    correctAnswer: 3,
    asked: false,
  },
  {
    image: "../images/joe-montana.jpg",
    choices: ["Joe Montana", "Cam Newton", "Dante Culpepper", "Carson Wentze"],
    correctAnswer: 0,
    asked: false,
  },
  {
    image: "../images/phil-sims.jpg",
    choices: ["Joe Montana", "Cam Newton", "Phil Sims", "Carson Wentze"],
    correctAnswer: 2,
    asked: false,
  },
  {
    image: "../images/dan-marion.jpg",
    choices: ["Joe Montana", "Phil Sims", "Dan Marino", "Carson Wentze"],
    correctAnswer: 2,
    asked: false,
  },
  

  {
    image: "../images/john-elway.jpg",
    choices: ["Joe Montana", "Jim Kelly", "John Elway", "Terry Bradshaw"],
    correctAnswer: 2,
    asked: false,
  },
]

const nineties = [
  {
    image: "../images/brett-favre.jpg",
    choices: ["Tom Brady", "Jim Kelly", "Greg Flaukler", "Brett Favre"],
    correctAnswer: 3,
    asked: false,
  },
  {
    image: "../images/steve-young.jpg",
    choices: ["Joe Montana", "Jim Kelly", "Steve Young", "Terry Bradshaw"],
    correctAnswer: 2,
    asked: false,
  }
  {
    image: "../images/drew-bledsoe.jpg",
    choices: ["Tom Brady", "Jim Kelly", "Drew Bledsoe", "Brett Favre"],
    correctAnswer: 2,
    asked: false,
  },
  {
    image: "../images/jim-kelly.jpg",
    choices: ["Tom Brady", "Jim Kelly", "Andy Warhal", "Brett Favre"],
    correctAnswer: 1,
    asked: false,
  },
  {
    image: "../images/troy-aikman.jpg",
    choices: ["Troy Aikman", "Drew Brees", "Greg Flaukler", "Kurt Kitner"],
    correctAnswer: 3,
    asked: false,
  },
]


const twoThousands =[

  {
    image: "../images/donovan-mcnabb.jpg",
    choices: ["Micheal Vick", "Cam Newton", "Donovan McNabb", "Carson Wentze"],
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
  {
    image: "../images/tom-brady.jpg",
    choices: ["Tom Brady", "Jim Kelly", "Kurt Kitner", "Peyton Manning"],
    correctAnswer: 0,
    asked: false,
  }
]

const allCategories = [seventies, eighties, nineties, twoThousands]

/*-------------------------------- Variables --------------------------------*/
let winner, questions, currentQuestion, timeLeft, currentScore, timerIntervalId
let choiceMade = false
let seconds = 0

/*------------------------ Cached Element References ------------------------*/
const scoreCount = document.getElementById('score-board')
const nextBtn = document.getElementById('next')
const countDown = document.getElementById('time-clock')
const resetBtn = document.getElementById('startOver')
const messages = document.getElementById('msg')
// const choices =document.querySelectorAll('.option')
const btnArea = document.querySelector('#choice-area')

/*----------------------------- Event Listeners -----------------------------*/

nextBtn.addEventListener('click', getQuestion)
// resetBtn.addEventListener('click', renderCategories)
resetBtn.addEventListener('click', resetTimer)
// nextBtn.addEventListener('click', nextQuestion)
/*-------------------------------- Functions --------------------------------*/
//when ready to add start button, remove this line
// start button can call upon init()
init ()

function init() {
  renderCategories()

}

function renderCategories() {
  const categories = ["70's", "80's", "90's", "2000's" ]
  const welcome = document.createElement('h1')
  welcome.textContent = 'Welcome to Name That Quaterback! Please choose a category.'
  messages.appendChild(welcome)
  categories.forEach((btn, idx) => {
    const button = document.createElement('button')
    button.textContent = categories[idx]
    button.id = idx
    button.addEventListener('click', () => pickCategory(idx))
    messages.appendChild(button)
    resetTimer()
  })
}

function pickCategory (index){
  questions = allCategories[index]
  messages.innerHTML = ''
  music()
  handleTimer()
  getQuestion()
}
// render()
function getQuestion() {
  const idx = getRandomIndex()
  currentQuestion = questions[idx]
  choiceMade = false
  render()
  //add show image and choices here
}

function render() {
  clearOut()
  displayImage()
  displayOptions()
  
}

function displayImage() {
  const image = document.createElement('img')
  image.src = currentQuestion.image
  document.querySelector('#image-area').appendChild(image)
  console.log(currentQuestion.image)
}

function displayOptions() {
  currentQuestion.choices.forEach((choice, idx )=> {
    const button = document.createElement('button')
    button.classList.add("btn", "btn-lg", "btn-primary", "option")
    button.id = idx
    button.textContent = choice
    button.addEventListener('click', handleChoice)
    btnArea.appendChild(button)
    
})
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
  if (choiceMade === true)return
  choiceMade = true
  console.log(evt.target.id)
  const choice =parseInt(evt.target.id)
  if (choice === currentQuestion.correctAnswer) {
    scoreCount.textContent = parseInt(scoreCount.textContent) + parseInt(7)
    document.getElementById("msg").style.color = "green"
    messages.textContent = 'Touchdown! +7'
  } else {
    messages.textContent = 'Oh no! You have been sacked. Try again!'

  }
}

function clearOut () {
  document.querySelector('#image-area').textContent = ""
  messages.innerHTML = ''
  
}


function handleTimer () {
  
  timeLeft = 45
  let timerIntervalId = setInterval(function() {
    countDown.textContent = timeLeft + ' secs to go!'
    timeLeft -= 1
    if (timeLeft < 0) {
      document.getElementById("msg").style.color = "red";
      messages.textContent = 'You were sacked on 4th down and lost the game. Press the reset button to try again!';
      document.getElementById("time-clock").style.color = "red";
      countDown.textContent = '0:00'
      choiceMade = true
    }
    // console.log(timeLeft)
  }, 1000)
}

function resetTimer() {
  // Default the button text to Start on reset
	countDown.textContent = "Start"
  clearInterval(timerIntervalId)
  seconds = 0
  timerIntervalId = null
}

function getScore() {
  
}

function music() {
  const music = new Audio('../audio/01 NFL PrimeTime Song (1-4) out o.mp3')
  // music.play()
  // music.loop = true
}