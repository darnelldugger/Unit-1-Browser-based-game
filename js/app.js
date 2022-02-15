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

]



/*-------------------------------- Variables --------------------------------*/
let winner, timeOut, questions


/*------------------------ Cached Element References ------------------------*/
const imageQuest = document.getElementById('image-area')
const scoreCount = document.getElementById('score-board')
const nextBtn = document.getElementById('next')
const countDown = document.getElementById('time-clock')
const resetBtn = document.getElementById('startOver')
const messages = document.getElementById('msg')
const choices =document.querySelectorAll('#btn')

/*----------------------------- Event Listeners -----------------------------*/
nextBtn.addEventListener('click', (evt) =>{
  evt.preventDefault()
  render()
})

/*-------------------------------- Functions --------------------------------*/
//when ready to add start button, remove this line
// start button can call upon init()
init ()

function init() {
  questions = [...qbList]
  const idx = getRandomIndex()
  console.log(questions[idx])
}
// render()

function render(){
  // imageQuest.src = qbList.image
  const img =document.createElement("img")
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

